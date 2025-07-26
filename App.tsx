
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ProjectsGrid from './components/ProjectsGrid';
import LayersGrid from './components/LayersGrid';
import TechStack from './components/TechStack';
import WorkWithMe from './components/WorkWithMe';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-background min-h-screen text-text font-sans overflow-x-hidden relative">
       <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(#E5E7EB_1px,transparent_1px)] [background-size:24px_24px]"></div>
       <Header />
       <main className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Hero />
        <About />
        <ProjectsGrid />
        <LayersGrid />
        <TechStack />
        <WorkWithMe />
      </main>
      <Footer />
    </div>
  );
}

export default App;
