
import React from 'react';
import { Code, Globe, Database, Server } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      title: "Frontend Development",
      icon: <Code size={32} className="text-highlight" />,
      description: "Building responsive websites with modern JavaScript frameworks like React, Vue, and Angular.",
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "Vue", "Angular", "Tailwind CSS"]
    },
    {
      title: "Web Design",
      icon: <Globe size={32} className="text-highlight" />,
      description: "Creating beautiful, functional designs with a focus on user experience and accessibility.",
      technologies: ["UI/UX", "Wireframing", "Prototyping", "Responsive Design"]
    },
    {
      title: "Backend Development",
      icon: <Server size={32} className="text-highlight" />,
      description: "Developing robust server-side applications and APIs to power web applications.",
      technologies: ["Node.js", "Express", "Python", "Django", "REST API"]
    },
    {
      title: "Database Management",
      icon: <Database size={32} className="text-highlight" />,
      description: "Designing and optimizing database structures for efficient data storage and retrieval.",
      technologies: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-navy section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 relative animate-on-scroll">
          <span className="text-slate-light dark:text-white">My Skills</span>
          <span className="absolute bottom-0 left-0 w-16 h-1 bg-highlight mt-2"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="border border-navy-light rounded-lg p-6 hover:border-highlight/30 transition-all duration-300 animate-on-scroll hover:translate-y-[-5px]"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-slate-light dark:text-white">{skill.title}</h3>
              <p className="text-slate mb-4">{skill.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {skill.technologies.map((tech, i) => (
                  <span key={i} className="text-xs bg-navy-dark text-slate-light rounded-full px-3 py-1 hover:bg-highlight/20 hover:text-white transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
