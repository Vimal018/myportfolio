
import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Switch } from './ui/switch';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

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

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-navy/90 dark:bg-navy-dark/90 backdrop-blur-sm shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto flex justify-between items-center px-6 lg:px-16">
        <a href="#home" className="text-2xl font-bold text-white">
          <span className="text-highlight font-mono animate-pulse">{"<"}</span>
          <span className="bg-gradient-to-r from-white to-slate bg-clip-text text-transparent">Dev</span>
          <span className="text-highlight font-mono animate-pulse">{">"}</span>
        </a>
        
        <nav className="hidden md:flex items-center">
          <ul className="flex space-x-2 mr-6">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="nav-link relative overflow-hidden group">
                  <span className="relative z-10">{link.name}</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-highlight origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center ml-4 space-x-2">
            <Sun size={18} className="text-slate dark:text-highlight hidden dark:block" />
            <Switch
              checked={theme === 'dark'}
              onCheckedChange={toggleTheme}
              className="data-[state=checked]:bg-navy-light data-[state=unchecked]:bg-slate-light/30"
            />
            <Moon size={18} className="text-slate dark:text-slate-light dark:hidden" />
          </div>
        </nav>

        <div className="md:hidden flex items-center">
          <div className="flex items-center mr-4">
            <Sun size={18} className="text-slate dark:text-highlight hidden dark:block" />
            <Switch
              checked={theme === 'dark'}
              onCheckedChange={toggleTheme}
              className="mx-2 data-[state=checked]:bg-navy-light data-[state=unchecked]:bg-slate-light/30"
            />
            <Moon size={18} className="text-slate dark:text-slate-light dark:hidden" />
          </div>
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
        <div className="md:hidden bg-navy-light dark:bg-navy-dark fixed top-[60px] right-0 w-full h-screen backdrop-blur-md bg-opacity-95 dark:bg-opacity-95">
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
