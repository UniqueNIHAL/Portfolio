import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', target: 'home' },
    { name: 'About', target: 'about' },
    { name: 'Skills', target: 'skills' },
    { name: 'Experience', target: 'experience' },
    { name: 'Projects', target: 'projects' },
    { name: 'Education', target: 'education' },
    { name: 'Contact', target: 'contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="home" smooth={true} duration={500} className="cursor-pointer">
            <h1 className="text-xl font-bold text-indigo-600">Nihal H U</h1>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.target}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-700 hover:text-indigo-600 transition-colors cursor-pointer"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex space-x-4">
              <a href="https://github.com/uniquenihal" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-indigo-600 transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/nihalhu" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-indigo-600 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:nihalhu05@gmail.com" className="text-gray-700 hover:text-indigo-600 transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-indigo-600 transition-colors" aria-label="Toggle menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.target}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={toggleMenu}
                  className="text-gray-700 hover:text-indigo-600 transition-colors cursor-pointer"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="https://github.com/uniquenihal" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-indigo-600 transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/nihalhu" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-indigo-600 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:nihalhu05@gmail.com" className="text-gray-700 hover:text-indigo-600 transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;