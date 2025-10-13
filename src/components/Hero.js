import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white py-20 relative overflow-hidden">
      {/* Background Design */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* Main Hero Text */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to <span className="text-yellow-400">VSR Tech Solution</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
            Empowering Businesses with Smart, Scalable, and Secure Technology Solutions.
            We specialize in <span className="text-yellow-300 font-semibold">Web Development</span>, 
            <span className="text-yellow-300 font-semibold"> Mobile Apps</span>, 
            <span className="text-yellow-300 font-semibold"> Software Systems</span>, and 
            <span className="text-yellow-300 font-semibold"> IT Consulting</span> — all crafted with passion and precision.
          </p>

          <button className="hero-button bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg">
            Get Started
          </button>
        </div>

        {/* Company Highlights */}
        <div className="grid md:grid-cols-3 gap-10 mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-3 text-yellow-300">Web Development</h3>
            <p className="text-gray-200 leading-relaxed">
              From modern landing pages to complex full-stack platforms, 
              we build fast, responsive, and beautiful websites powered by the latest technologies.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-3 text-yellow-300">App Development</h3>
            <p className="text-gray-200 leading-relaxed">
              Native and cross-platform mobile apps designed for performance, 
              user experience, and business growth. Your ideas — transformed into reality.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-3 text-yellow-300">Software Solutions</h3>
            <p className="text-gray-200 leading-relaxed">
              Custom software built to automate workflows, manage data, and optimize operations — 
              scalable, secure, and future-ready.
            </p>
          </div>
        </div>

        {/* Secondary Section: Why Choose Us */}
        <div className="mt-20 text-center max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose VSR Tech Solution?</h2>
          <p className="text-lg text-gray-200 mb-12 leading-relaxed">
            We don’t just deliver code — we deliver results. Our mission is to empower startups, 
            small businesses, and enterprises with smart digital transformation strategies. 
            Our team brings creativity, expertise, and dedication to every project we touch.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-xl shadow-md">
              <h4 className="text-xl font-semibold text-yellow-300 mb-2">💡 Innovative Design</h4>
              <p>UI/UX that delights users and drives engagement across platforms.</p>
            </div>

            <div className="bg-white/10 p-6 rounded-xl shadow-md">
              <h4 className="text-xl font-semibold text-yellow-300 mb-2">⚙️ Reliable Technology</h4>
              <p>We use the latest tech stack — React, Spring Boot, Node.js, Firebase & more.</p>
            </div>

            <div className="bg-white/10 p-6 rounded-xl shadow-md">
              <h4 className="text-xl font-semibold text-yellow-300 mb-2">🌍 Global Reach</h4>
              <p>Providing scalable IT solutions to clients worldwide with on-time delivery.</p>
            </div>

            <div className="bg-white/10 p-6 rounded-xl shadow-md">
              <h4 className="text-xl font-semibold text-yellow-300 mb-2">🔒 Secure Solutions</h4>
              <p>Security-first approach with best practices in data protection and encryption.</p>
            </div>

            <div className="bg-white/10 p-6 rounded-xl shadow-md">
              <h4 className="text-xl font-semibold text-yellow-300 mb-2">🤝 Dedicated Support</h4>
              <p>Round-the-clock support and maintenance to ensure your success.</p>
            </div>

            <div className="bg-white/10 p-6 rounded-xl shadow-md">
              <h4 className="text-xl font-semibold text-yellow-300 mb-2">🚀 Growth-Oriented</h4>
              <p>Our solutions are designed to help your business grow faster and smarter.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            Ready to Build Something Amazing?
          </h3>
          <p className="text-gray-200 mb-6">
            Let’s turn your ideas into reality with cutting-edge technology and creative excellence.
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-10 py-3 rounded-full shadow-lg transition-all duration-300">
            Contact Us Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
