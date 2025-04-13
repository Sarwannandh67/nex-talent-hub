
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import ForCreators from '@/components/ForCreators';
import ForBrands from '@/components/ForBrands';
import Testimonials from '@/components/Testimonials';
import Portfolio from '@/components/Portfolio';
import ContactForms from '@/components/ContactForms';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <ForCreators />
        <ForBrands />
        <Testimonials />
        <Portfolio />
        <ContactForms />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
