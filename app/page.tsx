'use client';

import Hero from '../components/Hero';
import About from '../components/About';
import Framework from '../components/Framework';
import Projects from '../components/Projects';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <Framework />
      <Projects />
      <CTA />
      <Footer />
    </>
  );
}