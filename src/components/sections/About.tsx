import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, Code2, Brain } from 'lucide-react';
import { education } from '../../data/portfolio';
import { useExpansion } from '../../contexts/ExpansionContext';

export const About: React.FC = () => {
  const { expandedEducation, toggleExpandedEducation } = useExpansion();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const achievements = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "DAAD WISE'23 Scholar",
      description: "Awarded prestigious DAAD WISE 2023 scholarship by the German organization DAAD",
      link: null
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "LeetCode Streak",
      description: "Solved 800+ data structures and algorithms questions across coding platforms",
      link: "https://leetcode.com/u/Adithya_01/"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "ML Research",
      description: "Published research in medical imaging analysis to detect Malarial Parasite",
      link: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003393580-57/deep-learning-driven-automated-malaria-parasite-detection-thin-blood-smears-aryan-verma-sejal-mansoori-adithya-srivastava-priyanka-rathee-nagendra-pratap-singh"
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-gray-50 dark:bg-dark-800">
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
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Passionate about emerging technologies with a solid foundation in Computer Science
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Left Column - Text Content */}
            <motion.div variants={itemVariants}>
              <div className="space-y-6">
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  I'm a <span className="font-semibold text-primary-600 dark:text-primary-400">graduate student</span> at USC with a profound passion for machine learning and software engineering. With experience spanning from medical imaging AI to full-stack development, I strive to create solutions that transcend the boundaries of mere code.
                </p>
                
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Currently pursuing my Master's in Computer Engineering at USC, I've had the privilege of working on cutting-edge projects in <span className="font-semibold text-primary-600 dark:text-primary-400">machine learning, NLP, and distributed systems</span>. My research experience includes developing AI-powered ECG monitoring systems and analyzing social media sentiment for election narratives.
                </p>

                <div className="bg-white dark:bg-dark-900 p-4 sm:p-6 rounded-xl shadow-md">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    My Interests Include:
                  </h3>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {['Deep Learning', 'Web Development', 'Medical Imaging', 'Bioinformatics', 'NLP', 'Distributed Systems'].map((interest) => (
                      <span
                        key={interest}
                        className="px-2 sm:px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-xs sm:text-sm font-medium"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Education & Achievements */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Education */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <GraduationCap className="w-7 h-7 text-primary-600 dark:text-primary-400" />
                  Education
                </h3>
                <div className="space-y-6">
                  {education.map((edu) => (
                    <motion.div
                      key={edu.id}
                      className="bg-white dark:bg-dark-900 p-4 sm:p-6 rounded-xl shadow-md"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {edu.degree}
                      </h4>
                      <p className="text-primary-600 dark:text-primary-400 font-medium mb-1 text-sm sm:text-base">
                        {edu.institution}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mb-3">
                        {edu.location} • {edu.duration}
                      </p>
                      {edu.courses && (
                        <div className="flex flex-wrap gap-2">
                          {(expandedEducation.includes(edu.id) ? edu.courses : edu.courses.slice(0, 3)).map((course) => (
                            <span
                              key={course}
                              className="px-2 py-1 bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-300 rounded text-xs sm:text-sm"
                            >
                              {course}
                            </span>
                          ))}
                          {edu.courses.length > 3 && !expandedEducation.includes(edu.id) && (
                            <button
                              onClick={() => toggleExpandedEducation(edu.id)}
                              className="px-2 py-1 text-primary-600 dark:text-primary-400 text-xs sm:text-sm font-medium hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded transition-colors"
                            >
                              +{edu.courses.length - 3} more
                            </button>
                          )}
                          {expandedEducation.includes(edu.id) && edu.courses.length > 3 && (
                            <button
                              onClick={() => toggleExpandedEducation(edu.id)}
                              className="px-2 py-1 text-primary-600 dark:text-primary-400 text-xs sm:text-sm font-medium hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded transition-colors"
                            >
                              show less
                            </button>
                          )}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Key Achievements
                </h3>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => {
                    const Component = achievement.link ? motion.a : motion.div;
                    const linkProps = achievement.link ? {
                      href: achievement.link,
                      target: "_blank",
                      rel: "noopener noreferrer"
                    } : {};

                    return (
                      <Component
                        key={index}
                        className={`bg-white dark:bg-dark-900 p-3 sm:p-4 rounded-lg shadow-md flex items-start gap-3 sm:gap-4 ${
                          achievement.link ? 'cursor-pointer hover:shadow-lg' : ''
                        }`}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                        {...linkProps}
                      >
                        <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg text-primary-600 dark:text-primary-400 flex-shrink-0">
                          {achievement.icon}
                        </div>
                        <div className="min-w-0">
                          <h4 className={`font-semibold text-gray-900 dark:text-white mb-1 text-sm sm:text-base ${
                            achievement.link ? 'group-hover:text-primary-600 dark:group-hover:text-primary-400' : ''
                          }`}>
                            {achievement.title}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">
                            {achievement.description}
                          </p>
                        </div>
                      </Component>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};