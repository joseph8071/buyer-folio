import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Partnership = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <motion.main 
      className="partnership-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className="page-hero">
        <motion.div 
          className="partnership-hero-content"
          {...fadeIn}
        >
          <h1>Partnership Opportunities</h1>
          <p className="page-subtitle">
            Join forces with Buyer Folio to revolutionize homeownership and create 
            lasting value for your clients.
          </p>
        </motion.div>
      </section>

      <div className="partnership-grid">
        {[
          {
            title: "Real Estate Agents",
            description: "Connect your clients with innovative co-buying solutions.",
            features: [
              "Access to co-buyer matching platform",
              "Commission sharing opportunities",
              "Priority support for your clients"
            ]
          },
          {
            title: "Financial Institutions",
            description: "Expand your mortgage offerings with our co-buying platform.",
            features: [
              "Integration with your existing systems",
              "Custom branded solutions",
              "Risk assessment tools"
            ]
          },
          {
            title: "Property Developers",
            description: "Reach more buyers with shared ownership options.",
            features: [
              "Marketing support",
              "Buyer pool access",
              "Development consulting"
            ]
          }
        ].map((program, index) => (
          <motion.div
            key={index}
            className="partnership-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <h3>{program.title}</h3>
            <p>{program.description}</p>
            <ul>
              {program.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <section className="cta-section">
        <motion.div 
          className="cta-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2>Ready to Partner With Us?</h2>
          <p>Let's discuss how we can create value together.</p>
          <Link to="/contact" className="btn-primary">Contact Us Today</Link>
        </motion.div>
      </section>
    </motion.main>
  );
};

export default Partnership;
