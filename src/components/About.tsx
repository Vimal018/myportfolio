
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-background section-padding relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Hey there! I'm Vimal, a passionate and curious full-stack developer from Madurai, Tamil Nadu.
                I specialize in building clean and interactive user interfaces using modern web technologies like 
                <span className="text-primary font-medium"> React, TypeScript, and Tailwind CSS</span>.
              </p>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                I started with HTML & CSS, and over time, I've worked with the full MERN stack. 
                One of my recent highlights was leading a smart agricultural project — an AI-powered platform 
                to help small-scale farmers with disease detection, soil insights, and government schemes. 
                It combines machine learning, multi-language support, and real-time features.
              </p>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                I've also completed a two-month internship at Thanvi Tech where I built AJAX logins, 
                face detection features, and e-commerce banners. Through this, I strengthened my practical knowledge 
                of full-stack development and teamwork.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Currently, I'm focusing on building intuitive digital products, leveling up my backend with TypeScript,
                and creating projects that solve real-world problems. I'm always up for learning something new and collaborating on impactful ideas!
              </p>
            </div>

           
          </div>
          
          <div className="relative animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative z-10 w-5/6 mx-auto md:ml-auto">
              <div className="aspect-square rounded-2xl overflow-hidden bg-card border border-border shadow-xl">
                <img 
                  src="/Myimg.jpg" 
                  alt="Vimal" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="absolute inset-0 border-2 border-primary rounded-2xl translate-x-6 translate-y-6 -z-10 opacity-20" />
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-bounce-slow" />
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-primary/20 rounded-full animate-float-slow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
