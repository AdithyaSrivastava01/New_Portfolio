import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', sectionId: 'home' },
    { label: 'About', sectionId: 'about' },
    { label: 'Experience', sectionId: 'experience' },
    { label: 'Projects', sectionId: 'projects' },
    { label: 'Skills', sectionId: 'skills' },
    { label: 'Contact', sectionId: 'contact' },
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: 'https://github.com/AdithyaSrivastava01',
      label: 'GitHub',
    },
    {
      icon: <Linkedin size={20} />,
      href: 'https://www.linkedin.com/in/adithya-srivastava-a945531b2/',
      label: 'LinkedIn',
    },
    {
      icon: <Mail size={20} />,
      href: 'mailto:adithya@usc.edu',
      label: 'Email',
    },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="container-max section-padding">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 py-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              <span className="text-xl font-bold">Adithya Srivastava</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Software Engineer passionate about machine learning and building innovative solutions. 
              Currently pursuing MS in Computer Engineering at USC.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 dark:bg-gray-900 rounded-lg text-gray-400 hover:text-primary-400 hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.sectionId)}
                    className="text-gray-400 hover:text-primary-400 transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Get In Touch</h3>
            <div className="space-y-3 text-gray-400">
              <p>Los Angeles, CA 90007</p>
              <p>
                <a
                  href="mailto:adithya@usc.edu"
                  className="hover:text-primary-400 transition-colors"
                >
                  adithya@usc.edu
                </a>
              </p>
              <p>
                <a
                  href="tel:+12135618364"
                  className="hover:text-primary-400 transition-colors"
                >
                  (213) 561-8364
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 dark:border-gray-900 pt-8 pb-4">
          <div className="flex justify-center items-center gap-4">
            <p className="text-gray-400 text-sm text-center">
              © {currentYear} Adithya Srivastava. All rights reserved.
            </p>
            <motion.button
              onClick={scrollToTop}
              className="p-2 bg-gray-800 dark:bg-gray-900 rounded-lg text-gray-400 hover:text-primary-400 hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};