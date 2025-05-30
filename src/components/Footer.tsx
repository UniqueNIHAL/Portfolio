import React from 'react';
import { Link } from 'react-scroll';
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link to="home" smooth={true} duration={500} className="cursor-pointer">
              <h2 className="text-2xl font-bold mb-4 text-indigo-400">Nihal H U</h2>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Building exceptional digital experiences through clean code and innovative solutions. 
              Always eager to take on new challenges and collaborate on impactful projects.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-indigo-600 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-indigo-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-indigo-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-indigo-600 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    className="text-gray-400 hover:text-indigo-400 transition-colors cursor-pointer"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Info</h3>
            <ul className="space-y-3 text-gray-400">
              <li>San Francisco, CA</li>
              <li>contact@example.com</li>
              <li>+1 (234) 567-890</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-center md:text-left mb-4 md:mb-0">
            © {new Date().getFullYear()} Nihal H U. All rights reserved.
          </p>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="bg-indigo-600 p-3 rounded-full hover:bg-indigo-700 transition-colors cursor-pointer"
          >
            <ArrowUp size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;