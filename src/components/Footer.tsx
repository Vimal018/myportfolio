
import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-dark dark:bg-black py-8 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-xl font-bold text-white">
              <span className="text-highlight font-mono animate-pulse">{"<"}</span>
              <span className="bg-gradient-to-r from-white to-slate bg-clip-text text-transparent">Dev</span>
              <span className="text-highlight font-mono animate-pulse">{">"}</span>
            </a>
          </div>
          
          <div className="flex items-center gap-6 mb-4 md:mb-0">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-highlight transition-colors hover:scale-110 transform duration-200">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-highlight transition-colors hover:scale-110 transform duration-200">
              <Linkedin size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-highlight transition-colors hover:scale-110 transform duration-200">
              <Twitter size={20} />
            </a>
          </div>
          
          <p className="text-sm text-slate">
            © {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
