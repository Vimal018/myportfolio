import React, { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        'service_xvf0wcv',
        'template_bkq4bu4',
        formRef.current!,
        'ujQ32jnU4qm6wNF7p'
      )
      .then(
        () => {
          setIsSubmitting(false);
          setSubmitMessage('Message sent successfully! I will get back to you soon.');
          formRef.current?.reset();

          setTimeout(() => {
            setSubmitMessage('');
          }, 5000);
        },
        (error) => {
          console.error(error.text);
          setIsSubmitting(false);
          setSubmitMessage('Oops! Something went wrong. Please try again later.');
        }
      );
  };

  return (
    <section id="contact" className="py-24 bg-navy section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 relative animate-on-scroll">
          <span className="text-slate-light">Get In Touch</span>
          <span className="absolute bottom-0 left-0 w-16 h-1 bg-highlight mt-2"></span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="animate-on-scroll" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-2xl font-bold mb-6 text-slate-light">Let's Talk</h3>
            <p className="text-slate mb-8">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
              I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="text-highlight mr-4" size={20} />
                <div>
                  <h4 className="text-slate-light font-medium">Email</h4>
                  <a href="mailto:vimal2409it@gmail.com" className="text-slate hover:text-highlight transition-colors">
                    vimal2409it@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="text-highlight mr-4" size={20} />
                <div>
                  <h4 className="text-slate-light font-medium">Phone</h4>
                  <a href="tel:+91-8838760423" className="text-slate hover:text-highlight transition-colors">
                    +91-8838760423
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="text-highlight mr-4" size={20} />
                <div>
                  <h4 className="text-slate-light font-medium">Location</h4>
                  <p className="text-slate">Madurai, TN</p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            <form ref={formRef} onSubmit={handleSubmit} className="bg-navy-dark p-6 rounded-lg">
              {submitMessage && (
                <div className="mb-6 py-3 px-4 bg-highlight/20 border border-highlight text-highlight rounded-md">
                  {submitMessage}
                </div>
              )}

              <div className="mb-4">
                <label htmlFor="name" className="block text-slate-light mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  required
                  className="w-full bg-navy border border-navy-light rounded-md px-4 py-2 text-slate-light focus:border-highlight focus:outline-none"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-slate-light mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  required
                  className="w-full bg-navy border border-navy-light rounded-md px-4 py-2 text-slate-light focus:border-highlight focus:outline-none"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-slate-light mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-navy border border-navy-light rounded-md px-4 py-2 text-slate-light focus:border-highlight focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center w-full bg-highlight text-navy-dark font-medium py-3 rounded-md hover:bg-highlight/90 transition-colors disabled:opacity-70"
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    Send Message <Send size={16} className="ml-2" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
