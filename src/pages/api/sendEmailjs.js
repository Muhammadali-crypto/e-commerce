import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'muhammadalimuhammadali2012@gmail.com',
      pass: 'muhammadali2012@@@', // не обычный пароль, а app password
    },
  });

  await transporter.sendMail({
    from: 'muhammadalimuhammadali2012@gmail.com',
    to: email,
    subject,
    text: message,
  });

  res.status(200).json({ success: true });
}
