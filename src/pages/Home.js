import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <main className="home-page">
      <section className="hero">
        <motion.div 
          className="hero-content"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={fadeIn.transition}
        >
          <h1>Empowering Everyone to Own a Home</h1>
          <p className="hero-subtitle">
            Transform your homeownership dreams into reality with shared mortgages, 
            smart co-buyer matching, and data-driven insights.
          </p>
          <div className="hero-cta">
            <Link to="/contact" className="btn-primary">Get Started</Link>
            <Link to="/about" className="btn-secondary">Learn More</Link>
          </div>
        </motion.div>
      </section>
      
      <section className="features">
        <h2>Why Choose Buyer Folio?</h2>
        <div className="features-grid">
          <motion.div 
            className="feature-card"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="feature-icon">🏠</div>
            <h3>Shared Mortgages</h3>
            <p>Smart agreements and fair risk distribution for co-buyers.</p>
          </motion.div>

          <motion.div 
            className="feature-card"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="feature-icon">🤝</div>
            <h3>Co-Buyer Matching</h3>
            <p>Find compatible co-buyers aligned with your goals and finances.</p>
          </motion.div>

          <motion.div 
            className="feature-card"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="feature-icon">📊</div>
            <h3>Smart Analytics</h3>
            <p>Make informed decisions with our real-time market insights.</p>
          </motion.div>
        </div>
      </section>

      <section className="testimonials">
        <h2>Success Stories</h2>
        <motion.div 
          className="testimonial"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="testimonial-content">
            <p>
              "Buyer Folio transformed our home-buying journey. The co-buying process was 
              seamless, and their platform made it easy to find the perfect partner. We're 
              now proud homeowners thanks to their innovative approach and dedicated support."
            </p>
            <div className="testimonial-author">
              <img 
                src="/path-to-avatar.jpg" 
                alt="Alice Mitchell" 
                className="author-avatar" 
              />
              <div className="author-info">
                <strong>Alice Mitchell</strong>
                <span>First-time Homeowner in San Francisco</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Start Your Home Buying Journey?</h2>
          <p>Join thousands of successful co-buyers who found their path to homeownership.</p>
          <Link to="/contact" className="btn-primary">Get Started Today</Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
