import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50"> {/* This is a remnant; remove if not needed, or style in CSS */}
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Services />
              <Contact />
             
            </>
          } />
          {/* Add more routes if needed, e.g.,<Route path="/about" element={<About />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
