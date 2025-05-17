import React from 'react';
import { Scissors } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Scissors className="w-6 h-6 text-amber-500 mr-2" />
              <span className="font-playfair text-xl font-bold">Fama Barber</span>
            </div>
            <p className="text-slate-400 mb-6">
              Premium barber services and beauty treatments in Denton, TX since 2013.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-300 hover:text-amber-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" className="text-slate-300 hover:text-amber-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a href="#" className="text-slate-300 hover:text-amber-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-slate-400 hover:text-amber-500 transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-amber-500 transition-colors">Services</a>
              </li>
              <li>
                <a href="#about" className="text-slate-400 hover:text-amber-500 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#gallery" className="text-slate-400 hover:text-amber-500 transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#testimonials" className="text-slate-400 hover:text-amber-500 transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-amber-500 transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-slate-400 hover:text-amber-500 transition-colors">Haircuts</a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-amber-500 transition-colors">Beard Trims</a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-amber-500 transition-colors">Hot Shaves</a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-amber-500 transition-colors">Hair Coloring</a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-amber-500 transition-colors">Facial Treatments</a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-amber-500 transition-colors">Kids Haircuts</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin text-amber-500 mr-3 flex-shrink-0">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-slate-400">
                  500 N Bell Ave #109, Denton, TX 76209, United States
                </span>
              </li>
              <li className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone text-amber-500 mr-3 flex-shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="tel:+19406129127" className="text-slate-400 hover:text-amber-500">
                  +1 940-612-9127
                </a>
              </li>
              <li className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail text-amber-500 mr-3 flex-shrink-0">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <a href="mailto:contact@famabarber.com" className="text-slate-400 hover:text-amber-500">
                  contact@famabarber.com
                </a>
              </li>
              <li className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock text-amber-500 mr-3 flex-shrink-0">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span className="text-slate-400">
                  Open Today: 9:00 AM - 7:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Fama Barber Shop and Beauty Salon. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
            <a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;