import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, ExternalLink, Code, Server, Shield, Brain } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
  type: 'internship' | 'work' | 'research';
  icon: 'code' | 'server' | 'shield' | 'brain';
}

const Experience: React.FC = () => {
  const experiences: Experience[] = [
    {
      title: "Web Developer Intern",
      company: "KSDA, Government of Karnataka",
      period: "Sept 2024 – Jan 2025",
      description: [
        "Collaborated and developed the organization's website and query chatbot",
        "Implemented responsive design principles for optimal user experience",
        "Integrated AI-powered chatbot for automated query resolution"
      ],
      technologies: ["React", "Node.js", "AI/ML", "Responsive Design"],
      type: "internship",
      icon: "code"
    },
    {
      title: "Software Engineer Intern",
      company: "Gorai Technology Services",
      period: "June 2024 - July 2024",
      description: [
        "Multiple micro services tested and fixed in alignment with organization goals",
        "Implemented and maintained RESTful APIs using Spring Boot",
        "Conducted thorough testing and debugging of microservices"
      ],
      technologies: ["Java", "Spring Boot", "Postman", "Microservices"],
      type: "internship",
      icon: "server"
    },
    {
      title: "Digital Forensics Research Intern",
      company: "Sanmathi Forensics Lab",
      period: "June 2023 - July 2023",
      description: [
        "Explored digital and Windows forensics",
        "Practiced on TryHackMe's Windows Forensics 1",
        "Conducted analysis on Digital Forensics Case B4DM755"
      ],
      technologies: ["Digital Forensics", "Windows Forensics", "Security Tools"],
      type: "research",
      icon: "shield"
    },
    {
      title: "Beta Testing (UX)",
      company: "Fampay & Minecraft Server",
      period: "June 2022 - Present",
      description: [
        "Beta Testing for Fampay since 2024, finding bugs and testing pre-release software",
        "Beta Testing for Minecraft Server since 2020, reported over 100 bugs",
        "Provided detailed feedback for product improvement"
      ],
      technologies: ["Testing", "Bug Reporting", "UX Analysis", "Documentation"],
      type: "work",
      icon: "brain"
    }
  ];

  const getIcon = (icon: string) => {
    switch (icon) {
      case 'code':
        return <Code size={20} />;
      case 'server':
        return <Server size={20} />;
      case 'shield':
        return <Shield size={20} />;
      case 'brain':
        return <Brain size={20} />;
      default:
        return <Briefcase size={20} />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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
    <section id="experience" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey encompasses various roles in software development,
            research, and quality assurance, providing me with a well-rounded perspective
            in technology.
          </p>
        </motion.div>

        <motion.div 
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.title + exp.company}
              variants={itemVariants}
              className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-indigo-600 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="bg-indigo-900 p-3 rounded-lg mr-4">
                    {getIcon(exp.icon)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-200">{exp.title}</h3>
                    <p className="text-indigo-400">{exp.company}</p>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-400">
                  <Calendar size={16} className="mr-2" />
                  <span>{exp.period}</span>
                </div>
              </div>
              
              <ul className="list-disc list-inside mb-4 text-gray-300 space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.technologies.map(tech => (
                  <span 
                    key={tech} 
                    className="bg-indigo-900/50 text-indigo-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;