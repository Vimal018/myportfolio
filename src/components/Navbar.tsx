
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-navy shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto flex justify-between items-center px-6 lg:px-16">
        <a href="#home" className="text-2xl font-bold text-white">
          <span className="text-highlight font-mono">{"<"}</span>
          Portfolio
          <span className="text-highlight font-mono">{"/>"}</span>
        </a>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-2">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="nav-link">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="text-slate-light hover:text-highlight transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-navy-light fixed top-[60px] right-0 w-full h-screen">
          <ul className="flex flex-col items-center pt-8 space-y-6">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.href} 
                  className="text-slate-light hover:text-highlight text-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
