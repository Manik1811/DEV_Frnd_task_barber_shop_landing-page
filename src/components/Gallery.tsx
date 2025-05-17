import React, { useState } from 'react';
import { X } from 'lucide-react';

interface GalleryImage {
  id: number;
  url: string;
  alt: string;
  category: 'haircut' | 'salon' | 'team';
}

const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'haircut' | 'salon' | 'team'>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  
  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      url: "https://images.pexels.com/photos/4857775/pexels-photo-4857775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Client getting a haircut",
      category: 'haircut'
    },
    {
      id: 2,
      url: "https://images.pexels.com/photos/3998413/pexels-photo-3998413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Barber shop interior",
      category: 'salon'
    },
    {
      id: 3,
      url: "https://images.pexels.com/photos/2076931/pexels-photo-2076931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Professional haircut result",
      category: 'haircut'
    },
    {
      id: 4,
      url: "https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Barber team members",
      category: 'team'
    },
    {
      id: 5,
      url: "https://images.pexels.com/photos/3998421/pexels-photo-3998421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Classic straight razor shave",
      category: 'haircut'
    },
    {
      id: 6,
      url: "https://images.pexels.com/photos/2801833/pexels-photo-2801833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Salon equipment",
      category: 'salon'
    },
    {
      id: 7,
      url: "https://images.pexels.com/photos/3356170/pexels-photo-3356170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Barber team at work",
      category: 'team'
    },
    {
      id: 8,
      url: "https://images.pexels.com/photos/1805600/pexels-photo-1805600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Modern men's hairstyle",
      category: 'haircut'
    }
  ];
  
  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeFilter);
  
  return (
    <section id="gallery" className="section bg-slate-100">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">Our Gallery</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-6">
            Take a look at our work and the atmosphere at Fama Barber Shop and Beauty Salon.
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-8">
            <button 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === 'all' ? 'bg-slate-800 text-white' : 'bg-white text-slate-700 hover:bg-slate-100'
              }`}
              onClick={() => setActiveFilter('all')}
            >
              All Photos
            </button>
            <button 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === 'haircut' ? 'bg-slate-800 text-white' : 'bg-white text-slate-700 hover:bg-slate-100'
              }`}
              onClick={() => setActiveFilter('haircut')}
            >
              Haircuts
            </button>
            <button 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === 'salon' ? 'bg-slate-800 text-white' : 'bg-white text-slate-700 hover:bg-slate-100'
              }`}
              onClick={() => setActiveFilter('salon')}
            >
              Salon
            </button>
            <button 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === 'team' ? 'bg-slate-800 text-white' : 'bg-white text-slate-700 hover:bg-slate-100'
              }`}
              onClick={() => setActiveFilter('team')}
            >
              Our Team
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <div 
              key={image.id} 
              className="relative overflow-hidden rounded-lg h-64 cursor-pointer group"
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image.url} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center p-4">
                  <p className="font-medium">{image.alt}</p>
                  <p className="text-sm text-amber-300 mt-2">Click to enlarge</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <button 
                className="absolute -top-12 right-0 text-white hover:text-amber-500 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X size={32} />
              </button>
              <img 
                src={selectedImage.url} 
                alt={selectedImage.alt} 
                className="w-full max-h-[80vh] object-contain"
              />
              <p className="text-white text-center mt-4">{selectedImage.alt}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;