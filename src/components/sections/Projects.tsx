import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Filter } from 'lucide-react';
import { projects } from '../../data/portfolio';
import { Project } from '../../types';
import { Button } from '../ui/Button';

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'ml', label: 'Machine Learning' },
  { id: 'web', label: 'Web Development' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'other', label: 'Other' }
];

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

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

  const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => (
    <motion.div
      layout
      variants={itemVariants}
      className="bg-white dark:bg-dark-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Project Image */}
      <div className="relative h-40 sm:h-48 lg:h-56 bg-gradient-to-br from-primary-100 to-blue-100 dark:from-primary-900 dark:to-blue-900 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl opacity-20">
            {project.category === 'ml' ? '🤖' : 
             project.category === 'web' ? '🌐' : 
             project.category === 'mobile' ? '📱' : '⚡'}
          </div>
        </div>
        {project.featured && (
          <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            Featured
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 line-clamp-2">
          {project.title}
        </h3>
        
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mb-4 sm:mb-6">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-gray-100 dark:bg-dark-900 text-gray-700 dark:text-gray-300 rounded text-sm"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-1 text-gray-500 dark:text-gray-400 text-sm">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Project Links */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
          {project.githubUrl && (
            <Button
              href={project.githubUrl}
              variant="outline"
              size="sm"
              external
              className="flex-1 justify-center gap-2"
            >
              <Github size={16} />
              Code
            </Button>
          )}
          {project.liveUrl && (
            <Button
              href={project.liveUrl}
              size="sm"
              external
              className="flex-1 justify-center gap-2"
            >
              <ExternalLink size={16} />
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-20 lg:py-32 bg-gray-50 dark:bg-dark-800">
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
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A showcase of my work spanning machine learning, web development, and innovative solutions
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div className="flex justify-center mb-8 sm:mb-12 px-4" variants={itemVariants}>
            <div className="bg-white dark:bg-dark-900 rounded-xl p-2 shadow-lg max-w-full overflow-x-auto">
              <div className="flex gap-2 min-w-max">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                      activeCategory === category.id
                        ? 'bg-primary-600 text-white shadow-md'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-800'
                    }`}
                  >
                    <span className="flex items-center gap-1 sm:gap-2">
                      {category.id === 'all' && <Filter size={14} className="sm:w-4 sm:h-4" />}
                      <span className="hidden sm:inline">{category.label}</span>
                      <span className="sm:hidden">{category.label.split(' ')[0]}</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div layout className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Show more projects link */}
          <motion.div className="text-center mt-12" variants={itemVariants}>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Want to see more of my work?
            </p>
            <Button
              href="https://github.com/AdithyaSrivastava01"
              external
              className="inline-flex items-center gap-2"
            >
              <Github size={20} />
              View All on GitHub
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};