import express from "express";
import nodemailer from "nodemailer";
const app = express();
app.use(express.json());
app.post("/api/send-email", async (req, res) => {
  const { name, email, message } = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "jones.thierry@gmail.com",
      pass: "fivehouses"
    }
  });
  const mailOptions = {
    from: "jones.thierry@gmail.com",
    to: "jones.thierry@gmail.com",
    subject: "New message from your website contact form",
    text: `
            Name: ${name}
            Email: ${email}
            Message: ${message}
        `
  };
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email" });
  }
});
const port = 3e3;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
