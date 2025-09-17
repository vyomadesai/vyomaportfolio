import React from 'react';
import { MapPin, Calendar, ExternalLink } from 'lucide-react';
import { experiences } from '../data/mock';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{fontFamily: 'Tenor Sans, serif'}}>
              Professional <span className="text-teal-400">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-400 mx-auto"></div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-400 via-blue-400 to-green-400 transform md:-translate-x-1/2"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-teal-400 rounded-full transform md:-translate-x-1/2 border-4 border-gray-900 z-10"></div>

                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="group bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-teal-400/50 transition-all duration-300 hover:bg-gray-800/70">
                      {/* Duration Badge */}
                      <div className="flex items-center space-x-2 mb-4">
                        <Calendar className="w-4 h-4 text-teal-400" />
                        <span className="text-sm font-medium text-teal-400 bg-teal-400/10 px-3 py-1 rounded-full">
                          {exp.duration}
                        </span>
                      </div>

                      {/* Company & Role */}
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {exp.role}
                      </h3>
                      <h4 className="text-lg text-blue-400 mb-4 font-semibold">
                        {exp.company}
                      </h4>

                      {/* Highlight */}
                      <p className="text-gray-300 mb-6 leading-relaxed" style={{fontFamily: 'Montserrat, sans-serif'}}>
                        {exp.highlight}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-xs font-medium bg-gray-700 text-gray-300 px-3 py-1 rounded-full hover:bg-teal-400/20 hover:text-teal-400 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Summary */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-teal-400/10 to-blue-400/10 p-8 rounded-2xl border border-gray-700">
              <p className="text-lg text-gray-300 max-w-3xl mx-auto" style={{fontFamily: 'Montserrat, sans-serif'}}>
                Over 6 years of progressive experience in frontend and full-stack development, 
                consistently delivering high-quality solutions across healthcare, IoT, analytics, 
                and e-commerce domains.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
