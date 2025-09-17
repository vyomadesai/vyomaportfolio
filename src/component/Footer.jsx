import React from 'react';
import { Heart, ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="text-2xl font-bold text-teal-400 font-mono">VJ</div>
                <div className="text-lg font-semibold text-white">
                  Vyoma Joshi
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed" style={{fontFamily: 'Montserrat, sans-serif'}}>
                Frontend Developer & Full Stack Engineer passionate about creating 
                exceptional digital experiences.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2">
                {['About', 'Experience', 'Skills', 'Projects'].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Connect</h3>
              <div className="flex space-x-4">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-teal-600 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
              <p className="text-gray-400 text-sm">
                {personalInfo.location}
              </p>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-800">
            <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
              <span className="text-sm">©{currentYear} Vyoma Joshi. Made with</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span className="text-sm">and lots of ☕</span>
            </div>

            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="group flex items-center space-x-2 text-gray-400 hover:text-teal-400 transition-colors"
            >
              <span className="text-sm">Back to top</span>
              <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-teal-600 transition-colors">
                <ArrowUp className="w-4 h-4" />
              </div>
            </button>
          </div>

          {/* Developer Credit */}
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              Designed & Developed by Vyoma Joshi • Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
