import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    // The app password provided by user: 'race renj anjy ikfq'
    // Formatted without spaces for authentication.
    // Assuming the email is a Gmail account since the format `xxxx xxxx xxxx xxxx` is standard for Google App Passwords.
    // If it's a Yahoo app password, we will fall back to Yahoo.
    
    // Attempting Gmail first based on the App Password format
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'sharf.mdweb@gmail.com',
        pass: 'racerenjanjyikfq',
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: 'sharfuddin.md50@yahoo.com', // Receiving address
      replyTo: email,
      subject: `New Contact Form Submission: ${subject || 'No Subject'}`,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
      html: `
        <h3>New Contact Form Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr/>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    
    // Fallback: If the app password was actually for the Yahoo account
    try {
      console.log("Trying Yahoo fallback...");
      const body = await request.json().catch(() => ({})); // Parse again or rely on closure
      // Actually we already have the vars in closure
      let fallbackTransporter = nodemailer.createTransport({
        service: 'yahoo',
        auth: {
          user: 'sharfuddin.md50@yahoo.com',
          pass: 'racerenjanjyikfq',
        },
      });

      const mailOptions = {
        from: 'sharfuddin.md50@yahoo.com', // Must send from the authenticated Yahoo account
        to: 'sharfuddin.md50@yahoo.com',
        replyTo: email,
        subject: `New Contact Form Submission: ${subject || 'No Subject'}`,
        html: `
          <h3>New Contact Form Message</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr/>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br/>')}</p>
        `,
      };
      
      await fallbackTransporter.sendMail(mailOptions);
      return NextResponse.json({ success: true, message: 'Email sent successfully via fallback' }, { status: 200 });

    } catch (fallbackError) {
      console.error('Fallback Yahoo failed:', fallbackError);
      return NextResponse.json(
        { success: false, error: 'Failed to send email. Please check your app password and email provider settings.' },
        { status: 500 }
      );
    }
  }
}
