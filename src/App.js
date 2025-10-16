import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallButton, setShowInstallButton] = useState(false);

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault(); // Prevent automatic popup
      setDeferredPrompt(e); // Save the event
      setShowInstallButton(true); // Show custom install button
    });
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const choice = await deferredPrompt.userChoice;
    if (choice.outcome === "accepted") {
      console.log("App installed ✅");
    } else {
      console.log("User dismissed install ❌");
    }
    setDeferredPrompt(null);
    setShowInstallButton(false);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<><Hero /></>} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />

        {/* Custom Install Button */}
        {showInstallButton && (
          <button
            onClick={handleInstallClick}
            className="fixed bottom-5 right-5 bg-black text-white py-2 px-4 rounded-lg shadow-lg hover:bg-gray-800 transition"
          >
            Install App
          </button>
        )}
      </div>
    </Router>
  );
}

export default App;
