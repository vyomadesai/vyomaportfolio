import React from 'react';
import { Code, Server, Wrench, TrendingUp } from 'lucide-react';
import { skills } from '../data/mock';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      skills: skills.frontend,
      color: "from-blue-400 to-teal-400"
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: skills.backend,
      color: "from-green-400 to-blue-400"
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: skills.tools,
      color: "from-purple-400 to-pink-400"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{fontFamily: 'Tenor Sans, serif'}}>
              Technical <span className="text-teal-400">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-400 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto" style={{fontFamily: 'Montserrat, sans-serif'}}>
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-6">
                {/* Category Header */}
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} mb-4`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group bg-gray-700/30 p-4 rounded-xl border border-gray-600 hover:border-teal-400/50 transition-all duration-300 hover:bg-gray-700/50"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 ${skill.color} rounded-lg flex items-center justify-center text-white text-xs font-bold`}>
                            {skill.icon.length <= 3 ? skill.icon : skill.icon.charAt(0)}
                          </div>
                          <span className="text-white font-medium">{skill.name}</span>
                        </div>
                        <span className="text-xs text-teal-400 font-medium bg-teal-400/10 px-2 py-1 rounded">
                          {skill.level}
                        </span>
                      </div>
                      
                      {/* Skill Level Bar */}
                      <div className="w-full bg-gray-600 rounded-full h-2 overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${category.color} transition-all duration-500 group-hover:animate-pulse`}
                          style={{
                            width: skill.level === 'Expert' ? '95%' : 
                                   skill.level === 'Advanced' ? '85%' : '70%'
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Skills Summary */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-700/30 rounded-xl border border-gray-600">
              <div className="text-3xl font-bold text-teal-400 mb-2">15+</div>
              <div className="text-gray-300 font-medium">Technologies</div>
            </div>
            <div className="text-center p-6 bg-gray-700/30 rounded-xl border border-gray-600">
              <div className="text-3xl font-bold text-blue-400 mb-2">8+</div>
              <div className="text-gray-300 font-medium">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-gray-700/30 rounded-xl border border-gray-600">
              <div className="text-3xl font-bold text-green-400 mb-2">3</div>
              <div className="text-gray-300 font-medium">Specializations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

