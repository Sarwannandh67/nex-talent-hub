
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold gradient-text">CreatorNex</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
            <a href="#creators" className="text-foreground hover:text-primary transition-colors">For Creators</a>
            <a href="#brands" className="text-foreground hover:text-primary transition-colors">For Brands</a>
            <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">Portfolio</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
            <Button className="bg-creator-gradient hover:opacity-90 transition-opacity">Get Started</Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-foreground focus:outline-none"
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden glass-dark absolute top-full left-0 right-0 py-4">
          <nav className="flex flex-col space-y-4 px-4">
            <a 
              href="#services" 
              className="text-foreground hover:text-primary transition-colors py-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#creators" 
              className="text-foreground hover:text-primary transition-colors py-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              For Creators
            </a>
            <a 
              href="#brands" 
              className="text-foreground hover:text-primary transition-colors py-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              For Brands
            </a>
            <a 
              href="#portfolio" 
              className="text-foreground hover:text-primary transition-colors py-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </a>
            <a 
              href="#contact" 
              className="text-foreground hover:text-primary transition-colors py-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <Button className="bg-creator-gradient hover:opacity-90 transition-opacity w-full">
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
