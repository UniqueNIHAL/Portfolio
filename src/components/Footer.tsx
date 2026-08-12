import React from 'react';
import { Link } from 'react-scroll';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

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
              Building AI-powered, secure, and scalable digital solutions with a focus on cloud
              technologies, backend systems, and meaningful product experiences.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/uniquenihal" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-indigo-600 transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/nihalhu" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-indigo-600 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:nihalhu05@gmail.com" className="bg-gray-800 p-3 rounded-full hover:bg-indigo-600 transition-colors" aria-label="Email">
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
              <li>Bangalore, India</li>
              <li>nihalhu05@gmail.com</li>
              <li>+91 6361606828</li>
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