
import React from 'react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, className = '' }) => {

  const CardContent = () => (
    <div className={`
      bg-surface p-6 rounded-xl 
      border border-subtle 
      flex flex-col gap-4
      h-full
      transition-all duration-300
      relative group
      hover:-translate-y-1.5 
      hover:border-brand-dark-green/50
    `}>
      {project.isFlagship && (
        <div className="absolute top-0 -left-0.5">
          <div className="bg-brand-green text-white font-bold text-xs uppercase tracking-wider px-4 py-1.5 rounded-br-lg rounded-tl-lg">
            Flagship Project
          </div>
        </div>
      )}
      
      <h3 className="text-xl font-bold text-text mt-2">{project.name}</h3>
      <p className="text-muted/80 text-sm leading-relaxed flex-grow">
        {project.description}
      </p>
      
    </div>
  );
  
  return project.url && project.url !== '#' ? (
    <a href={project.url} target="_blank" rel="noopener noreferrer" className={`block h-full ${className}`}>
      <CardContent />
    </a>
  ) : (
    <div className={`h-full ${className}`}>
      <CardContent />
    </div>
  );
};

export default ProjectCard;
