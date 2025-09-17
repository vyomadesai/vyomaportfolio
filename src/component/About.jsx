import React from 'react';
import { Code2, Palette, Database, Globe } from 'lucide-react';
import { personalInfo } from '../data/mock';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Frontend Expertise",
      description: "Specialized in React, Tailwind CSS, and modern JavaScript frameworks"
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Experienced with Node.js, Express.js, MySQL, and MongoDB"
    },
    {
      icon: Palette,
      title: "UI/UX Focus",
      description: "Creating responsive, user-friendly interfaces with modern design principles"
    },
    {
      icon: Globe,
      title: "Full Stack Vision",
      description: "Building scalable applications from frontend to backend"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{fontFamily: 'Tenor Sans, serif'}}>
              About <span className="text-teal-400">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-400 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Description */}
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-teal-400/10 to-blue-400/10 p-8 rounded-2xl border border-gray-700">
                <p className="text-lg text-gray-300 leading-relaxed" style={{fontFamily: 'Montserrat, sans-serif'}}>
                  {personalInfo.intro}
                </p>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gray-700/50 rounded-lg">
                  <div className="text-3xl font-bold text-teal-400 mb-2">8+</div>
                  <div className="text-gray-300 text-sm font-medium">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-gray-700/50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
                  <div className="text-gray-300 text-sm font-medium">Projects Completed</div>
                </div>
              </div>
            </div>

            {/* Right Side - Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="group p-6 bg-gray-700/30 rounded-xl border border-gray-600 hover:border-teal-400/50 transition-all duration-300 hover:bg-gray-700/50"
                >
                  <div className="mb-4">
                    <highlight.icon className="w-8 h-8 text-teal-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

