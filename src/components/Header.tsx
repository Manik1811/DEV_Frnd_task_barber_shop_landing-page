import React, { useState, useEffect } from 'react';
import { Menu, X, Scissors } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleBooking = () => {
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
      const subjectInput = document.querySelector('#subject') as HTMLInputElement;
      if (subjectInput) {
        subjectInput.value = 'Booking Request';
      }
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900 text-white shadow-lg py-3' : 'bg-transparent text-white py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="#home" className="flex items-center">
          <Scissors className="w-6 h-6 mr-2 text-amber-500" />
          <span className="font-playfair text-xl font-bold">Fama Barber</span>
        </a>

        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-amber-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={handleBooking}
            className="btn btn-primary text-sm"
          >
            Book Now
          </button>
        </nav>

        <button 
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div 
        className={`lg:hidden bg-slate-900 overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-custom flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white text-lg font-medium py-2 hover:text-amber-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={handleBooking}
            className="btn btn-primary text-center"
          >
            Book Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;