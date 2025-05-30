import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, Star, Trophy, BookOpen, Medal } from 'lucide-react';

interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
  achievements: string[];
  gpa?: string;
}

interface Award {
  name: string;
  issuer: string;
  date: string;
  position: string;
  description: string;
}

const Education: React.FC = () => {
  const education: Education[] = [
    {
      degree: "Bachelor of Computer Applications",
      institution: "Jain (Deemed-to-be University)",
      period: "July 2023 – July 2026",
      description: "Specializing in Cloud Technology and Information Security with focus on practical applications and industry-relevant skills.",
      gpa: "9.55/10",
      achievements: [
        "Office Bearer of ACM Student Chapter (Tech Team)",
        "Active participant in technical workshops and seminars"
      ]
    },
    {
      degree: "Pre-University Education",
      institution: "St. Aloysius Pre University College",
      period: "June 2021 - March 2023",
      description: "Completed higher secondary education with focus on science and mathematics.",
      gpa: "83%",
      achievements: [
        "Participated in various technical competitions",
        "Member of the college coding club",
        "Organized technical workshops"
      ]
    },
    {
      degree: "Secondary Education",
      institution: "St. Lawrence English Medium High School",
      period: "June 2020 - July 2021",
      description: "Completed secondary education with strong academic performance.",
      gpa: "72%",
      achievements: [
        "Active participation in school technical events",
        "Member of the school science club",
        "Represented school in district-level competitions"
      ]
    }
  ];

  const awards: Award[] = [
    {
      name: "AICTE IDE Bootcamp",
      issuer: "AICTE",
      date: "Feb 2025",
      position: "1st Place",
      description: "Won first place in the national-level innovation challenge organized by AICTE"
    },
    {
      name: "Google Events Hackathon",
      issuer: "Google",
      date: "Aug 2024",
      position: "3rd Place",
      description: "Secured third position in Google's prestigious hackathon event"
    }
  ];

  const certifications = [
    {
      name: "Google Cybersecurity Specialization",
      issuer: "Google",
      date: "Feb 2025"
    }
  ];

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
    <section id="education" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Achievements</h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My academic journey and achievements in the field of computer science and technology.
          </p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Education Section */}
          {education.map((edu, index) => (
            <motion.div 
              key={edu.degree}
              variants={itemVariants}
              className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-indigo-600 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="bg-indigo-900 p-4 rounded-lg mr-4">
                    <GraduationCap size={24} className="text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-200">{edu.degree}</h3>
                    <p className="text-indigo-400">{edu.institution}</p>
                    <div className="flex items-center mt-2 text-gray-400">
                      <Calendar size={16} className="mr-2" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>
                {edu.gpa && (
                  <div className="bg-indigo-900/50 px-4 py-2 rounded-lg">
                    <div className="flex items-center">
                      <Star size={16} className="text-indigo-400 mr-2" />
                      <span className="text-indigo-300">GPA: {edu.gpa}</span>
                    </div>
                  </div>
                )}
              </div>
              
              <p className="text-gray-400 mb-6">{edu.description}</p>
              
              <div>
                <h4 className="flex items-center font-semibold text-gray-300 mb-3">
                  <Trophy size={18} className="text-indigo-400 mr-2" />
                  Key Achievements
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {edu.achievements.map((achievement, index) => (
                    <li 
                      key={index}
                      className="flex items-start"
                    >
                      <div className="bg-indigo-900/30 p-2 rounded mr-3 mt-1">
                        <Award size={14} className="text-indigo-400" />
                      </div>
                      <span className="text-gray-400">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
          
          {/* Awards Section */}
          <motion.div 
            variants={itemVariants}
            className="bg-gray-800 rounded-lg p-6 border border-gray-700"
          >
            <div className="flex items-center mb-6">
              <div className="bg-indigo-900 p-4 rounded-lg mr-4">
                <Medal size={24} className="text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-200">Awards & Recognition</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {awards.map((award) => (
                <div 
                  key={award.name} 
                  className="bg-gray-700/50 rounded-lg p-6 border border-gray-600 hover:border-indigo-600 transition-all"
                >
                  <div className="flex items-center mb-3">
                    <Trophy size={20} className="text-indigo-400 mr-3" />
                    <h4 className="text-lg font-semibold text-gray-200">{award.name}</h4>
                  </div>
                  <div className="mb-3">
                    <span className="inline-block bg-indigo-900 text-indigo-300 px-3 py-1 rounded-full text-sm font-semibold">
                      {award.position}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-3">{award.description}</p>
                  <div className="text-sm text-gray-400 flex items-center">
                    <Calendar size={14} className="mr-2" />
                    <span>{award.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div 
            variants={itemVariants}
            className="bg-gray-800 rounded-lg p-6 border border-gray-700"
          >
            <div className="flex items-center mb-6">
              <div className="bg-indigo-900 p-4 rounded-lg mr-4">
                <BookOpen size={24} className="text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-200">Certifications</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert) => (
                <div 
                  key={cert.name} 
                  className="bg-gray-700/50 rounded-lg p-4 border border-gray-600 hover:border-indigo-600 transition-all"
                >
                  <div className="flex items-center mb-2">
                    <Award size={16} className="text-indigo-400 mr-2" />
                    <h4 className="font-semibold text-gray-200">{cert.name}</h4>
                  </div>
                  <div className="text-sm text-gray-400">
                    <p>{cert.issuer}</p>
                    <p>{cert.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;