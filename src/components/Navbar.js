import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar__container">
        <Link to="/" className="navbar__logo">
          <img src={logo} alt="Buyer Folio Logo" />
        </Link>

        <nav className={`navbar__links ${mobileMenuOpen ? 'active' : ''}`}>
          <Link to="/about">About</Link>
          <Link to="/partnership">Partnership</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact" className="btn-primary">Contact Us</Link>
        </nav>

        <button 
          className={`navbar__toggle ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
