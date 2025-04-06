import React from 'react';
import { Code, Workflow, Server, Database } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      title: "Frontend Development",
      icon: <Code size={28} className="text-highlight" />,
      description: "Crafting responsive and accessible UIs with modern tools and frameworks.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vite",]
    },
    {
      title: "Automation & AI Workflows",
      icon: <Workflow size={28} className="text-highlight" />,
      description: "Connecting services and integrating AI using automation platforms.",
      technologies: ["n8n", "OpenRouter", "Hugging Face", "Webhooks"]
    },
    {
      title: "Backend & Auth",
      icon: <Server size={28} className="text-highlight" />,
      description: "Developing secure APIs, auth flows, and server logic with scalable tools.",
      technologies: ["Nhost", "GraphQL", "Node.js", "Express", "JWT"]
    },
    {
      title: "Database",
      icon: <Database size={28} className="text-highlight" />,
      description: "Managing structured data with efficient querying and relations.",
      technologies: ["PostgreSQL", "MongoDB", "MySQL"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-navy section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 relative animate-on-scroll">
          <span className="text-slate-light dark:text-white">My Skills</span>
          <span className="absolute bottom-0 left-0 w-16 h-1 bg-highlight mt-2"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border border-navy-light rounded-lg p-5 hover:border-highlight/30 transition-all duration-300 animate-on-scroll"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="mb-3">{skill.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-slate-light dark:text-white">{skill.title}</h3>
              <p className="text-slate text-sm mb-3">{skill.description}</p>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech, i) => (
                  <span key={i} className="text-xs bg-navy-dark text-slate-light rounded-full px-3 py-1">
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
