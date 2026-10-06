import express from 'express';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT || 4000);

app.use(express.json({ limit: '1mb' }));

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body || {};
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const isPlaceholderPassword = !smtpPass || /replace-with-your-gmail-app-password|your-gmail-app-password-here/i.test(smtpPass);

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'Please complete every field before sending the message.' });
  }

  if (!smtpUser || !smtpPass || isPlaceholderPassword) {
    return res.status(500).json({
      message:
        'SMTP is not configured correctly. Open the .env file, keep SMTP_USER as your Gmail address, and replace SMTP_PASS with your real Gmail App Password.',
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT || 587),
      secure: Number(process.env.SMTP_PORT || 587) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const destination = process.env.CONTACT_TO || process.env.SMTP_USER;

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
          <p>${message.replace(/\n/g, '<br />')}</p>
        </div>
      `,
    });

    return res.status(200).json({ message: 'Your message has been sent successfully.' });
  } catch (error) {
    const message = error && typeof error === 'object' && 'code' in error ? String((error).code) : '';
    const responseCode = error && typeof error === 'object' && 'responseCode' in error ? String((error).responseCode) : '';

    console.error('Mail send failed:', error);

    if (message.includes('EAUTH') || responseCode.includes('535') || /Username and Password not accepted|Invalid login|535/i.test(String(error))) {
      return res.status(500).json({
        message:
          'Gmail rejected the login. Use a real Gmail App Password in the .env file instead of your normal password.',
      });
    }

    return res.status(500).json({
      message:
        'Unable to send the email right now. Please check your SMTP credentials or use the direct email link instead.',
    });
  }
});

app.listen(PORT, () => {
  console.log(`Mail server is running on http://localhost:${PORT}`);
});
