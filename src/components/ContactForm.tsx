'use client';

import { useState, FormEvent, ChangeEvent } from 'react';

interface FormData {
    name: string;
    email: string;
    message: string;
}

type SubmissionStatus = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
          name: '',
          email: '',
          message: ''
    });
    const [status, setStatus] = useState<SubmissionStatus>('idle');
    const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
                ...prev,
                [name]: value
        }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
                const response = await fetch('/.netlify/functions/contact', {
                          method: 'POST',
                          body: JSON.stringify(formData)
                });

          if (!response.ok) {
                    throw new Error('Failed to send message');
          }

          setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
                setStatus('error');
                setErrorMessage(error instanceof Error ? error.message : 'Unknown error');
        }
  };

  return (
        <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                      <label htmlFor="name">Name:</label>label>
                      <input
                                  type="text"
                                  id="name"
                                  name="name"
                                  value={formData.name}
                                  onChange={handleChange}
                                  required
                                  className="form-input"
                                />
              </div>div>
        
              <div className="form-group">
                      <label htmlFor="email">Email:</label>label>
                      <input
                                  type="email"
                                  id="email"
                                  name="email"
                                  value={formData.email}
                                  onChange={handleChange}
                                  required
                                  className="form-input"
                                />
              </div>div>
        
              <div className="form-group">
                      <label htmlFor="message">Message:</label>label>
                      <textarea
                                  id="message"
                                  name="message"
                                  value={formData.message}
                                  onChange={handleChange}
                                  required
                                  rows={5}
                                  className="form-textarea"
                                />
              </div>div>
        
              <button type="submit" disabled={status === 'loading'} className="submit-button">
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>button>
        
          {status === 'success' && <p className="success-message">Message sent successfully!</p>p>}
          {status === 'error' && <p className="error-message">Error: {errorMessage}</p>p>}
        </form>form>
      );
}</form>
