import type { Request, Response } from 'express';
import nodemailer from 'nodemailer';

export default async function sendEmail(req: Request, res: Response) {
    const { name, email, message } = req.body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
        // Specify your email service provider SMTP details here
        service: 'gmail',
        auth: {
            user: 'jones.thierry@gmail.com', // Your email address
            pass: 'fivehouses' // Your email password or app-specific password
        }
    });

    // Configure the email
    const mailOptions = {
        from: 'jones.thierry@gmail.com',
        to: 'jones.thierry@gmail.com', // Recipient email address
        subject: 'New message from your website contact form',
        text: `
            Name: ${name}
            Email: ${email}
            Message: ${message}
        `
    };

    try {
        // Send the email
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to send email' });
    }
}
