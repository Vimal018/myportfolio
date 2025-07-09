
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
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
    title: "AI Chatbot",
    description:
      "A conversational chatbot with context-awareness that gives news, book recs, health info, and weather using OpenAI and Node.js.",
    image:
      "https://assets.everspringpartners.com/dims4/default/7d30562/2147483647/strip/true/crop/1588x500+0+0/resize/800x252!/quality/90/?url=http%3A%2F%2Feverspring-brightspot.s3.us-east-1.amazonaws.com%2Fd6%2Fe4%2Faea7ceab448ab6ccfe774e7d5e47%2Fscu-msba-blog-2023-whatisachatbot-headerimage-v1.jpg",
    tags: ["Node.js", "OpenAI", "Express", "React", "Chatbot"],
    liveLink: "https://aibot.example.com",
    githubLink: "https://github.com/vimal018/aichat",
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
    <section id="projects" className="py-24 bg-background section-padding relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my latest work in web development, machine learning, and automation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${0.15 * index}s` }}
            >
              {/* Image container with overlay */}
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Floating action buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-card/90 backdrop-blur-sm rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-110"
                    aria-label={`Visit ${project.title} live site`}
                  >
                    <ExternalLink size={16} />
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-card/90 backdrop-blur-sm rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-110"
                    aria-label={`View ${project.title} GitHub repository`}
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-card-foreground group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-secondary text-secondary-foreground rounded-full px-3 py-1.5 font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom actions for mobile */}
                <div className="flex items-center justify-between md:hidden">
                  <span className="text-xs text-muted-foreground">View Project</span>
                  <div className="flex gap-3">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`Visit ${project.title} live site`}
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`View ${project.title} GitHub repository`}
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Hover effect border */}
              <div className="absolute inset-0 rounded-xl border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/vimal018"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium"
          >
            <Github size={18} />
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
