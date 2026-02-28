import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "messages.json");

function getMessages() {
  if (!fs.existsSync(DATA_FILE)) return [];
  const raw = fs.readFileSync(DATA_FILE, "utf-8");
  return JSON.parse(raw);
}

function saveMessage(entry: Record<string, string>) {
  const messages = getMessages();
  messages.push(entry);
  fs.writeFileSync(DATA_FILE, JSON.stringify(messages, null, 2));
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    // Save to JSON file
    const entry = {
      id: Date.now().toString(),
      name,
      email,
      phone: phone || "",
      message,
      date: new Date().toISOString(),
    };
    saveMessage(entry);

    // Send email via SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    try {
      await transporter.sendMail({
        from: `"MyGold Website" <${process.env.SMTP_FROM}>`,
        to: process.env.SMTP_TO,
        replyTo: email,
        subject: `New Contact Form Message from ${name}`,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;">
            <div style="background:#b8943f;color:white;padding:20px;border-radius:12px 12px 0 0;">
              <h2 style="margin:0;">New Contact Form Submission</h2>
              <p style="margin:8px 0 0;opacity:0.8;">MyGold Website</p>
            </div>
            <div style="border:1px solid #e8dfd2;border-top:none;padding:24px;border-radius:0 0 12px 12px;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
              <hr style="border:none;border-top:1px solid #e8dfd2;margin:16px 0;" />
              <p><strong>Message:</strong></p>
              <p style="background:#f5f0e8;padding:16px;border-radius:8px;white-space:pre-wrap;">${message}</p>
              <hr style="border:none;border-top:1px solid #e8dfd2;margin:16px 0;" />
              <p style="color:#9a8c7e;font-size:12px;">Sent on ${new Date().toLocaleString()}</p>
            </div>
          </div>
        `,
      });
    } catch (emailError) {
      console.error("SMTP email error:", emailError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 },
    );
  }
}
