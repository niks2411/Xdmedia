import { Resend } from "resend";

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
        const { name, email, company, phone, service, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        // Send notification email to admin
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
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
          ${service ? `<p><strong>Service Interested:</strong> ${service}</p>` : ""}
          <hr style="border: 1px solid #eee;" />
          <h3>Message:</h3>
          <p style="background: #f9f9f9; padding: 15px; border-radius: 8px;">${message}</p>
          <hr style="border: 1px solid #eee;" />
          <p style="color: #666; font-size: 12px;">This email was sent from the contact form at xdmedia.in</p>
        </div>
      `,
        });

        // Send confirmation email to user
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
          <h3>Your Message:</h3>
          <p style="background: #f9f9f9; padding: 15px; border-radius: 8px;">${message}</p>
          <hr style="border: 1px solid #eee;" />
          <p>Best regards,</p>
          <p><strong>The XD Media Team</strong></p>
          <p style="color: #666; font-size: 12px;">
            SCO-40, HLP Galleria, SAS Nagar Mohali, 160062, Chandigarh<br/>
            +91 7901724043 | connect@xdmedia.in
          </p>
        </div>
      `,
        });

        return res.status(200).json({ success: true });
    } catch (err) {
        console.error("Contact email error:", err);
        return res.status(500).json({ error: "Failed to send email" });
    }
}
