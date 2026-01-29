import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();
    
    console.log("=== Contact Form Submission ===");
    console.log("Data received:", { name, email, phone });
    console.log("BREVO_API_KEY exists:", !!process.env.BREVO_API_KEY);
    console.log("RECEIVER_EMAIL:", process.env.RECEIVER_EMAIL);

    if (!process.env.BREVO_API_KEY) {
      console.error("❌ BREVO_API_KEY not configured");
      return NextResponse.json(
        { success: false, error: "Server configuration error" },
        { status: 500 }
      );
    }

    if (!process.env.RECEIVER_EMAIL) {
      console.error("❌ RECEIVER_EMAIL not configured");
      return NextResponse.json(
        { success: false, error: "Server configuration error" },
        { status: 500 }
      );
    }

    const emailPayload = {
      sender: {
        name: "Contact Form",
        email: process.env.SENDER_EMAIL || process.env.RECEIVER_EMAIL,
      },
      to: [{ 
        email: process.env.RECEIVER_EMAIL 
      }],
      replyTo: { 
        email: email,
        name: name 
      },
      subject: `Contact Form: ${name}`,
      htmlContent: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message?.replace(/\n/g, "<br>") || "No message"}</p>
      `,
    };

    console.log("Sending to Brevo API...");

    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "api-key": process.env.BREVO_API_KEY,
        "content-type": "application/json",
      },
      body: JSON.stringify(emailPayload),
    });

    const data = await res.json();
    console.log("Brevo response status:", res.status);
    console.log("Brevo response data:", data);

    if (!res.ok) {
      console.error("❌ Brevo API error:", data);
      return NextResponse.json(
        { success: false, error: data.message || "Failed to send email" },
        { status: res.status }
      );
    }

    console.log("✅ Email sent successfully");
    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("❌ ERROR in /api/contact:");
    console.error(error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: error.message || "Internal server error"
      },
      { status: 500 }
    );
  }
}