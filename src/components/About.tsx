import React from 'react';
import { motion } from 'framer-motion';
import { Code, Laptop, Lightbulb, Rocket, Brain, Cloud, Shield, Terminal } from 'lucide-react';

const About: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-10 items-center">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <div className="flex items-center gap-2 mb-4 text-gray-400">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-2 text-sm font-mono">about.json</span>
              </div>
              <pre className="text-sm font-mono text-gray-300 whitespace-pre-wrap">
{`{
  "name": "Nihal H U",
  "role": "Software Developer",
  "location": "Bangalore, India",
  "interests": [
    "Cloud Computing",
    "Cybersecurity",
    "AI/ML",
    "Web Development"
  ],
  "education": "BCA in Cloud Technology",
  "languages": [
    "English",
    "Hindi",
    "Kannada"
  ]
}`}
              </pre>
            </div>
          </motion.div>

          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <p className="text-gray-300 text-lg">
                I'm a passionate software developer specializing in cloud technology and information security. Currently pursuing my BCA, I combine academic excellence with practical experience in various tech domains.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="bg-indigo-900 p-3 rounded-lg mr-4">
                    <Cloud size={20} className="text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-200">Cloud Expert</h4>
                    <p className="text-sm text-gray-400">GCP & Cloud Solutions</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-indigo-900 p-3 rounded-lg mr-4">
                    <Shield size={20} className="text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-200">Security Focus</h4>
                    <p className="text-sm text-gray-400">Cybersecurity Specialist</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-indigo-900 p-3 rounded-lg mr-4">
                    <Brain size={20} className="text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-200">AI Enthusiast</h4>
                    <p className="text-sm text-gray-400">ML & Computer Vision</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-indigo-900 p-3 rounded-lg mr-4">
                    <Terminal size={20} className="text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-200">Full Stack Dev</h4>
                    <p className="text-sm text-gray-400">Web & Application Development</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-gray-800 rounded-lg border border-gray-700">
                <h4 className="font-semibold text-gray-200 mb-2">Current Focus</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Exploring advanced cloud architectures</li>
                  <li>Contributing to open-source projects</li>
                  <li>Developing AI-powered solutions</li>
                  <li>Enhancing cybersecurity knowledge</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;