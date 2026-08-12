import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Globe, ExternalLink, ArrowUpRight, MessageSquareText } from 'lucide-react';

const Contact: React.FC = () => {
  const quickActions = [
    {
      title: 'Send an email',
      description: 'Best for collaborations, freelance work, and project discussions.',
      href: 'mailto:nihalhu05@gmail.com',
      icon: Mail
    },
    {
      title: 'Message on LinkedIn',
      description: 'Ideal for professional networking, referrals, and outreach.',
      href: 'https://linkedin.com/in/nihalhu',
      icon: Linkedin
    },
    {
      title: 'Explore GitHub',
      description: 'Browse code, projects, and practical work samples.',
      href: 'https://github.com/uniquenihal',
      icon: Github
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(79,70,229,0.16),transparent_30%)]"></div>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Interested in collaboration or have a project in mind? Reach out directly through the channels below.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-700 relative">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div 
              className="bg-indigo-950/90 p-8 md:p-12"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="mb-8 text-gray-300">
                I prefer direct communication over dead forms. If you want to collaborate, discuss an internship,
                or talk through an idea, email is the fastest route.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start rounded-xl border border-indigo-800/70 bg-indigo-900/40 p-4">
                  <div className="bg-indigo-800 p-3 rounded-lg mr-4 shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <a 
                      href="mailto:nihalhu05@gmail.com" 
                      className="text-indigo-300 hover:text-white transition-colors"
                    >
                      nihalhu05@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start rounded-xl border border-indigo-800/70 bg-indigo-900/40 p-4">
                  <div className="bg-indigo-800 p-3 rounded-lg mr-4 shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <a 
                      href="tel:+916361606828" 
                      className="text-indigo-300 hover:text-white transition-colors"
                    >
                      +91 6361606828
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start rounded-xl border border-indigo-800/70 bg-indigo-900/40 p-4">
                  <div className="bg-indigo-800 p-3 rounded-lg mr-4 shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-indigo-300">Bangalore, India</p>
                  </div>
                </div>

                <div className="flex items-start rounded-xl border border-indigo-800/70 bg-indigo-900/40 p-4">
                  <div className="bg-indigo-800 p-3 rounded-lg mr-4 shrink-0">
                    <Globe size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Website</h4>
                    <a 
                      href="https://nihalhu.co" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-300 hover:text-white transition-colors flex items-center"
                    >
                      nihalhu.co
                      <ExternalLink size={14} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 rounded-2xl border border-indigo-800/70 bg-indigo-900/50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-indigo-800 p-3 rounded-lg">
                    <MessageSquareText size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Response Preference</h4>
                    <p className="text-sm text-indigo-200/80">Email first, LinkedIn next.</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/uniquenihal" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-indigo-800 p-3 rounded-full hover:bg-indigo-700 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="https://linkedin.com/in/nihalhu" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-indigo-800 p-3 rounded-full hover:bg-indigo-700 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="p-8 md:p-12 flex flex-col justify-between bg-gray-800/60"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-indigo-300 mb-3">Direct Contact</p>
                <h3 className="text-3xl font-bold text-gray-100 mb-4">No placeholder form, just real ways to reach me.</h3>
                <p className="text-gray-400 leading-relaxed mb-8 max-w-lg">
                  The old form did not send anywhere, so it has been removed. These actions take visitors straight
                  to the channels that actually work.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {quickActions.map((action) => {
                  const Icon = action.icon;

                  return (
                    <a
                      key={action.title}
                      href={action.href}
                      target={action.href.startsWith('http') ? '_blank' : undefined}
                      rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="group flex items-start justify-between gap-4 rounded-2xl border border-gray-700 bg-gray-900/70 p-5 hover:border-indigo-500 hover:bg-gray-900 transition-all"
                    >
                      <div className="flex gap-4">
                        <div className="bg-indigo-900 p-3 rounded-xl text-indigo-300 group-hover:bg-indigo-800 transition-colors">
                          <Icon size={20} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-100 mb-1">{action.title}</h4>
                          <p className="text-sm text-gray-400">{action.description}</p>
                        </div>
                      </div>
                      <ArrowUpRight size={18} className="text-gray-500 group-hover:text-indigo-300 transition-colors shrink-0 mt-1" />
                    </a>
                  );
                })}
              </div>

              <div className="rounded-2xl border border-gray-700 bg-gradient-to-br from-indigo-950/60 to-gray-900 p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-indigo-300 mb-3">Availability</p>
                <p className="text-gray-200 font-medium mb-2">Open to internships, collaborations, and AI/cloud projects.</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  If you are reaching out for product, research, or engineering work, include a short brief in the email subject line for a faster response.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;