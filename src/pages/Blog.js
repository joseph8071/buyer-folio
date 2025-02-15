import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Ultimate Guide to Co-Buying a Home",
      excerpt: "Learn everything you need to know about sharing homeownership and making it work for everyone involved.",
      date: "March 15, 2024",
      category: "Guides"
    },
    {
      id: 2,
      title: "5 Benefits of Shared Mortgages",
      excerpt: "Discover how shared mortgages can make homeownership more accessible and financially manageable.",
      date: "March 10, 2024",
      category: "Finance"
    },
    {
      id: 3,
      title: "Finding the Perfect Co-Buyer",
      excerpt: "Tips and strategies for finding compatible co-buyers and building successful partnerships.",
      date: "March 5, 2024",
      category: "Tips"
    }
  ];

  return (
    <motion.main 
      className="blog-page"
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
          <h1>Blog & Resources</h1>
          <p className="page-subtitle">
            Insights, guides, and expert advice on co-buying and homeownership.
          </p>
        </motion.div>
      </section>

      <div className="blog-grid">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.id}
            className="blog-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-content">
              <span className="blog-category">{post.category}</span>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <div className="blog-footer">
                <span className="blog-date">{post.date}</span>
                <Link to={`/blog/${post.id}`} className="btn-secondary">Read More</Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <section className="cta-section">
        <motion.div 
          className="cta-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2>Stay Updated</h2>
          <p>Subscribe to our newsletter for the latest insights and updates.</p>
          <button className="btn-primary">Subscribe Now</button>
        </motion.div>
      </section>
    </motion.main>
  );
};

export default Blog;
