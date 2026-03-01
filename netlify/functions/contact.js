import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const handler = async (event) => {
        if (event.httpMethod !== 'POST') {
                    return {
                                        statusCode: 405,
                                        body: JSON.stringify({ message: 'Method not allowed' })
                    };
        }

        try {
                    const { name, email, phone, message } = JSON.parse(event.body);

            // Validate inputs
            if (!name || !email || !message) {
                            return {
                                                    statusCode: 400,
                                                    body: JSON.stringify({ message: 'Missing required fields' })
                            };
            }

            // Send email via Resend
            const data = await resend.emails.send({
                                from: 'Aiyana Services <noreply@aiyanaservices.com>',
                                to: 'contact@aiyanaservices.com',
                                replyTo: email,
                                subject: `New contact form submission from ${name}`,
                                html: `
                                                    <h2>New Contact Form Submission</h2>
                                                                        <p><strong>Name:</strong> ${name}</p>
                                                                                            <p><strong>Email:</strong> ${email}</p>
                                                                                                                ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
                                                                                                                                    <p><strong>Message:</strong></p>
                                                                                                                                                        <p>${message.replace(/\n/g, '<br>')}</p>
                                                                                                                                                                        `
            });

            return {
                                statusCode: 200,
                                body: JSON.stringify({ message: 'Email sent successfully', data })
            };
        } catch (error) {
                    return {
                                        statusCode: 500,
                                        body: JSON.stringify({ message: 'Failed to send email', error: error.message })
                    };
        }
};
