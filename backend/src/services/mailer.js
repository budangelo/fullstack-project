import nodemailer from "nodemailer";

const port = Number(process.env.SMTP_PORT);
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port,
  secure: port === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

const sendWelcomeEmail = async (to) => {
  const from = `"${process.env.FROM_NAME}" <${process.env.FROM_EMAIL}>`;
  await transporter.sendMail({
    from,
    to,
    subject: "Benvenuto su Tepui Finanza",
    text: "Benvenuto su Tepui Finanza. Iscrizione completata.",
    html: "<p><strong>Benvenuto su Tepui Finanza</strong></p><p>Iscrizione Completata!!!</p>"
  });
};

export {sendWelcomeEmail}