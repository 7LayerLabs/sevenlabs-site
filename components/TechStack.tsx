import React from 'react';
import { TECH_STACK_DATA } from '../constants';
import type { Tech } from '../types';

const TechCard: React.FC<{ tech: Tech }> = ({ tech }) => (
  <div className="flex items-start gap-4 p-4 bg-surface rounded-lg border border-subtle transition-shadow hover:shadow-md hover:-translate-y-1">
    <div className="flex-shrink-0 h-8 w-8 text-text mt-0.5">
      {tech.icon}
    </div>
    <div>
      <h4 className="font-bold text-text">{tech.name}</h4>
      <p className="text-sm text-muted/90 leading-relaxed">{tech.description}</p>
    </div>
  </div>
);

const TechStack: React.FC = () => {
  const frontendTech = TECH_STACK_DATA.filter(t => t.category === 'Frontend');
  const backendTech = TECH_STACK_DATA.filter(t => t.category === 'Backend');
  const infraTech = TECH_STACK_DATA.filter(t => t.category === 'Infrastructure & Data');


  return (
    <section id="tech-stack" className="py-16 sm:py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-text">
          Our Go-To Tech Stack
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-muted text-lg">
          Based on the kinds of projects we've discussed (MenuSpark, SevenLayerLabs), here is a modern and powerful tech stack that we would likely use.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
        <div>
          <h3 className="text-2xl font-bold text-text mb-6 text-center md:text-left border-b border-subtle pb-3">Frontend</h3>
          <div className="space-y-4">
            {frontendTech.map(tech => <TechCard key={tech.name} tech={tech} />)}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-text mb-6 text-center md:text-left border-b border-subtle pb-3">Backend</h3>
          <div className="space-y-4">
            {backendTech.map(tech => <TechCard key={tech.name} tech={tech} />)}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-text mb-6 text-center md:text-left border-b border-subtle pb-3">Infrastructure & Data</h3>
          <div className="space-y-4">
            {infraTech.map(tech => <TechCard key={tech.name} tech={tech} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;