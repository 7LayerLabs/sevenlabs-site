
import React from 'react';
import { PROJECTS_DATA } from '../constants';
import ProjectCard from './ProjectCard';

// A decorative illustration for the Projects section, representing different ideas and experiments.
const ProjectsIllustration: React.FC = () => (
    <div aria-hidden="true" className="flex justify-center items-center p-4">
        <svg className="w-full h-auto max-w-[200px] md:max-w-full" viewBox="0 0 240 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g transform="rotate(-8 120 100) translate(0, 10)">
                {/* Folder 3 (Back) */}
                <rect x="50" y="60" width="140" height="100" rx="8" fill="#E5E7EB"/>
                <path d="M60 50 L80 50 L90 60 L180 60" stroke="#E5E7EB" strokeWidth="12" strokeLinecap="round" />

                {/* Folder 2 (Middle) */}
                <rect x="40" y="50" width="140" height="100" rx="8" fill="#F9FAFB"/>
                <path d="M50 40 L70 40 L80 50 L170 50" stroke="#F9FAFB" strokeWidth="12" strokeLinecap="round" />
                <rect x="40" y="50" width="140" height="100" rx="8" stroke="#6B7280" strokeWidth="1.5" />

                {/* Folder 1 (Front, active) */}
                <rect x="30" y="40" width="140" height="100" rx="8" fill="#FFFFFF"/>
                <path d="M40 30 L60 30 L70 40 L160 40" stroke="#FFFFFF" strokeWidth="12" strokeLinecap="round" />
                <rect x="30" y="40" width="140" height="100" rx="8" stroke="#059669" strokeWidth="2" />
                <path d="M40 30 L60 30 L70 40 L160 40" stroke="#059669" strokeWidth="2" strokeLinecap="round" fill="none" />

                {/* Document inside front folder */}
                <rect x="45" y="45" width="110" height="20" rx="2" fill="#F9FAFB" />
                <path d="M55 52 h 80 M55 58 h 60" stroke="#B0B0B0" strokeWidth="1.5" strokeLinecap="round"/>
            </g>
        </svg>
    </div>
);


const ProjectsGrid: React.FC = () => {
  return (
    <section id="projects" className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center mb-16">
        <div className="md:col-span-2 text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-text">
            Current Projects
          </h2>
          <p className="mt-4 max-w-2xl text-muted text-lg leading-relaxed">
            A look at what I'm actively building and experimenting with right now. These are the sparks that have made it out of the lab and into the wild.
          </p>
        </div>
        <div className="md:col-span-1">
            <ProjectsIllustration />
        </div>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS_DATA.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project}
            className={project.isFlagship ? 'md:col-span-2' : ''}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;
