import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, MapPin, ArrowDownRight } from 'lucide-react';
import { Link } from 'react-scroll';
import profileImage from '../../Profile.jpeg';

const Hero: React.FC = () => {
  const quickFacts = [
    'Python',
    'AI/ML',
    'Cloud',
    'Cybersecurity'
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-indigo-400"></span>
              <TypeAnimation
                sequence={[
                  'Hello World!',
                  1000,
                  'Welcome to my portfolio',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                className="text-xl text-indigo-400"
                repeat={Infinity}
              />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4">Nihal H U</h1>

            <h2 className="text-2xl md:text-3xl text-indigo-400 mb-6">
              AI & Cloud Developer
            </h2>

            <p className="text-gray-300 mb-8 max-w-xl leading-relaxed">
              Passionate about building intelligent, secure, and scalable solutions with Python,
              Generative AI, cloud technologies, and modern web development.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {quickFacts.map((fact) => (
                <span
                  key={fact}
                  className="bg-indigo-900/60 text-indigo-200 px-3 py-1.5 rounded-full text-sm border border-indigo-700"
                >
                  {fact}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="https://github.com/uniquenihal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/nihalhu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:nihalhu05@gmail.com"
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
              >
                <Mail size={20} />
                <span>Email</span>
              </a>
            </div>

            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <MapPin size={16} className="text-indigo-400" />
              <span>Bangalore, India</span>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full"></div>
              <div className="relative bg-gray-800 p-3 rounded-2xl border border-gray-700 shadow-2xl">
                <img
                  src={profileImage}
                  alt="Nihal H U"
                  className="w-full h-[520px] object-cover rounded-xl"
                />
                <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-gray-900/80 backdrop-blur-sm border border-gray-700 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-indigo-300 mb-2">Current Focus</p>
                  <p className="text-lg font-semibold text-white">MCP, LLMs, Agentic AI & Cloud Applications</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="animate-bounce cursor-pointer"
        >
          <ArrowDownRight size={32} className="text-indigo-400 rotate-45" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;