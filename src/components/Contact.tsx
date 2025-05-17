import React, { useState } from 'react';
import { MapPin, Phone, Clock, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const businessHours = [
    { day: "Monday", hours: "9:00 AM - 7:00 PM" },
    { day: "Tuesday", hours: "9:00 AM - 7:00 PM" },
    { day: "Wednesday", hours: "9:00 AM - 7:00 PM" },
    { day: "Thursday", hours: "9:00 AM - 7:00 PM" },
    { day: "Friday", hours: "9:00 AM - 7:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 6:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:contact@famabarber.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  return (
    <section id="contact" className="section bg-slate-100">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="section-title">Contact Us</h2>
            <p className="text-lg text-slate-600 mt-6 mb-8">
              Have questions or want to book an appointment? Get in touch with us.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <MapPin className="w-6 h-6 text-amber-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-1">Location</h3>
                  <p className="text-slate-600">
                    500 N Bell Ave #109, Denton, TX 76209, United States
                  </p>
                  <a 
                    href="https://www.google.com/maps/place/Fama+Barber+Shop+and+Beauty+Salon/@33.2328245,-97.1339257,17z/data=!4m14!1m7!3m6!1s0x864c4c3d25230155:0x8ad1cc8d46e71e10!2sFama+Barber+Shop+and+Beauty+Salon!8m2!3d33.2328245!4d-97.1313508!16s%2Fg%2F11fkgr6pvj!3m5!1s0x864c4c3d25230155:0x8ad1cc8d46e71e10!8m2!3d33.2328245!4d-97.1313508!16s%2Fg%2F11fkgr6pvj?entry=ttu" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-amber-500 hover:text-amber-600 inline-block mt-2 text-sm font-medium"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Phone className="w-6 h-6 text-amber-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-1">Phone</h3>
                  <p className="text-slate-600">
                    <a href="tel:+19406129127" className="hover:text-amber-500">+1 940-612-9127</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Mail className="w-6 h-6 text-amber-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-1">Email</h3>
                  <p className="text-slate-600">
                    <a href="mailto:contact@famabarber.com" className="hover:text-amber-500">contact@famabarber.com</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Clock className="w-6 h-6 text-amber-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-1">Business Hours</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {businessHours.map((item, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="font-medium">{item.day}</span>
                        <span className="text-slate-600">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-slate-800 text-white p-2 rounded-full hover:bg-amber-500 transition-colors">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="bg-slate-800 text-white p-2 rounded-full hover:bg-amber-500 transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="bg-slate-800 text-white p-2 rounded-full hover:bg-amber-500 transition-colors">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6">Book an Appointment</h3>
              <form id="contact-form" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="(123) 456-7890"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Appointment Request"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full p-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Please specify your preferred date, time, and service..."
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full btn btn-primary"
                >
                  Send Booking Request
                </button>
              </form>
            </div>
            
            <div className="mt-8 rounded-lg overflow-hidden shadow-md h-72">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.7277115861097!2d-97.13392573480081!3d33.23282798083542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c4c3d25230155%3A0x8ad1cc8d46e71e10!2sFama%20Barber%20Shop%20and%20Beauty%20Salon!5e0!3m2!1sen!2sus!4v1686773372549!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Fama Barber Shop and Beauty Salon location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;