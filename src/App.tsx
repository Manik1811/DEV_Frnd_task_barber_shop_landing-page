import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingButton from './components/BookingButton';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <BookingButton />
    </div>
  );
}

export default App;