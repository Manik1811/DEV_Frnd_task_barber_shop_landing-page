import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';

const BookingButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 transition-all duration-300 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <button
        onClick={handleBooking}
        className="flex items-center justify-center bg-amber-500 text-white rounded-full p-4 shadow-lg hover:bg-amber-600 transition-colors"
        aria-label="Book Appointment"
      >
        <Calendar className="w-6 h-6 mr-2" />
        <span className="font-medium">Book Now</span>
      </button>
    </div>
  );
};

export default BookingButton;