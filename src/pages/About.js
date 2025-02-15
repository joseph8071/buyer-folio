import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <motion.main 
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className="about-hero">
        <motion.div 
          className="about-hero-content"
          {...fadeIn}
        >
          <span className="about-label">About Us</span>
          <h1>Revolutionizing Home Ownership Together</h1>
          <p className="about-subtitle">
            We're on a mission to make homeownership accessible through innovative 
            financial solutions and community-driven approaches.
          </p>
        </motion.div>
      </section>

      <section className="about-stats">
        <div className="stats-grid">
          {[
            { number: "5K+", label: "Happy Homeowners" },
            { number: "$2B+", label: "Property Value" },
            { number: "98%", label: "Success Rate" },
            { number: "24/7", label: "Support" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="stat-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="about-mission">
        <div className="mission-container">
          <motion.div 
            className="mission-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Our Mission</h2>
            <p>
              At Buyer Folio, we believe everyone deserves the opportunity to own a home. 
              Through innovative co-buying solutions and cutting-edge technology, we're 
              breaking down traditional barriers to homeownership and building stronger 
              communities together.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="about-values">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          {[
            {
              icon: "🤝",
              title: "Community First",
              description: "Building strong communities through collaborative homeownership."
            },
            {
              icon: "💡",
              title: "Innovation",
              description: "Constantly evolving our solutions to meet modern housing challenges."
            },
            {
              icon: "🎯",
              title: "Accessibility",
              description: "Making homeownership achievable for everyone."
            },
            {
              icon: "🛡️",
              title: "Trust",
              description: "Ensuring secure and transparent co-buying experiences."
            }
          ].map((value, index) => (
            <motion.div
              key={index}
              className="value-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="value-icon">{value.icon}</span>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="about-cta">
        <motion.div 
          className="cta-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2>Ready to Start Your Co-buying Journey?</h2>
          <p>Join us in revolutionizing homeownership.</p>
          <Link to="/contact" className="btn-primary">Get Started Today</Link>
        </motion.div>
      </section>
    </motion.main>
  );
};

export default About;
