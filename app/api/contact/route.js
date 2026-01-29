// import { NextResponse } from 'next/server';

// export async function POST(request) {
//   try {
//     const { name, email, phone, message } = await request.json();

//     console.log("=== Contact Form Submission ===");
//     console.log("Data received:", { name, email, phone });
//     console.log("BREVO_API_KEY exists:", !!process.env.BREVO_API_KEY);
//     console.log("RECEIVER_EMAIL:", process.env.RECEIVER_EMAIL);

//     if (!process.env.BREVO_API_KEY) {
//       console.error("❌ BREVO_API_KEY not configured");
//       return NextResponse.json(
//         { success: false, error: "Server configuration error" },
//         { status: 500 }
//       );
//     }

//     if (!process.env.RECEIVER_EMAIL) {
//       console.error("❌ RECEIVER_EMAIL not configured");
//       return NextResponse.json(
//         { success: false, error: "Server configuration error" },
//         { status: 500 }
//       );
//     }

//     const emailPayload = {
//       sender: {
//         name: "Contact Form",
//         email: process.env.SENDER_EMAIL || process.env.RECEIVER_EMAIL,
//       },
//       to: [{
//         email: process.env.RECEIVER_EMAIL
//       }],
//       replyTo: {
//         email: email,
//         name: name
//       },
//       subject: `Contact Form: ${name}`,
//       htmlContent: `
//         <h3>New Contact Form Submission</h3>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone:</strong> ${phone}</p>
//         <p><strong>Message:</strong></p>
//         <p>${message?.replace(/\n/g, "<br>") || "No message"}</p>
//       `,
//     };

//     console.log("Sending to Brevo API...");

//     const res = await fetch("https://api.brevo.com/v3/smtp/email", {
//       method: "POST",
//       headers: {
//         "accept": "application/json",
//         "api-key": process.env.BREVO_API_KEY,
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(emailPayload),
//     });

//     const data = await res.json();
//     console.log("Brevo response status:", res.status);
//     console.log("Brevo response data:", data);

//     if (!res.ok) {
//       console.error("❌ Brevo API error:", data);
//       return NextResponse.json(
//         { success: false, error: data.message || "Failed to send email" },
//         { status: res.status }
//       );
//     }

//     console.log("✅ Email sent successfully");
//     return NextResponse.json({ success: true });

//   } catch (error) {
//     console.error("❌ ERROR in /api/contact:");
//     console.error(error);

//     return NextResponse.json(
//       {
//         success: false,
//         error: error.message || "Internal server error"
//       },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from "next/server";

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
        { status: 500 },
      );
    }

    if (!process.env.RECEIVER_EMAIL) {
      console.error("❌ RECEIVER_EMAIL not configured");
      return NextResponse.json(
        { success: false, error: "Server configuration error" },
        { status: 500 },
      );
    }

    const emailPayload = {
      sender: {
        name: `${name} (via Contact Form)`, // Shows user's name
        email: process.env.SENDER_EMAIL || process.env.RECEIVER_EMAIL,
      },
      to: [
        {
          email: process.env.RECEIVER_EMAIL,
          name: "Energie Dokter", // Your company name
        },
      ],
      replyTo: {
        email: email, // When you hit reply, it goes to the user
        name: name,
      },
      subject: `New Contact: ${name} - ${email}`, // User info in subject
      htmlContent: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #81C713; border-bottom: 2px solid #81C713; padding-bottom: 10px;">
            Nieuw Contactformulier Bericht
          </h2>
          
          <div style="background-color: #f6f6f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Van:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 10px 0;"><strong>Telefoon:</strong> <a href="tel:${phone}">${phone}</a></p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #254055;">Bericht:</h3>
            <p style="line-height: 1.6; color: #4D4D4D;">${message?.replace(/\n/g, "<br>") || "Geen bericht"}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #888; font-size: 12px;">
            <p>💡 <strong>Tip:</strong> Klik op "Antwoorden" om direct te reageren naar ${email}</p>
          </div>
        </div>
      `,
      textContent: `
Nieuw Contactformulier Bericht

Van: ${name}
Email: ${email}
Telefoon: ${phone}

Bericht:
${message || "Geen bericht"}

---
Antwoord direct door te reageren op deze email.
      `,
    };

    console.log("Sending to Brevo API...");

    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
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
        { status: res.status },
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
        error: error.message || "Internal server error",
      },
      { status: 500 },
    );
  }
}
