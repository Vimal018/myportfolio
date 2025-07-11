
import React from 'react';
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-xl font-bold text-foreground">
              <span className="text-primary font-mono animate-pulse">{"<"}</span>
              <span className="gradient-text">Dev</span>
              <span className="text-primary font-mono animate-pulse">{">"}</span>
            </a>
          </div>
          
          <div className="flex items-center gap-6 mb-4 md:mb-0">
            <a href="https://github.com/Vimal018" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/vimal-r-m-c-0735a8239/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200">
              <Linkedin size={20} />
            </a>
            <a href="https://instagram.com/vimal_it" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200">
              <Instagram size={20} />
            </a>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Vimal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
