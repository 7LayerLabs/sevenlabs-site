
import React from 'react';
import type { Layer } from '../types';

interface LayerCardProps {
  layer: Layer;
}

const LayerCard: React.FC<LayerCardProps> = ({ layer }) => {
  return (
    <div className={`
      bg-surface p-6 rounded-xl 
      border border-subtle 
      flex flex-col gap-4 
      transition-all duration-300 
      hover:-translate-y-1.5 
      ${layer.colorClass}
      hover:border-current
    `}>
      <div className="flex items-center gap-4">
        <div className={`flex-shrink-0`}>
          {layer.icon}
        </div>
        <div>
          <span className="font-mono text-sm font-bold text-muted">LAYER {layer.id}</span>
          <h3 className="text-xl font-bold text-text">{layer.name}</h3>
        </div>
      </div>
      <p className="font-medium text-muted">{layer.subtitle}</p>
      <p className="text-muted/80 text-sm leading-relaxed">
        {layer.description}
      </p>
    </div>
  );
};

export default LayerCard;