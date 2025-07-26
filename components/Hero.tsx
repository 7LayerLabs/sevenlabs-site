import React from 'react';
import Button from './Button';

const Hero: React.FC = () => {
  const handleScrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative text-center py-20 sm:py-24 md:py-32">
      <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold tracking-tighter text-text">
        Built on <span className="text-brand-green">Seven</span>. Made for Many.
      </h1>
      <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-muted">
        I build businesses, brands, and tools that solve real problems—where food, finance, family, and experiments collide. Seven Layer Labs is where it all comes together.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button variant="primary" className="w-full sm:w-auto" onClick={() => handleScrollTo('projects')}>
          View My Projects
        </Button>
        <Button variant="secondary" className="w-full sm:w-auto" onClick={() => handleScrollTo('layers')}>
          Explore the Layers
        </Button>
      </div>
    </section>
  );
};

export default Hero;