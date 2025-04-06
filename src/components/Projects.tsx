
import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'React', 'Backend'];
  
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce application with product catalog, cart functionality, user authentication, and payment processing.",
      image: "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?q=80&w=2070&auto=format&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      category: "React"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application that displays current conditions and forecasts based on user location or search.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=2070&auto=format&fit=crop",
      tags: ["React", "OpenWeather API", "Chart.js", "Geolocation"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      category: "React"
    },
    {
      title: "RESTful API Service",
      description: "A backend service providing RESTful APIs for a blog platform with authentication and media handling.",
      image: "https://images.unsplash.com/photo-1623282033815-40b05d96c903?q=80&w=2070&auto=format&fit=crop",
      tags: ["Node.js", "Express", "MongoDB", "JWT"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      category: "Backend"
    },
    {
      title: "Movie Recommendation App",
      description: "An application that recommends movies based on user preferences and viewing history.",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop",
      tags: ["React", "TMDB API", "Machine Learning", "Firebase"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      category: "React"
    }
  ];

  const filteredProjects = activeFilter === 'All' ? 
    projects : 
    projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-navy-light section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 relative animate-on-scroll">
          <span className="text-slate-light dark:text-white">My Projects</span>
          <span className="absolute bottom-0 left-0 w-16 h-1 bg-highlight mt-2"></span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-on-scroll">
          {filters.map((filter, index) => (
            <button 
              key={index}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-md font-medium transition-all duration-200 
                ${activeFilter === filter ? 
                  'bg-highlight text-navy-dark' : 
                  'bg-navy-dark text-slate hover:text-highlight'}`}
            >
              {filter}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="group relative bg-navy border border-navy-light rounded-lg overflow-hidden animate-on-scroll hover:border-highlight/30 transition-all duration-300"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-90"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold mb-2 text-slate-light dark:text-white">{project.title}</h3>
                <p className="text-slate text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-navy text-highlight rounded-full px-3 py-1 hover:bg-highlight/20 hover:text-white transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-slate-light hover:text-highlight transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-slate-light hover:text-highlight transition-colors"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
