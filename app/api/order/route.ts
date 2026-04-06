import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "orders@sassysignsanddesigns.com";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, phone, occasion, wording, colors, size, dateNeeded, pickupLocation, notes } = body;

  if (!name || !email || !occasion || !wording || !dateNeeded) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const sizeLabels: Record<string, string> = {
    "3x4": "3×4 ft ($50)",
    "3x5": "3×5 ft ($60)",
    unsure: "Not sure",
  };

  const html = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #f4845f; padding: 24px; border-radius: 12px 12px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 24px;">✨ New Order Request!</h1>
      </div>
      <div style="background: #fdf8f3; padding: 24px; border-radius: 0 0 12px 12px; border: 1px solid #f7d9d0;">
        <h2 style="color: #7a4f2e; margin-top: 0;">Customer Info</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>

        <hr style="border: none; border-top: 1px solid #f7d9d0; margin: 20px 0;" />

        <h2 style="color: #7a4f2e;">Sign Details</h2>
        <p><strong>Occasion:</strong> ${occasion}</p>
        <p><strong>Wording:</strong> ${wording}</p>
        <p><strong>Colors:</strong> ${colors || "Not specified"}</p>
        <p><strong>Size:</strong> ${sizeLabels[size] || size}</p>

        <hr style="border: none; border-top: 1px solid #f7d9d0; margin: 20px 0;" />

        <h2 style="color: #7a4f2e;">Timing & Pickup</h2>
        <p><strong>Date Needed:</strong> ${dateNeeded}</p>
        <p><strong>Pickup Area:</strong> ${pickupLocation || "Not specified"}</p>
        <p><strong>Additional Notes:</strong> ${notes || "None"}</p>

        <div style="margin-top: 24px; padding: 16px; background: white; border-radius: 8px; border: 1px solid #f7d9d0;">
          <p style="margin: 0; font-size: 14px; color: #9a6b4b;">
            Reply directly to this email to respond to ${name} at ${email}.
          </p>
        </div>
      </div>
    </div>
  `;

  if (resend) {
    await resend.emails.send({
      from: "Sassy Signs & Designs <orders@sassysignsanddesigns.com>",
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `✨ New Order: ${occasion} sign for ${name}`,
      html,
    });

    // Send confirmation to customer
    await resend.emails.send({
      from: "Sam at Sassy Signs <orders@sassysignsanddesigns.com>",
      to: email,
      subject: "Got your order request! 🎉",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #f4845f; padding: 24px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0;">Your order request is in! ✨</h1>
          </div>
          <div style="background: #fdf8f3; padding: 24px; border-radius: 0 0 12px 12px; border: 1px solid #f7d9d0;">
            <p>Hey ${name.split(" ")[0]}! 👋</p>
            <p>Thanks so much for reaching out! I received your request for a <strong>${occasion}</strong> sign and will get back to you within 1–2 days to confirm the details and pricing.</p>
            <p>In the meantime, feel free to follow along on Instagram: <a href="https://www.instagram.com/sassy_signsanddesigns" style="color: #f4845f;">@sassy_signsanddesigns</a></p>
            <p>Talk soon! 🎨<br/><strong>Sam</strong></p>
          </div>
        </div>
      `,
    });
  } else {
    console.log("Order received (no email sent — RESEND_API_KEY not set):", body);
  }

  return NextResponse.json({ success: true });
}
