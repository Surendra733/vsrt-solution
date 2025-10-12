import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Image or Illustration */}
          <div className="relative">
            <img
              src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/media/7edb0f3f3c3f43d7ffb23d3a73b8b8c0.png"
              alt="VSR Tech Solution team working"
              className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Right Side - Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 border-l-4 border-blue-600 pl-3">
              About <span className="text-blue-600">VSR Tech Solution</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              At <strong>VSR Tech Solution</strong>, we are passionate about building smart, scalable, 
              and future-ready digital products. Our focus is on delivering value-driven IT services that 
              empower businesses to grow in a fast-changing technological world.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              With expertise in <span className="text-blue-600 font-semibold">Web Development, Mobile Apps, 
              Cloud Integration, and Enterprise Solutions</span>, our mission is to bring your ideas to life 
              through innovation and code excellence.
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <h3 className="text-3xl font-bold text-blue-600">50+</h3>
                <p className="text-gray-500 text-sm">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-blue-600">20+</h3>
                <p className="text-gray-500 text-sm">Happy Clients</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-blue-600">8+</h3>
                <p className="text-gray-500 text-sm">Tech Experts</p>
              </div>
            </div>

            {/* Button */}
            <div className="mt-8">
              <a
                href="#services"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition-all duration-300"
              >
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
