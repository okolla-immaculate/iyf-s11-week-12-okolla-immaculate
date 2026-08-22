import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-container">
        <div className="contact-info">
          <p>
            I'm currently open to new opportunities, collaborations, or project inquiries. Feel free to send a message!
          </p>
          <div className="contact-details">
          
            <p><strong>Location:</strong> Available Remote / On-site</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {submitted && <p className="success-msg">Thank you! Your message has been sent.</p>}
          <input
            type="text"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          ></textarea>
          <button type="submit" className="btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}