import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';
import Partnership from './pages/Partnership';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/partnership" element={<Partnership />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
