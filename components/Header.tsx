import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScrollTo = (id: string) => {
    if (id === '#') return;
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 10);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const navLinks = [
    { name: 'Projects', id: 'projects' },
    { name: '7 Layers', id: 'layers' },
    { name: 'Collab', id: 'contact' },
    { name: 'Socials', id: '#' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-md bg-background/90 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Desktop Centered Nav */}
        <nav className="hidden md:flex items-center justify-center h-20 gap-x-6 lg:gap-x-8">
            <button onClick={() => handleScrollTo(navLinks[0].id)} className="font-cursive text-xl text-muted hover:text-text transition-colors duration-200">{navLinks[0].name}</button>
            <button onClick={() => handleScrollTo(navLinks[1].id)} className="font-cursive text-xl text-muted hover:text-text transition-colors duration-200">{navLinks[1].name}</button>
            
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green rounded-lg mx-4"
              aria-label="Back to top"
            >
              <Logo size="sm" />
            </a>

            <button onClick={() => handleScrollTo(navLinks[2].id)} className="font-cursive text-xl text-muted hover:text-text transition-colors duration-200">{navLinks[2].name}</button>
            <button onClick={() => handleScrollTo(navLinks[3].id)} className="font-cursive text-xl text-muted hover:text-text transition-colors duration-200">{navLinks[3].name}</button>
        </nav>
        
        {/* Mobile Nav */}
        <div className="md:hidden flex items-center justify-between h-20">
           <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green rounded-lg"
              aria-label="Back to top"
            >
              <Logo size="sm" />
            </a>
            {/* A simple hamburger menu could be added here for mobile */}
        </div>

      </div>
    </header>
  );
};

export default Header;