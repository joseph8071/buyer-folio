import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div 
        className="contact-success"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="success-content">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="success-icon">✓</span>
          </motion.div>
          <h2>Thank You!</h2>
          <p>Your message has been sent successfully. We'll get back to you soon.</p>
          <button 
            onClick={() => setSubmitted(false)}
            className="btn-secondary"
          >
            Send Another Message
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.main 
      className="contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className="page-hero">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Contact Us</h1>
          <p className="page-subtitle">
            Have questions? We're here to help you start your journey to homeownership.
          </p>
        </motion.div>
      </section>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>We're here to answer any questions about co-buying and our services.</p>
          
          <div className="contact-methods">
            <div className="contact-method">
              <span className="contact-icon">📧</span>
              <div>
                <h3>Email Us</h3>
                <p>support@buyerfolio.com</p>
              </div>
            </div>
            <div className="contact-method">
              <span className="contact-icon">📞</span>
              <div>
                <h3>Call Us</h3>
                <p>1-800-BUYER-FOLIO</p>
              </div>
            </div>
            <div className="contact-method">
              <span className="contact-icon">📍</span>
              <div>
                <h3>Visit Us</h3>
                <p>123 Innovation Street<br />San Francisco, CA 94105</p>
              </div>
            </div>
          </div>
        </div>

        <motion.form 
          onSubmit={handleSubmit}
          className="contact-form"
          initial={{ x: 20 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            >
              <option value="general">General Inquiry</option>
              <option value="partnership">Partnership Opportunity</option>
              <option value="support">Technical Support</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="How can we help you?"
              rows="5"
            />
          </div>

          <button 
            type="submit" 
            className={`btn-primary ${loading ? 'loading' : ''}`}
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </motion.form>
      </div>
    </motion.main>
  );
};

export default Contact;
