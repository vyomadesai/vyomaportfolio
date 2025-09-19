import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { education } from '../data/mock';

const Education = () => {
  const getTypeColor = (type) => {
    switch (type) {
      case 'Masters':
        return 'from-purple-400 to-blue-400';
      case 'Bachelors':
        return 'from-teal-400 to-green-400';
      default:
        return 'from-gray-400 to-gray-600';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'Masters':
        return Award;
      case 'Bachelors':
        return GraduationCap;
      default:
        return GraduationCap;
    }
  };

  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{fontFamily: 'Tenor Sans, serif'}}>
              Educational <span className="text-teal-400">Background</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-400 mx-auto mb-6"></div>
          </div>

          {/* Education Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {education.map((edu, index) => {
              const TypeIcon = getTypeIcon(edu.type);
              return (
                <div
                  key={edu.id}
                  className="group bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-teal-400/50 transition-all duration-300 hover:bg-gray-800/70 hover:scale-105"
                >
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${getTypeColor(edu.type)} mb-6`}>
                    <TypeIcon className="w-8 h-8 text-white" />
                  </div>

                  {/* Degree */}
                  <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                    {edu.degree}
                  </h3>

                  {/* Institution */}
                  <div className="flex items-start space-x-2 mb-4">
                    <MapPin className="w-4 h-4 text-teal-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-300 font-medium leading-relaxed">
                      {edu.institution}
                    </p>
                  </div>

                  {/* Year */}
                  <div className="flex items-center space-x-2 mb-4">
                    <Calendar className="w-4 h-4 text-blue-400" />
                    <span className="text-blue-400 font-medium">{edu.year}</span>
                  </div>

                  {/* Type Badge */}
                  <div className="mt-6">
                    <span className={`text-xs font-medium bg-gradient-to-r ${getTypeColor(edu.type)} text-white px-3 py-1 rounded-full`}>
                      {edu.type} Degree
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Academic Achievements */}
          <div className="mt-16 bg-gradient-to-r from-teal-400/10 to-blue-400/10 p-8 rounded-2xl border border-gray-700">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Academic Journey
              </h3>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed" style={{fontFamily: 'Montserrat, sans-serif'}}>
              Started with a strong foundation in computer engineering at KJ Somaiya, Mumbai, deepened technical expertise at VJTI, Mumbai,
              and culminated with advanced specialization in computer science at the University of Missouri Kansas City, USA,
              building a well-rounded base that bridges engineering with modern computing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
