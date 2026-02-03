import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, contactNo, subject, message, honeypot, formLoadTime } = body;

    // Spam prevention: Check honeypot field (should be empty)
    if (honeypot && honeypot.trim() !== '') {
      // Bot detected - silently reject
      return NextResponse.json(
        { message: 'Form submitted successfully! We will get back to you soon.' },
        { status: 200 }
      );
    }

    // Spam prevention: Check if form was submitted too quickly (less than 3 seconds)
    if (formLoadTime) {
      const timeSpent = Date.now() - parseInt(formLoadTime);
      if (timeSpent < 3000) {
        // Submitted too quickly - likely a bot
        return NextResponse.json(
          { error: 'Please take your time filling out the form.' },
          { status: 400 }
        );
      }
    }

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'vikram.bhanwala@thebrandbee.com',
        pass: 'dsxyjpbagsvxvaaq',
      },
    });

    // Email content
    const mailOptions = {
      from: 'newrelic@intelliplatforms.com',
      to: 'newrelic@intelliplatforms.com',
      replyTo: email,
      subject: `Contact Form Submission: ${subject || 'No Subject'}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact No:</strong> ${contactNo || 'Not provided'}</p>
        <p><strong>Purpose of Contact:</strong> ${subject || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message || 'No message provided'}</p>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Contact No: ${contactNo || 'Not provided'}
        Purpose of Contact: ${subject || 'Not provided'}
        Message: ${message || 'No message provided'}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Form submitted successfully! We will get back to you soon.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
