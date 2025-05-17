import React, { useState } from 'react';
import { Scissors, Droplet, Sparkles, Check } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  price: string;
  icon: React.ReactNode;
  category: 'haircut' | 'shave' | 'beauty';
  features: string[];
}

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'haircut' | 'shave' | 'beauty'>('all');
  
  const handleBooking = () => {
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
      const subjectInput = document.querySelector('#subject') as HTMLInputElement;
      if (subjectInput) {
        subjectInput.value = 'Booking Request';
      }
    }
  };
  
  const services: Service[] = [
    {
      id: 1,
      title: "Classic Haircut",
      description: "Traditional haircut with clippers and scissors",
      price: "$25",
      icon: <Scissors className="w-8 h-8 text-amber-500" />,
      category: "haircut",
      features: [
        "Consultation",
        "Wash & conditioning",
        "Cut & style",
        "Hot towel finish"
      ]
    },
    {
      id: 2,
      title: "Beard Trim",
      description: "Shape and trim your beard to perfection",
      price: "$15",
      icon: <Scissors className="w-8 h-8 text-amber-500" />,
      category: "shave",
      features: [
        "Shape & line up",
        "Hot towel treatment",
        "Beard oil application",
        "Styling"
      ]
    },
    {
      id: 3,
      title: "Hot Shave",
      description: "Traditional straight razor shave with hot towel",
      price: "$30",
      icon: <Droplet className="w-8 h-8 text-amber-500" />,
      category: "shave",
      features: [
        "Pre-shave oil",
        "Hot towel treatment",
        "Straight razor shave",
        "Aftershave balm"
      ]
    },
    {
      id: 4,
      title: "Haircut & Beard Combo",
      description: "Complete grooming package for hair and beard",
      price: "$35",
      icon: <Scissors className="w-8 h-8 text-amber-500" />,
      category: "haircut",
      features: [
        "Classic haircut",
        "Beard trim & shape",
        "Hot towel treatment",
        "Style finish"
      ]
    },
    {
      id: 5,
      title: "Hair Coloring",
      description: "Professional hair coloring services",
      price: "$45+",
      icon: <Droplet className="w-8 h-8 text-amber-500" />,
      category: "beauty",
      features: [
        "Consultation",
        "Custom color mixing",
        "Application",
        "Style finish"
      ]
    },
    {
      id: 6,
      title: "Facial Treatment",
      description: "Rejuvenating facial for all skin types",
      price: "$40",
      icon: <Sparkles className="w-8 h-8 text-amber-500" />,
      category: "beauty",
      features: [
        "Cleansing",
        "Exfoliation",
        "Mask treatment",
        "Moisturizing"
      ]
    },
  ];
  
  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(service => service.category === activeTab);
  
  return (
    <section id="services" className="section bg-slate-100">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">Our Services</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-6">
            We offer premium barber services and beauty treatments to keep you looking your best.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-8">
            <button 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === 'all' ? 'bg-slate-800 text-white' : 'bg-white text-slate-700 hover:bg-slate-100'
              }`}
              onClick={() => setActiveTab('all')}
            >
              All Services
            </button>
            <button 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === 'haircut' ? 'bg-slate-800 text-white' : 'bg-white text-slate-700 hover:bg-slate-100'
              }`}
              onClick={() => setActiveTab('haircut')}
            >
              Haircuts
            </button>
            <button 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === 'shave' ? 'bg-slate-800 text-white' : 'bg-white text-slate-700 hover:bg-slate-100'
              }`}
              onClick={() => setActiveTab('shave')}
            >
              Shaves
            </button>
            <button 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === 'beauty' ? 'bg-slate-800 text-white' : 'bg-white text-slate-700 hover:bg-slate-100'
              }`}
              onClick={() => setActiveTab('beauty')}
            >
              Beauty
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div key={service.id} className="service-card group">
              <div className="flex justify-between items-start mb-4">
                <div>{service.icon}</div>
                <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-bold">
                  {service.price}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-slate-600 mb-4">{service.description}</p>
              
              <div className="space-y-2">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-sm text-slate-700">
                    <Check className="w-4 h-4 text-amber-500 mr-2" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6">
                <button 
                  onClick={handleBooking}
                  className="inline-block text-amber-500 font-medium hover:text-amber-600 transition-colors"
                >
                  Book Now →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;