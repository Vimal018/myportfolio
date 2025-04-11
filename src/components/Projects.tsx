import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "AI Chatbot",
    description:
      "A conversational chatbot with context-awareness that gives news, book recs, health info, and weather using OpenAI and Node.js.",
    image:
      "https://assets.everspringpartners.com/dims4/default/7d30562/2147483647/strip/true/crop/1588x500+0+0/resize/800x252!/quality/90/?url=http%3A%2F%2Feverspring-brightspot.s3.us-east-1.amazonaws.com%2Fd6%2Fe4%2Faea7ceab448ab6ccfe774e7d5e47%2Fscu-msba-blog-2023-whatisachatbot-headerimage-v1.jpg",
    tags: ["Node.js", "OpenAI", "Express", "React", "Chatbot"],
    liveLink: "https://aichatbot-eight-indol.vercel.app/",
    githubLink: "https://github.com/vimal018/aichatbot",
  },
  {
    title: "Smart Farming Assistant",
    description:
      "An intelligent assistant helping farmers with crop disease detection, soil classification, government schemes and multilingual support using ML and modern frontend technologies.",
    image:
      "http://porch.com/advice/wp-content/uploads/2021/11/pexels-pixabay-235725.jpg",
    tags: ["React", "TypeScript", "ML", "AI", "Multi-language"],
    liveLink: "https://agribot.example.com",
    githubLink: "https://github.com/yourname/agribot",
  },
  {
    title: "Crop Recommendation and Soil Classification",
    description:
      "A machine learning model that classifies soil types and recommends suitable crops based on key soil parameters and environmental factors.",
    image:
      "https://whc.unesco.org/uploads/thumbs/activity_725-2148-704-20220308132126.jpg",
    tags: ["Python", "Flask", "ML", "Classification", "Recommendation"],
    liveLink: "https://croprecommend.example.com",
    githubLink: "https://github.com/Vimal018/soil-classification-and-crop-recommendation",
  },
  {
    title: "Bookstore API",
    description:
      "RESTful API for managing books, users, and orders with JWT-based auth, search/filter endpoints, and clean architecture.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE-q7jfhKmMXTruqoaTOxcd5sLFTPvyRBk0w&s",
    tags: ["Node.js", "Express", "REST API", "JWT", "MongoDB"],
    liveLink: "https://bookapi.example.com",
    githubLink: "https://github.com/vimal018/bookstore-api",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-navy-light section-padding">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 relative animate-on-scroll">
          <span className="text-slate-light dark:text-white">My Projects</span>
          <span className="absolute bottom-0 left-0 w-16 h-1 bg-highlight mt-2"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative bg-navy border border-navy-light rounded-lg overflow-hidden animate-on-scroll hover:border-highlight/30 transition-all duration-300 shadow-lg hover:shadow-highlight/10"
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
                <p className="text-slate text-sm mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-navy-dark text-highlight rounded-full px-3 py-1 hover:bg-highlight/20 hover:text-white transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-slate-light hover:text-highlight transition-colors transform hover:scale-110"
                    aria-label={`Visit ${project.title} live site`}
                  >
                    <ExternalLink size={18} />
                  </a>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-slate-light hover:text-highlight transition-colors transform hover:scale-110"
                    aria-label={`View ${project.title} GitHub repository`}
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
