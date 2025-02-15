import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What is a shared mortgage?',
      answer: 'A shared mortgage is an innovative financing solution where multiple buyers jointly sign for and share responsibility for a mortgage. This approach makes homeownership more accessible by combining resources and splitting costs.'
    },
    {
      question: 'How do I find a co-buyer?',
      answer: 'Our platform uses advanced matching algorithms to connect you with compatible co-buyers based on various factors including financial profiles, location preferences, and lifestyle compatibility. We ensure a thorough vetting process for all potential matches.'
    },
    {
      question: 'What happens if one co-buyer wants to sell?',
      answer: 'We provide comprehensive co-buyer protection agreements that detail various exit scenarios. Options typically include buyout provisions, first right of refusal for existing co-owners, and structured processes for finding replacement co-buyers.'
    },
    {
      question: 'How does Buyer Folio protect my interests?',
      answer: 'We offer legally-vetted co-ownership agreements, secure financial tracking tools, and dedicated support throughout your co-buying journey. Our platform includes built-in safeguards and transparent documentation for all transactions.'
    },
    {
      question: 'What are the financial benefits of co-buying?',
      answer: 'Co-buying offers numerous financial advantages including shared down payments, split monthly payments, combined purchasing power for better mortgage rates, and shared maintenance costs. This can make premium properties and locations more accessible.'
    }
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <motion.main 
      className="faq-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Frequently Asked Questions</h1>
      <p className="faq-intro">
        Find answers to common questions about co-buying, shared mortgages, and how Buyer Folio works.
      </p>
      
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="faq-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <button 
              onClick={() => handleToggle(index)} 
              className={`faq-question ${activeIndex === index ? 'active' : ''}`}
              aria-expanded={activeIndex === index}
            >
              {faq.question}
              <motion.span 
                className="faq-icon"
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
              >
                ↓
              </motion.span>
            </button>
            
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  className="faq-answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p>{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        className="faq-cta"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h2>Still have questions?</h2>
        <p>We're here to help you understand every aspect of co-buying.</p>
        <button className="btn-primary">Contact Support</button>
      </motion.div>
    </motion.main>
  );
};

export default FAQ;
