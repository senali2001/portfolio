import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  // Validate input
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email address' });
  }

  try {
    // Create a transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD, // Use App Password, not regular password
      },
    });

    // Email to you (portfolio owner)
    const mailToOwner = {
      from: `"${name}" <${process.env.GMAIL_USER}>`,
      to: 'navodhyasenali@gmail.com', // Your email
      subject: `New Portfolio Contact: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${sanitizeHtml(name)}</p>
        <p><strong>Email:</strong> ${sanitizeHtml(email)}</p>
        <p><strong>Subject:</strong> ${sanitizeHtml(subject)}</p>
        <h3>Message:</h3>
        <p>${sanitizeHtml(message).replace(/\n/g, '<br>')}</p>
      `,
    };

    // Confirmation email to sender
    const mailToSender = {
      from: `"Navodhya Senali" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: 'Thank you for contacting me!',
      html: `
        <h2>Thank you, ${sanitizeHtml(name)}!</h2>
        <p>I received your message and will get back to you as soon as possible.</p>
        <hr>
        <p><strong>Your Message:</strong></p>
        <p><strong>Subject:</strong> ${sanitizeHtml(subject)}</p>
        <p>${sanitizeHtml(message).replace(/\n/g, '<br>')}</p>
        <hr>
        <p>Best regards,<br>Navodhya Senali</p>
      `,
    };

    // Send emails
    await transporter.sendMail(mailToOwner);
    await transporter.sendMail(mailToSender);

    return res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ 
      message: 'Failed to send email. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}

// Simple HTML sanitization function
function sanitizeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}
