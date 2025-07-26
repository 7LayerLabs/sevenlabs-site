import type { ReactElement, SVGProps } from 'react';

export interface Layer {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  colorClass: string;
  borderColorClass: string;
  icon: ReactElement<SVGProps<SVGSVGElement>>;
}

export interface NavLayer {
  id:string;
  navLabel: string;
  title: string;
  description: string;
  colorClass: string;
  icon: ReactElement<SVGProps<SVGSVGElement>>;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  url?: string;
  isFlagship?: boolean;
}

export interface Tech {
  name: string;
  description: string;
  category: 'Frontend' | 'Backend' | 'Infrastructure & Data';
  icon: ReactElement<SVGProps<SVGSVGElement>>;
}