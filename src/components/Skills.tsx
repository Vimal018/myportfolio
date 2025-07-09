
import React from 'react';
import { Code, Workflow, Server, Database } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      title: "Frontend Development",
      icon: <Code size={28} className="text-primary" />,
      description: "Crafting responsive and accessible UIs with modern tools and frameworks.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vite"]
    },
    {
      title: "Automation & AI Workflows",
      icon: <Workflow size={28} className="text-primary" />,
      description: "Connecting services and integrating AI using automation platforms.",
      technologies: ["n8n", "OpenRouter", "Hugging Face", "Webhooks"]
    },
    {
      title: "Backend & Auth",
      icon: <Server size={28} className="text-primary" />,
      description: "Developing secure APIs, auth flows, and server logic with scalable tools.",
      technologies: ["Nhost", "GraphQL", "Node.js", "Express", "JWT"]
    },
    {
      title: "Database",
      icon: <Database size={28} className="text-primary" />,
      description: "Managing structured data with efficient querying and relations.",
      technologies: ["PostgreSQL", "MongoDB", "MySQL"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-muted/30 section-padding relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23000\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"7\" cy=\"7\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-slide-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                  {skill.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 text-card-foreground group-hover:text-primary transition-colors duration-200">
                    {skill.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {skill.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="text-xs bg-secondary text-secondary-foreground rounded-full px-3 py-1.5 font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
