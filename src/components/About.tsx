
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-navy-light section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 relative animate-on-scroll">
          <span className="text-slate-light">About Me</span>
          <span className="absolute bottom-0 left-0 w-16 h-1 bg-highlight mt-2"></span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll" style={{ animationDelay: "0.1s" }}>
            <p className="text-slate mb-6">
              Hello! My name is Vimal and I enjoy creating things that live on the internet. 
              My interest in web development started back in 2012 when I decided to try editing 
              custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
            </p>
            
            <p className="text-slate mb-6">
              Fast-forward to today, and I've had the privilege of working at an advertising agency, 
              a start-up, a huge corporation, and a student-led design studio. My main focus these 
              days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
            </p>
            
            <p className="text-slate">
              I also recently launched a course that covers everything you need to build a web app 
              with the Spotify API using Node & React.
            </p>
          </div>
          
          <div className="relative animate-on-scroll" style={{ animationDelay: "0.2s" }}>
            <div className="relative z-10 w-5/6 mx-auto md:ml-auto">
              <div className="aspect-square rounded-md overflow-hidden">
                <img 
                  src="/Myimg.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="absolute inset-0 border-2 border-highlight rounded-md translate-x-5 translate-y-5 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
