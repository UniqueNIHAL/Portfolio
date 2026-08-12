import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Eye, Star } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
  category: 'ai' | 'web' | 'cloud' | 'security';
  highlights: string[];
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'ai' | 'web' | 'cloud' | 'security'>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'Initial Point Trash Type Detector',
      description: 'Detects the type of trash in the initial stage of disposal for segregation, reducing post-disposal issues and improving sorting efficiency.',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg',
      technologies: ['Computer Vision', 'YOLOv8', 'Python', 'TensorFlow'],
      github: 'https://github.com/uniquenihal/trash-detector',
      demo: '#',
      category: 'ai',
      highlights: [
        'Real-time waste classification',
        'Supports source-level segregation',
        'Optimized for practical deployment',
        'Useful for sustainable waste handling'
      ]
    },
    {
      id: 2,
      title: 'Agentic AI Based Educational Resource Recommender',
      description: 'A Generative AI-driven recommendation platform designed to help learners discover the right educational resources with contextual recommendations.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
      technologies: ['Google Cloud Platform', 'Vertex AI', 'Generative AI', 'Python'],
      github: 'https://github.com/uniquenihal/edu-recommender',
      demo: '#',
      category: 'cloud',
      highlights: [
        'Personalized learning suggestions',
        'Built for educational guidance',
        'Scalable cloud-backed architecture',
        'Hackathon winner project'
      ]
    },
    {
      id: 3,
      title: 'AI Content Creation Backend APIs',
      description: 'Backend APIs for an AI-powered content generation platform that supports creative workflows using modern GenAI and multimodal tools.',
      image: 'https://images.pexels.com/photos/5473337/pexels-photo-5473337.jpeg',
      technologies: ['FastAPI', 'MCP', 'LLMs', 'Audio/Video Generation'],
      github: '#',
      demo: '#',
      category: 'ai',
      highlights: [
        'Designed for AI-assisted creation flows',
        'Supports multimodal generation tasks',
        'Built for scalable backend orchestration',
        'Integrates generation and API workflows'
      ]
    }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter((project) => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of projects centered on AI, cloud systems, and practical problem solving across
            learning, sustainability, and digital product development.
          </p>
        </motion.div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-gray-800 rounded-lg p-1">
            {[
              { value: 'all', label: 'All Projects' },
              { value: 'ai', label: 'AI/ML' },
              { value: 'cloud', label: 'Cloud' },
              { value: 'web', label: 'Web' },
              { value: 'security', label: 'Security' }
            ].map((category) => (
              <button
                key={category.value}
                onClick={() => setFilter(category.value as any)}
                className={`px-4 py-2 rounded-md transition-all ${
                  filter === category.value
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={itemVariants}
                className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-indigo-600 transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-400 mb-4">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                    <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                      {project.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-indigo-900/50 text-indigo-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex space-x-4">
                      {project.github !== '#' && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-400 hover:text-white transition-colors"
                        >
                          <Github size={20} className="mr-1" />
                          <span className="text-sm">Code</span>
                        </a>
                      )}
                      {project.demo !== '#' && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-400 hover:text-white transition-colors"
                        >
                          <Eye size={20} className="mr-1" />
                          <span className="text-sm">Demo</span>
                        </a>
                      )}
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Star size={16} className="mr-1" />
                      <span className="text-sm">Featured</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;