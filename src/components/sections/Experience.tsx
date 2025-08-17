import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Calendar, ExternalLink } from 'lucide-react';
import { experiences } from '../../data/portfolio';

export const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="experience" className="py-20 lg:py-32">
      <div className="container-max section-padding">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Building innovative solutions across different domains and technologies
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 to-blue-600 hidden lg:block" />

            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  className="relative"
                  variants={itemVariants}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-dark-900 shadow-lg hidden lg:block" />

                  {/* Experience Card */}
                  <div className="lg:ml-20 bg-white dark:bg-dark-800 rounded-xl shadow-lg p-6 lg:p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div>
                        <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {experience.title}
                        </h3>
                        <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4 text-gray-600 dark:text-gray-300">
                          <span className="font-semibold text-primary-600 dark:text-primary-400 flex items-center gap-1">
                            <ExternalLink size={16} />
                            {experience.company}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={16} />
                            {experience.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar size={16} />
                            {experience.duration}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                      <ul className="space-y-3">
                        {experience.description.map((item, idx) => (
                          <li key={idx} className="text-gray-700 dark:text-gray-300 leading-relaxed flex items-start gap-3">
                            <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <motion.span
                            key={tech}
                            className="px-3 py-1 bg-gray-100 dark:bg-dark-900 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-dark-700"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-16"
            variants={itemVariants}
          >
            <div className="bg-gradient-to-r from-primary-600 to-blue-600 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Interested in working together?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                I'm always open to discussing new opportunities and innovative projects.
              </p>
              <motion.a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Connect
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};