import { Resend } from "resend";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./services/firebase";
import { appendRow, formatRow } from "./services/googleSheets";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    // Handle CORS
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        const {
            name,
            email,
            company,
            companyName,
            agencyName,
            phone,
            phoneNumber,
            service,
            defaultService,
            message,
            sourcePage,
            formType,
            budgetRange,
            clientCount,
            website
        } = req.body;

        if (!name || !email) {
            return res.status(400).json({ error: "Name and Email are required fields" });
        }

        // Consolidated and cleaned data
        const resolvedPhone = phone || phoneNumber || "";
        const resolvedCompany = company || companyName || agencyName || "";
        const resolvedService = service || defaultService || "";
        const resolvedSource = sourcePage || "Contact Page";
        const resolvedFormType = formType || "General Contact";

        const contactData = {
            name,
            email,
            company: resolvedCompany,
            phone: resolvedPhone,
            service: resolvedService,
            message: message || "",
            website: website || "",
            budgetRange: budgetRange || "",
            clientCount: clientCount || "",
            sourcePage: resolvedSource,
            formType: resolvedFormType,
            status: "new",
            timestamp: new Date()
        };

        // 1. Save data to Firebase (Primary Database)
        let docRef;
        try {
            docRef = await addDoc(collection(db, "contacts"), {
                ...contactData,
                timestamp: serverTimestamp() // Use Firebase's server timestamp for database accuracy
            });
            console.log("Saved contact to Firebase with ID:", docRef.id);
        } catch (firebaseErr) {
            console.error("Firebase write error:", firebaseErr);
            return res.status(500).json({ error: "Failed to save data to database" });
        }

        // 2. Append to Google Sheets (only if Firebase save succeeded)
        const sheetId = process.env.GOOGLE_SHEET_ID;
        const sheetName = process.env.GOOGLE_SHEET_NAME || "Contacts";
        if (sheetId && process.env.GOOGLE_SERVICE_ACCOUNT_KEY) {
            try {
                const row = formatRow("contact", contactData);
                await appendRow(sheetId, sheetName, row);
                console.log("Appended contact to Google Sheet:", sheetName);
            } catch (sheetErr) {
                // Log Sheets error but do NOT fail the response or rollback Firebase
                console.error("Google Sheets append error:", sheetErr);
            }
        } else {
            console.warn("Google Sheets sync skipped: Credentials or Sheet ID not configured.");
        }

        // 3. Send notification email to admin
        try {
            await resend.emails.send({
                from: "XD Media <no-reply@xdmedia.in>",
                to: "connect@xdmedia.in",
                subject: `New Contact Form: ${name}`,
                html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #47BF72;">New Contact Form Submission</h2>
              <hr style="border: 1px solid #eee;" />
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              ${resolvedCompany ? `<p><strong>Company:</strong> ${resolvedCompany}</p>` : ""}
              ${resolvedPhone ? `<p><strong>Phone:</strong> ${resolvedPhone}</p>` : ""}
              ${resolvedService ? `<p><strong>Service Interested:</strong> ${resolvedService}</p>` : ""}
              ${website ? `<p><strong>Website:</strong> ${website}</p>` : ""}
              ${budgetRange ? `<p><strong>Budget Range:</strong> ${budgetRange}</p>` : ""}
              ${clientCount ? `<p><strong>Client Count:</strong> ${clientCount}</p>` : ""}
              <p><strong>Source Page:</strong> ${resolvedSource}</p>
              <p><strong>Form Type:</strong> ${resolvedFormType}</p>
              <hr style="border: 1px solid #eee;" />
              <h3>Message:</h3>
              <p style="background: #f9f9f9; padding: 15px; border-radius: 8px;">${message || "No message provided."}</p>
              <hr style="border: 1px solid #eee;" />
              <p style="color: #666; font-size: 12px;">This email was sent from the contact form at xdmedia.in</p>
            </div>
          `,
            });
        } catch (emailErr) {
            console.error("Admin email error:", emailErr);
        }

        // 4. Send confirmation email to user
        try {
            await resend.emails.send({
                from: "XD Media <no-reply@xdmedia.in>",
                to: email,
                subject: "Thank you for contacting XD Media!",
                html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #47BF72;">Thank You for Reaching Out!</h2>
              <p>Hi ${name},</p>
              <p>We've received your message and our team will get back to you within 24 hours.</p>
              <hr style="border: 1px solid #eee;" />
              ${message ? `
              <h3>Your Message:</h3>
              <p style="background: #f9f9f9; padding: 15px; border-radius: 8px;">${message}</p>
              <hr style="border: 1px solid #eee;" />
              ` : ""}
              <p>Best regards,</p>
              <p><strong>The XD Media Team</strong></p>
              <p style="color: #666; font-size: 12px;">
                SCO-40, HLP Galleria, SAS Nagar Mohali, 160062, Chandigarh<br/>
                +91 7901724043 | connect@xdmedia.in
              </p>
            </div>
          `,
            });
        } catch (emailErr) {
            console.error("User email error:", emailErr);
        }

        return res.status(200).json({ success: true, id: docRef.id });
    } catch (err) {
        console.error("Contact email error:", err);
        return res.status(500).json({ error: "Failed to process request" });
    }
}

