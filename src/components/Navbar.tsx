
import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';
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

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'glass shadow-lg py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto flex justify-between items-center px-6 lg:px-16">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-foreground group">
          <span className="text-primary font-mono animate-pulse group-hover:animate-bounce">{"<"}</span>
          <span className="gradient-text">Dev</span>
          <span className="text-primary font-mono animate-pulse group-hover:animate-bounce">{">"}</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <ul className="flex space-x-2 mr-6">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.href} 
                  className="nav-link relative overflow-hidden group"
                  onClick={closeMenu}
                >
                  <span className="relative z-10">{link.name}</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>
          
          {/* Theme Toggle */}
          <div className="flex items-center ml-4 space-x-3 p-2 bg-card/50 backdrop-blur-sm rounded-full border border-border">
            <Sun size={16} className={`transition-colors ${theme === 'light' ? 'text-primary' : 'text-muted-foreground'}`} />
            <Switch
              checked={theme === 'dark'}
              onCheckedChange={toggleTheme}
              className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-muted"
            />
            <Moon size={16} className={`transition-colors ${theme === 'dark' ? 'text-primary' : 'text-muted-foreground'}`} />
          </div>
        </nav>

        {/* Mobile Menu Controls */}
        <div className="md:hidden flex items-center">
          {/* Mobile Theme Toggle */}
          <div className="flex items-center mr-4 space-x-2 p-1.5 bg-card/50 backdrop-blur-sm rounded-full border border-border">
            <Sun size={14} className={`transition-colors ${theme === 'light' ? 'text-primary' : 'text-muted-foreground'}`} />
            <Switch
              checked={theme === 'dark'}
              onCheckedChange={toggleTheme}
              className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-muted scale-75"
            />
            <Moon size={14} className={`transition-colors ${theme === 'dark' ? 'text-primary' : 'text-muted-foreground'}`} />
          </div>
          
          {/* Hamburger Menu */}
          <button 
            onClick={toggleMenu}
            className="text-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-card/50"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden glass fixed top-[60px] right-0 w-full h-screen bg-background/95 backdrop-blur-md">
          <ul className="flex flex-col items-center pt-8 space-y-6">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.href} 
                  className="text-foreground hover:text-primary text-lg transition-colors font-medium"
                  onClick={closeMenu}
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
