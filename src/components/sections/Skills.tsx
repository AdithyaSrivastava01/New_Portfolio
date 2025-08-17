import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Cloud, Wrench, Brain, Globe } from 'lucide-react';
import { skills } from '../../data/portfolio';

const categoryIcons = {
  'Programming Languages': <Code className="w-6 h-6" />,
  'AI/ML & Data Science': <Brain className="w-6 h-6" />,
  'Web Development': <Globe className="w-6 h-6" />,
  'Databases': <Database className="w-6 h-6" />,
  'Cloud & DevOps': <Cloud className="w-6 h-6" />,
  'Tools & Technologies': <Wrench className="w-6 h-6" />,
};

export const Skills: React.FC = () => {
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

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section id="skills" className="py-20 lg:py-32">
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
              Skills & <span className="text-gradient">Technologies</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A comprehensive overview of the technologies and tools I work with
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillCategory, categoryIndex) => (
              <motion.div
                key={skillCategory.category}
                className="bg-white dark:bg-dark-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg text-primary-600 dark:text-primary-400">
                    {categoryIcons[skillCategory.category as keyof typeof categoryIcons] || <Code className="w-6 h-6" />}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {skillCategory.category}
                  </h3>
                </div>

                {/* Skills List */}
                <motion.div 
                  className="space-y-3"
                  variants={containerVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                >
                  {skillCategory.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      className="flex items-center gap-3 group"
                      variants={skillVariants}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    >
                      <div className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0 group-hover:scale-125 transition-transform" />
                      <span className="text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Proficiency Levels */}
          <motion.div 
            className="mt-16 text-center"
            variants={itemVariants}
          >
            <div className="bg-gradient-to-r from-primary-600 to-blue-600 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">
                Continuous Learning Journey
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">800+</div>
                  <div className="text-lg opacity-90">LeetCode Problems Solved</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">3+</div>
                  <div className="text-lg opacity-90">Years of Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">10+</div>
                  <div className="text-lg opacity-90">Technologies Mastered</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};