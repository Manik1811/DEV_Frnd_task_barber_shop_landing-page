import React from 'react';
import { Clock, MapPin, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContactForm = () => {
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
      const subjectInput = document.querySelector('#subject') as HTMLInputElement;
      if (subjectInput) {
        subjectInput.value = 'Booking Request';
      }
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/60"></div>
      </div>
      
      <div className="container-custom relative z-10 text-white">
        <div className="max-w-2xl animate-fadeIn">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Premium Barber Shop & Beauty Salon Experience
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Where style meets precision. Expert cuts, classic shaves, and beauty treatments for the modern individual.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button onClick={scrollToContactForm} className="btn btn-primary">
              Book Appointment
            </button>
            <a href="#services" className="btn btn-outline">
              View Services
            </a>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-3 text-amber-500" />
              <div>
                <p className="font-medium">Opening Hours</p>
                <p className="text-sm opacity-80">Open ⋅ Closes 7 pm</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-3 text-amber-500" />
              <div>
                <p className="font-medium">Call Us</p>
                <p className="text-sm opacity-80">+1 940-612-9127</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-3 text-amber-500" />
              <div>
                <p className="font-medium">Location</p>
                <p className="text-sm opacity-80">500 N Bell Ave #109, Denton</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;