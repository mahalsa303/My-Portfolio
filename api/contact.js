import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed.' });
  }

  const { name, email, subject, message } = req.body || {};
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'Please complete every field before sending the message.' });
  }

  if (!smtpUser || !smtpPass) {
    return res.status(500).json({
      message: 'SMTP is not configured. Add SMTP_USER and SMTP_PASS in the Vercel environment variables.',
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT || 587),
      secure: Number(process.env.SMTP_PORT || 587) === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const destination = process.env.CONTACT_TO || smtpUser;

    await transporter.sendMail({
      from: `"${name}" <${smtpUser}>`,
      to: destination,
      replyTo: email,
      subject: `[Portfolio Contact] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height:1.6; color:#111827;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr />
          <p>${String(message).replace(/\n/g, '<br />')}</p>
        </div>
      `,
    });

    return res.status(200).json({ message: 'Your message has been sent successfully.' });
  } catch (error) {
    console.error('Vercel mail send failed:', error);
    return res.status(500).json({
      message: 'Unable to send the email right now. Please check your SMTP credentials or use the direct email link instead.',
    });
  }
}
