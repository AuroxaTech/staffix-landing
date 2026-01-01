import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, employees, platform, message } = body;

    // Validate required fields
    if (!name || !email || !company) {
      return NextResponse.json(
        { error: 'Name, email, and company are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.hostinger.com',
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER || 'hello@staffix.co',
        pass: process.env.SMTP_PASSWORD || '',
      },
    });

    // Email content
    const mailOptions = {
      from: `"StaffiX Website" <${process.env.SMTP_USER || 'hello@staffix.co'}>`,
      to: 'hello@staffix.co',
      replyTo: email,
      subject: `New Demo Request from ${name} - ${company}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #22479b 0%, #3a5fb8 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #22479b; margin-bottom: 5px; display: block; }
              .value { color: #374151; }
              .footer { background: #f3f4f6; padding: 15px; text-align: center; color: #6b7280; font-size: 12px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2 style="margin: 0;">New Demo Request</h2>
                <p style="margin: 10px 0 0 0; opacity: 0.9;">Someone has requested a demo of StaffiX</p>
              </div>
              <div class="content">
                <div class="field">
                  <span class="label">Full Name:</span>
                  <span class="value">${name}</span>
                </div>
                <div class="field">
                  <span class="label">Email:</span>
                  <span class="value"><a href="mailto:${email}">${email}</a></span>
                </div>
                <div class="field">
                  <span class="label">Company:</span>
                  <span class="value">${company}</span>
                </div>
                ${employees ? `
                <div class="field">
                  <span class="label">Team Size:</span>
                  <span class="value">${employees}</span>
                </div>
                ` : ''}
                ${platform ? `
                <div class="field">
                  <span class="label">Current Platform:</span>
                  <span class="value">${platform}</span>
                </div>
                ` : ''}
                ${message ? `
                <div class="field">
                  <span class="label">Message:</span>
                  <div class="value" style="background: white; padding: 15px; border-radius: 6px; border: 1px solid #e5e7eb; margin-top: 10px;">
                    ${message.replace(/\n/g, '<br>')}
                  </div>
                </div>
                ` : ''}
                <div class="field" style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #e5e7eb;">
                  <p style="margin: 0; color: #6b7280; font-size: 14px;">
                    <strong>Next Steps:</strong><br>
                    Reply directly to this email to contact ${name} at ${email}
                  </p>
                </div>
              </div>
              <div class="footer">
                This email was sent from the StaffiX website contact form
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
New Demo Request from StaffiX Website

Full Name: ${name}
Email: ${email}
Company: ${company}
${employees ? `Team Size: ${employees}` : ''}
${platform ? `Current Platform: ${platform}` : ''}
${message ? `\nMessage:\n${message}` : ''}

---
Reply to this email to contact ${name} at ${email}
      `.trim(),
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Demo request submitted successfully. We will contact you soon!' 
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { 
        error: 'Failed to send email. Please try again later or contact us directly at hello@staffix.co',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}

