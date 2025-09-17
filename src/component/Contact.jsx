import React from 'react';
import { Mail, Linkedin, Github, MapPin, Phone, MessageCircle } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: 'from-red-400 to-pink-400',
      description: 'Send me an email'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: personalInfo.linkedin,
      color: 'from-blue-400 to-blue-600',
      description: 'Professional networking'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'View my repositories',
      href: personalInfo.github,
      color: 'from-gray-400 to-gray-600',
      description: 'Check out my code'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: '#',
      color: 'from-green-400 to-teal-400',
      description: 'Based in Mumbai'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{fontFamily: 'Tenor Sans, serif'}}>
              Get In <span className="text-teal-400">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-400 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto" style={{fontFamily: 'Montserrat, sans-serif'}}>
              I'm always interested in new opportunities and interesting projects. 
              Let's connect and discuss how we can work together!
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                target={method.label !== 'Location' ? '_blank' : '_self'}
                rel={method.label !== 'Location' ? 'noopener noreferrer' : ''}
                className="group block"
              >
                <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-teal-400/50 transition-all duration-300 hover:bg-gray-800/70 hover:scale-105 text-center">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${method.color} mb-6 group-hover:scale-110 transition-transform`}>
                    <method.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Label */}
                  <h3 className="text-xl font-bold text-white mb-2">
                    {method.label}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4">
                    {method.description}
                  </p>

                  {/* Value */}
                  <p className="text-teal-400 font-medium group-hover:text-teal-300 transition-colors">
                    {method.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="bg-gradient-to-r from-teal-400/10 to-blue-400/10 p-12 rounded-2xl border border-gray-700 text-center">
            <div className="max-w-3xl mx-auto">
              <MessageCircle className="w-16 h-16 text-teal-400 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Start a Project?
              </h3>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed" style={{fontFamily: 'Montserrat, sans-serif'}}>
                Whether you need a responsive website, a full-stack application, or just want to 
                discuss your next big idea, I'm here to help bring your vision to life. 
                Let's create something amazing together!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center justify-center space-x-2 bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25"
                >
                  <Mail className="w-5 h-5" />
                  <span>Send Email</span>
                </a>
                
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Availability Status */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-2 bg-green-400/10 text-green-400 px-6 py-3 rounded-full border border-green-400/30">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-medium">Available for new opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
