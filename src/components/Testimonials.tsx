import React from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  review: string;
  rating: number;
  date: string;
  image?: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Michael Johnson",
      review: "Fama Barber Shop always delivers exceptional service. My barber understands exactly what I want and always provides a perfect cut. Highly recommend!",
      rating: 5,
      date: "May 2023",
      image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 2,
      name: "David Rodriguez",
      review: "Best barber in Denton! The atmosphere is great, and they take their time to ensure you get exactly what you want. The hot towel treatment is amazing.",
      rating: 5,
      date: "June 2023",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 3,
      name: "James Williams",
      review: "Costly compared to other barbershops with better haircuts. Service was decent but not worth the premium price they charge.",
      rating: 3,
      date: "July 2023",
      image: "https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 4,
      name: "Robert Thompson",
      review: "First-time visitor and I'm already planning my next appointment. My barber was professional, friendly, and gave me one of the best cuts I've had.",
      rating: 5,
      date: "August 2023",
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];
  
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star 
        key={index} 
        size={16} 
        className={index < rating ? "text-amber-500 fill-amber-500" : "text-gray-300"} 
      />
    ));
  };
  
  return (
    <section id="testimonials" className="section">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">Client Testimonials</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-6">
            See what our clients have to say about their experience at Fama Barber Shop and Beauty Salon.
          </p>
          <div className="flex items-center justify-center mt-4">
            <div className="flex">
              {renderStars(5)}
            </div>
            <p className="ml-2 text-slate-700 font-medium">4.6 stars (116+ reviews)</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card relative">
              <div className="absolute top-4 right-6 text-amber-500 opacity-10">
                <Quote size={64} />
              </div>
              <div className="flex items-start gap-4">
                {testimonial.image && (
                  <div className="flex-shrink-0">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </div>
                )}
                <div className="flex-1">
                  <div className="flex mb-2">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="italic text-slate-700 mb-4">"{testimonial.review}"</p>
                  <div className="flex justify-between items-center">
                    <p className="font-bold text-slate-900">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">{testimonial.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://www.google.com/maps/place/Fama+Barber+Shop+and+Beauty+Salon/@33.2328245,-97.1339257,17z/data=!4m14!1m7!3m6!1s0x864c4c3d25230155:0x8ad1cc8d46e71e10!2sFama+Barber+Shop+and+Beauty+Salon!8m2!3d33.2328245!4d-97.1313508!16s%2Fg%2F11fkgr6pvj!3m5!1s0x864c4c3d25230155:0x8ad1cc8d46e71e10!8m2!3d33.2328245!4d-97.1313508!16s%2Fg%2F11fkgr6pvj?entry=ttu" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            View All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;