import React from 'react';
import { Users, Calendar, ThumbsUp, Award } from 'lucide-react';

interface Stat {
  id: number;
  value: string;
  label: string;
  icon: React.ReactNode;
}

const About: React.FC = () => {
  const stats: Stat[] = [
    {
      id: 1,
      value: "10+",
      label: "Years Experience",
      icon: <Calendar className="w-6 h-6 text-amber-500" />
    },
    {
      id: 2,
      value: "5,000+",
      label: "Happy Customers",
      icon: <Users className="w-6 h-6 text-amber-500" />
    },
    {
      id: 3,
      value: "116+",
      label: "Reviews",
      icon: <ThumbsUp className="w-6 h-6 text-amber-500" />
    },
    {
      id: 4,
      value: "4.6",
      label: "Rating",
      icon: <Award className="w-6 h-6 text-amber-500" />
    }
  ];

  return (
    <section id="about" className="section">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="section-title">About Fama Barber Shop</h2>
            <p className="text-lg text-slate-600 mb-6">
              Welcome to Fama Barber Shop and Beauty Salon, Denton's premier destination for exceptional grooming and beauty services since 2013.
            </p>
            <p className="text-slate-600 mb-6">
              Our team of skilled barbers and beauticians combine traditional techniques with modern trends to deliver personalized services tailored to each client's unique style and preferences.
            </p>
            <p className="text-slate-600 mb-6">
              At Fama, we believe that grooming is more than just a service—it's an experience. From the moment you step in, our warm and inviting atmosphere ensures you feel comfortable and relaxed.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <a href="#services" className="btn btn-primary">
                Explore Services
              </a>
              <a href="#contact" className="btn btn-outline">
                Contact Us
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg overflow-hidden h-80">
              <img 
                src="https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Barber cutting hair" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-rows-2 gap-6">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/2076930/pexels-photo-2076930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Barber shop interior" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3998429/pexels-photo-3998429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Barber tools" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <p className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</p>
              <p className="text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;