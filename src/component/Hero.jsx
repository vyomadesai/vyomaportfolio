import React from 'react';
import { Github, Linkedin, Mail, ArrowRight, Code, Database, Globe } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Hero = () => {
  const techIcons = [
    { icon: Code, label: 'React', color: 'text-blue-400' },
    { icon: Globe, label: 'JavaScript', color: 'text-yellow-400' },
    { icon: Database, label: 'Node.js', color: 'text-green-400' },
    { icon: Code, label: 'MySQL', color: 'text-blue-500' },
    { icon: Database, label: 'MongoDB', color: 'text-green-500' },
    { icon: Globe, label: 'Tailwind', color: 'text-teal-400' }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-teal-400/20 rounded-lg rotate-12 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-blue-400/30 rounded-full animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 bg-gradient-to-r from-teal-400/10 to-blue-400/10 rounded-lg rotate-45"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 border-2 border-green-400/20 rounded-lg -rotate-12 animate-pulse"></div>
        
        {/* Code-like elements */}
        <div className="absolute top-32 right-40 text-teal-400/30 font-mono text-sm animate-pulse">
          &lt;Developer /&gt;
        </div>
        <div className="absolute bottom-32 left-40 text-blue-400/30 font-mono text-sm animate-pulse">
          {`{ fullStack: true }`}
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4" style={{fontFamily: 'Tenor Sans, serif'}}>
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
                Vyoma Joshi
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-medium" style={{fontFamily: 'Montserrat, sans-serif'}}>
              {personalInfo.title}
            </p>
          </div>

          {/* Tech Icons */}
          <div className="mb-12">
            <p className="text-gray-400 mb-6 font-medium">Core Technologies</p>
            <div className="flex flex-wrap justify-center gap-6">
              {techIcons.map((tech, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center space-y-2 p-4 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105"
                >
                  <tech.icon className={`w-8 h-8 ${tech.color} group-hover:scale-110 transition-transform`} />
                  <span className="text-sm text-gray-300 font-medium">{tech.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-500/25"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href={`mailto:${personalInfo.email}`}
              className="group flex items-center space-x-2 bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25"
            >
              <Mail className="w-5 h-5" />
              <span>Contact</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full mx-auto flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
