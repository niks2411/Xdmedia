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
        const { name, email, phone, bookingDate, timeSlot } = req.body;

        if (!name || !email || !bookingDate || !timeSlot) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        // Format the date nicely
        const formattedDate = new Date(bookingDate).toLocaleDateString("en-IN", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        });

        // Send confirmation email to user
        await resend.emails.send({
            from: "XD Media <no-reply@xdmedia.in>",
            to: email,
            subject: "🗓️ Your 30-Minute Consultation is Confirmed – XD Media",
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #fff; padding: 30px; border-radius: 16px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #47BF72; margin-bottom: 10px;">Booking Confirmed ✅</h1>
          </div>
          
          <p style="font-size: 16px;">Hi ${name},</p>
          <p style="font-size: 16px; color: #ccc;">Thank you for scheduling a consultation with XD Media. We're excited to discuss your project!</p>
          
          <div style="background: linear-gradient(135deg, rgba(71, 191, 114, 0.2), rgba(71, 191, 114, 0.1)); padding: 25px; border-radius: 12px; margin: 25px 0; border: 1px solid rgba(71, 191, 114, 0.3);">
            <h3 style="color: #47BF72; margin-top: 0;">📅 Booking Details</h3>
            <p style="margin: 10px 0;"><strong>Date:</strong> ${formattedDate}</p>
            <p style="margin: 10px 0;"><strong>Time:</strong> ${timeSlot}</p>
            <p style="margin: 10px 0;"><strong>Duration:</strong> 30 minutes</p>
            ${phone ? `<p style="margin: 10px 0;"><strong>Your Phone:</strong> ${phone}</p>` : ""}
          </div>
          
          <p style="color: #ccc;">Our team will reach out to you at the scheduled time. If you need to reschedule, please contact us.</p>
          
          <hr style="border: 1px solid #333; margin: 25px 0;" />
          
          <p style="color: #666; font-size: 14px;">Best regards,</p>
          <p style="color: #fff; font-size: 14px;"><strong>The XD Media Team</strong></p>
          <p style="color: #666; font-size: 12px;">
            SCO-40, HLP Galleria, SAS Nagar Mohali, 160062, Chandigarh<br/>
            +91 7901724043 | connect@xdmedia.in
          </p>
        </div>
      `,
        });

        // Send notification email to admin
        await resend.emails.send({
            from: "XD Media <no-reply@xdmedia.in>",
            to: "connect@xdmedia.in",
            subject: `New Booking: ${name} - ${formattedDate}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #47BF72;">New Consultation Booking</h2>
          <hr style="border: 1px solid #eee;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
          <p><strong>Date:</strong> ${formattedDate}</p>
          <p><strong>Time Slot:</strong> ${timeSlot}</p>
          <hr style="border: 1px solid #eee;" />
          <p style="color: #666; font-size: 12px;">This booking was made at xdmedia.in</p>
        </div>
      `,
        });

        return res.status(200).json({ success: true });
    } catch (err) {
        console.error("Booking email error:", err);
        return res.status(500).json({ error: "Failed to send email" });
    }
}
