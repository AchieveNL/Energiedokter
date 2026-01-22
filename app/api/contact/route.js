export async function POST(req) {
  const { name, email, phone, message } = await req.json();

  try {
    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": process.env.BREVO_API_KEY,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: { name, email, phone },
        to: [{ email: process.env.RECEIVER_EMAIL }],
        subject: `New message from ${name}`,
        textContent: `
New contact message:

Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}
        `,
      }),
    });

    if (!res.ok) {
      const errorData = await res.text();
      console.error("Brevo error:", errorData);
      throw new Error(`Failed to send email: ${errorData}`);
    }
    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false, error: error.message });
  }
}
