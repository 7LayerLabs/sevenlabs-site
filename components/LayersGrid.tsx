
import React, { useState } from 'react';
import { LAYERS_DATA } from '../constants';

const ChevronDownIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const LayersGrid: React.FC = () => {
  const [activeLayerId, setActiveLayerId] = useState<string | null>('01'); // Start with the first layer open

  const handleToggle = (id: string) => {
    setActiveLayerId(activeLayerId === id ? null : id);
  };

  return (
    <section id="layers" className="py-16 sm:py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-text">
          The 7-Layer Framework
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted text-lg">
          Each layer is a modular block in a repeatable system. Expand each one to see how ideas are built to last.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col gap-3">
          {LAYERS_DATA.map((layer) => {
            const isActive = activeLayerId === layer.id;
            return (
              <div
                key={layer.id}
                className={`
                  bg-surface rounded-lg 
                  border border-l-4
                  transition-all duration-300
                  ${isActive ? 'shadow-lg' : 'shadow-sm hover:shadow-md'}
                  ${isActive ? layer.borderColorClass : 'border-subtle border-l-transparent'}
                `}
              >
                <button
                  id={`layer-header-${layer.id}`}
                  onClick={() => handleToggle(layer.id)}
                  className="w-full text-left p-4 pr-12 relative group"
                  aria-expanded={isActive}
                  aria-controls={`layer-content-${layer.id}`}
                >
                  <div className="flex items-center gap-4">
                     <span className={`font-mono text-xl font-bold ${layer.colorClass}`}>{layer.id}</span>
                     <div className={`flex-shrink-0 ${layer.colorClass} group-hover:scale-110 transition-transform`}>
                       {React.cloneElement(layer.icon, { className: 'h-6 w-6' })}
                    </div>
                    <h3 className="text-xl font-bold text-text">{layer.name}</h3>
                  </div>
                   <ChevronDownIcon className={`absolute right-4 top-1/2 -translate-y-1/2 h-6 w-6 text-muted transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`} />
                </button>

                <div
                  id={`layer-content-${layer.id}`}
                  role="region"
                  aria-labelledby={`layer-header-${layer.id}`}
                  className={`
                    overflow-hidden
                    transition-[max-height,opacity] duration-500 ease-in-out
                    ${isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                  `}
                >
                  <div className="px-5 pb-5 pt-1 text-muted/90">
                     <p className="font-medium text-text/80 italic">{layer.subtitle}</p>
                     <p className="mt-2 text-base leading-relaxed">
                       {layer.description}
                     </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LayersGrid;