
import React, { useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';

const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      document.documentElement.style.setProperty(
        '--scroll',
        (window.scrollY / (document.body.offsetHeight - window.innerHeight)).toString()
      );
      
      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;
        
        if (isVisible) {
          el.classList.add('animate-active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize on mount
    
    // Add a class to the body after a delay for page load animation
    setTimeout(() => {
      document.body.classList.add('loaded');
    }, 300);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-16 bg-navy dark:bg-navy-dark text-white section-padding overflow-hidden">
      <div className="container mx-auto relative">
        <div className="max-w-3xl z-10 relative">
          <p className="font-mono text-highlight mb-5 animate-on-scroll tracking-wider">
            <span className="inline-block animate-bounce-slow">Hi,</span> my name is
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-light mb-4 animate-on-scroll bg-gradient-to-r from-slate-light via-white to-slate-light bg-clip-text text-transparent" style={{ animationDelay: "0.1s" }}>
            John Doe.
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-slate mb-8 animate-on-scroll" style={{ animationDelay: "0.2s" }}>
            I build things for the web.
          </h2>
          <p className="text-slate text-lg md:text-xl mb-12 max-w-xl animate-on-scroll" style={{ animationDelay: "0.3s" }}>
            I'm a frontend developer specializing in building exceptional digital experiences. 
            Currently, I'm focused on building accessible, human-centered products.
          </p>
          
          <div className="flex items-center space-x-8 animate-on-scroll" style={{ animationDelay: "0.4s" }}>
            <a 
              href="#projects" 
              className="flex items-center gap-2 bg-transparent hover:bg-highlight/10 border border-highlight text-highlight py-3 px-6 rounded-md font-medium transition-all duration-300 group"
            >
              View Projects 
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <div className="flex items-center gap-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-highlight transition-colors hover:scale-110 transform duration-200">
                <Github size={22} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-highlight transition-colors hover:scale-110 transform duration-200">
                <Linkedin size={22} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-highlight transition-colors hover:scale-110 transform duration-200">
                <Twitter size={22} />
              </a>
            </div>
          </div>
        </div>

        {/* Animated floating elements */}
        <div className="absolute top-1/4 right-10 md:right-32 w-64 h-64 opacity-20 dark:opacity-10 animate-float-slow">
          <div className="w-full h-full rounded-full bg-gradient-to-r from-highlight to-blue-500 blur-2xl"></div>
        </div>
        
        <div className="absolute bottom-1/4 right-20 w-40 h-40 opacity-20 dark:opacity-10 animate-float-medium">
          <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-500 to-highlight blur-xl"></div>
        </div>
        
        <div className="absolute top-1/3 right-40 w-16 h-16 animate-spin-slow opacity-40 dark:opacity-20">
          <div className="w-full h-full bg-highlight blur-sm rotate-45"></div>
        </div>

        <div className="absolute top-20 left-1/4 w-24 h-24 animate-float-fast opacity-10 dark:opacity-5">
          <div className="w-full h-full rounded-lg bg-white blur-md"></div>
        </div>

        <div className="absolute top-1/2 left-20 w-8 h-8 animate-ping-slow opacity-20 dark:opacity-10">
          <div className="w-full h-full rounded-full bg-highlight blur-sm"></div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-slate hover:text-highlight transition-colors">
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
