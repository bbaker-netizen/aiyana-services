import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Basic email format validation
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const handler = async (event) => {
                if (event.httpMethod !== 'POST') {
                                        return {
                                                                        statusCode: 405,
                                                                        body: JSON.stringify({ message: 'Method not allowed' })
                                        };
                }

                try {
                                        const { name, email, phone, message } = JSON.parse(event.body);

                        // Validate required fields
                        if (!name || !email || !message) {
                                                        return {
                                                                                                statusCode: 400,
                                                                                                body: JSON.stringify({ message: 'Missing required fields' })
                                                        };
                        }

                        // Validate email format server-side
                        if (!isValidEmail(email)) {
                                                        return {
                                                                                                statusCode: 400,
                                                                                                body: JSON.stringify({ message: 'Invalid email address' })
                                                        };
                        }

                        // Sanitize inputs to prevent HTML injection in the email body
                        const sanitize = (str) => String(str)
                                                .replace(/&/g, '&amp;')
                                                .replace(/</g, '&lt;')
                                                .replace(/>/g, '&gt;');

                        // Send email via Resend
                        const { data, error } = await resend.emails.send({
                                                        from: 'Aiyana Services <noreply@aiyanaservices.com>',
                                                        to: 'contact@aiyanaservices.com',
                                                        replyTo: email,
                                                        subject: `New contact form submission from ${sanitize(name)}`,
                                                        html: `
                                                                                        <h2>New Contact Form Submission</h2>
                                                                                                                        <p><strong>Name:</strong> ${sanitize(name)}</p>
                                                                                                                                                        <p><strong>Email:</strong> ${sanitize(email)}</p>
                                                                                                                                                                                        ${phone ? `<p><strong>Phone:</strong> ${sanitize(phone)}</p>` : ''}
                                                                                                                                                                                                                        <p><strong>Message:</strong></p>
                                                                                                                                                                                                                                                        <p>${sanitize(message).replace(/\n/g, '<br>')}</p>
                                                                                                                                                                                                                                                                                `
                        });

                        // Check if Resend itself reported an error (e.g. invalid replyTo, domain issue)
                        if (error) {
                                                        console.error('Resend API error:', error);
                                                        return {
                                                                                                statusCode: 502,
                                                                                                body: JSON.stringify({ message: 'Failed to send email. Please try again or contact us by phone.' })
                                                        };
                        }

                        return {
                                                        statusCode: 200,
                                                        body: JSON.stringify({ message: 'Email sent successfully', id: data.id })
                        };
                } catch (error) {
                                        console.error('Contact function error:', error);
                                        return {
                                                                        statusCode: 500,
                                                                        body: JSON.stringify({ message: 'Failed to send email', error: error.message })
                                        };
                }
};
