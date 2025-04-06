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
              Hey there! I’m Vimal, a passionate and curious full-stack developer from Madurai, Tamil Nadu.
              I specialize in building clean and interactive user interfaces using modern web technologies like 
              <span className="text-highlight"> React, TypeScript, and Tailwind CSS</span>.
            </p>

            <p className="text-slate mb-6">
              I started with HTML & CSS, and over time, I’ve worked with the full MERN stack. 
              One of my recent highlights was leading a smart agricultural project — an AI-powered platform 
              to help small-scale farmers with disease detection, soil insights, and government schemes. 
              It combines machine learning, multi-language support, and real-time features.
            </p>

            <p className="text-slate mb-6">
              I’ve also completed a two-month internship at Thanvi Tech where I built AJAX logins, 
              face detection features, and e-commerce banners. Through this, I strengthened my practical knowledge 
              of full-stack development and teamwork.
            </p>

            <p className="text-slate">
              Currently, I’m focusing on building intuitive digital products, leveling up my backend with TypeScript,
              and creating projects that solve real-world problems. I’m always up for learning something new and collaborating on impactful ideas!
            </p>
          </div>
          
          <div className="relative animate-on-scroll" style={{ animationDelay: "0.2s" }}>
            <div className="relative z-10 w-5/6 mx-auto md:ml-auto">
              <div className="aspect-square rounded-md overflow-hidden">
                <img 
                  src="/Myimg.jpg" 
                  alt="Vimal" 
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
