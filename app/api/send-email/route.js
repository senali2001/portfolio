import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const recipient = "navodhyasenali@gmail.com";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid JSON request body" }, { status: 400 });
  }

  const { name, email, subject, message } = body ?? {};
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof subject !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !subject.trim() ||
    !message.trim()
  ) {
    return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
  }

  if (!emailPattern.test(email.trim())) {
    return NextResponse.json({ message: "Invalid email address" }, { status: 400 });
  }

  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    console.error("Contact email is not configured: Gmail credentials are missing.");
    return NextResponse.json(
      { message: "Email service is not configured. Please contact me by email instead." },
      { status: 503 },
    );
  }

  const safeName = escapeHtml(name.trim());
  const safeEmail = escapeHtml(email.trim());
  const safeSubject = escapeHtml(subject.trim());
  const safeMessage = escapeHtml(message.trim()).replace(/\r?\n/g, "<br>");

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      replyTo: email.trim(),
      to: recipient,
      subject: `New Portfolio Contact: ${subject.trim()}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Subject:</strong> ${safeSubject}</p>
        <h3>Message:</h3>
        <p>${safeMessage}</p>
      `,
    });

    await transporter.sendMail({
      from: `"Navodhya Senali" <${process.env.GMAIL_USER}>`,
      to: email.trim(),
      subject: "Thank you for contacting me!",
      html: `
        <h2>Thank you, ${safeName}!</h2>
        <p>I received your message and will get back to you as soon as possible.</p>
        <hr>
        <p><strong>Your Message:</strong></p>
        <p><strong>Subject:</strong> ${safeSubject}</p>
        <p>${safeMessage}</p>
        <hr>
        <p>Best regards,<br>Navodhya Senali</p>
      `,
    });

    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { message: "Failed to send email. Please try again later." },
      { status: 500 },
    );
  }
}
