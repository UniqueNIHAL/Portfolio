import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Terminal, ChevronDown, Github, Linkedin, Mail, Globe } from 'lucide-react';
import { Link } from 'react-scroll';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Hero: React.FC = () => {
  const codeString = `class Developer {
  constructor() {
    this.name = "Nihal H U";
    this.role = "Software Developer";
    this.location = "Bangalore, India";
    this.skills = ["Python", "Java", "Cloud", "AI/ML"];
  }

  async getContact() {
    return {
      email: "nihalhu05@gmail.com",
      phone: "+916361606828",
      website: "nihalhu.co",
      linkedin: "linkedin.com/in/nihalhu",
      github: "github.com/uniquenihal"
    };
  }
}`;

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
              <Terminal className="text-indigo-400" size={24} />
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
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Nihal H U
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-indigo-400 mb-6">
              Software Developer
            </h2>
            
            <p className="text-gray-300 mb-8 max-w-lg">
              A passionate developer specializing in Python, Gen AI, NLP, and Cloud Technologies. 
              Currently pursuing BCA in Cloud Technology and Information Security.
            </p>

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
              <a 
                href="https://nihalhu.co" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
              >
                <Globe size={20} />
                <span>Website</span>
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-700">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-sm text-gray-400 ml-2">Developer.js</span>
              </div>
              <SyntaxHighlighter 
                language="javascript"
                style={atomOneDark}
                customStyle={{
                  padding: '1.5rem',
                  margin: 0,
                  borderRadius: '0 0 0.5rem 0.5rem'
                }}
              >
                {codeString}
              </SyntaxHighlighter>
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
          <ChevronDown size={32} className="text-indigo-400" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;