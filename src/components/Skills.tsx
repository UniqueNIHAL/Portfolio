import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Shield, Brain, Terminal } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: 'languages' | 'cloud' | 'security' | 'ai' | 'tools' | 'other';
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    // Languages & Frameworks
    { name: 'Python', level: 90, category: 'languages' },
    { name: 'Java', level: 85, category: 'languages' },
    { name: 'C++', level: 80, category: 'languages' },
    { name: 'HTML/CSS', level: 85, category: 'languages' },
    
    // Cloud & Infrastructure
    { name: 'Google Cloud Platform', level: 88, category: 'cloud' },
    { name: 'Docker', level: 82, category: 'cloud' },
    { name: 'Kubernetes', level: 75, category: 'cloud' },
    
    // Security
    { name: 'Cybersecurity', level: 85, category: 'security' },
    { name: 'Digital Forensics', level: 80, category: 'security' },
    { name: 'Network Security', level: 78, category: 'security' },
    
    // AI/ML
    { name: 'Computer Vision', level: 88, category: 'ai' },
    { name: 'NLP', level: 85, category: 'ai' },
    { name: 'TensorFlow', level: 80, category: 'ai' },
    
    // Tools & Technologies
    { name: 'Git', level: 90, category: 'tools' },
    { name: 'MySQL', level: 85, category: 'tools' },
    { name: 'Postman', level: 88, category: 'tools' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'languages':
        return <Code className="text-indigo-400" />;
      case 'cloud':
        return <Cloud className="text-indigo-400" />;
      case 'security':
        return <Shield className="text-indigo-400" />;
      case 'ai':
        return <Brain className="text-indigo-400" />;
      case 'tools':
        return <Terminal className="text-indigo-400" />;
      default:
        return <Database className="text-indigo-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My technical toolkit spans multiple domains, from cloud computing to artificial intelligence,
            backed by strong programming fundamentals and practical experience.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {['languages', 'cloud', 'security', 'ai', 'tools'].map((category) => (
            <motion.div 
              key={category}
              variants={itemVariants}
              className="bg-gray-800 rounded-lg p-6 border border-gray-700"
            >
              <div className="flex items-center mb-6">
                <div className="bg-indigo-900 p-3 rounded-lg mr-4">
                  {getCategoryIcon(category)}
                </div>
                <h3 className="text-xl font-bold capitalize">{category}</h3>
              </div>

              <div className="space-y-4">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-indigo-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div 
                          className="h-2 rounded-full bg-indigo-600"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-12 bg-gray-800 rounded-lg p-6 border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-bold mb-6">Additional Competencies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Problem Solving",
              "Team Collaboration",
              "Project Management",
              "Technical Writing",
              "Code Review",
              "System Design",
              "Agile Methodology",
              "Research"
            ].map((skill) => (
              <div 
                key={skill}
                className="bg-gray-700 rounded-lg p-4 text-center hover:bg-indigo-900 transition-colors"
              >
                <span className="text-gray-300">{skill}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;