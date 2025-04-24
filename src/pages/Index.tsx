
import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import FeaturedPublications from '@/components/home/FeaturedPublications';
import UpcomingEvents from '@/components/home/UpcomingEvents';
import Achievements from '@/components/home/Achievements';
import About from '@/components/home/About';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeaturedPublications />
        <UpcomingEvents />
        <Achievements />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
