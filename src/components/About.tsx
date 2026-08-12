import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cloud, Shield, Terminal, Languages } from 'lucide-react';

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
  "location": "Bangalore, India",
  "education": "BCA in Cloud Technology and Information Security",
  "interests": [
    "MCP",
    "LLMs",
    "Generative AI",
    "Cloud",
    "Cybersecurity"
  ],
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
              <p className="text-gray-300 text-lg leading-relaxed">
                I’m a technology-focused developer with a strong interest in cloud systems, cybersecurity,
                and Generative AI. I am currently pursuing a BCA in Cloud Technology and Information
                Security at Jain (Deemed-to-be University), while building hands-on experience through
                internships, research, beta testing, and project development.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="bg-indigo-900 p-3 rounded-lg mr-4">
                    <Cloud size={20} className="text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-200">Cloud</h4>
                    <p className="text-sm text-gray-400">GCP & Azure</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-indigo-900 p-3 rounded-lg mr-4">
                    <Shield size={20} className="text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-200">Security</h4>
                    <p className="text-sm text-gray-400">Cybersecurity</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-indigo-900 p-3 rounded-lg mr-4">
                    <Brain size={20} className="text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-200">AI</h4>
                    <p className="text-sm text-gray-400">LLMs & MCP</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-indigo-900 p-3 rounded-lg mr-4">
                    <Terminal size={20} className="text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-200">Development</h4>
                    <p className="text-sm text-gray-400">Backend & Web</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-gray-800 rounded-lg border border-gray-700">
                <h4 className="font-semibold text-gray-200 mb-2">Highlights</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Office Bearer of ACM Student Chapter (Tech Team)</li>
                  <li>Recognized for hackathon and innovation achievements</li>
                  <li>Experienced in AI backend API development and GenAI workflows</li>
                  <li>Strong communication in English, Hindi, and Kannada</li>
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