import React from 'react';
import type { Layer, Project, NavLayer, Tech } from './types';

// New Icons for the 7-Layer Framework
const ProblemIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
);

const PeopleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);

const PurposeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
);

const ProductIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" x2="12" y1="22.08" y2="12"/></svg>
);

const ProcessIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
);

const PerformanceIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
);

const ProfitIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
);

// Tech Stack Icons
const NextjsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="64" cy="64" r="64" fill="black"/>
    <path d="M98.75 42.125L64 96L29.25 42.125H47.5V32.25H80.5V42.125H98.75Z" fill="white"/>
    <path d="M80.5 42.125V86.125H92.75V42.125H80.5Z" fill="white"/>
  </svg>
);
const TypescriptIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="128" height="128" rx="32" fill="#3178C6"/>
    <path d="M36 31H92V46H69.5V88H54.5V46H36V31Z" fill="white"/>
    <path d="M64 56H95V71H80V100H64V56Z" fill="white" fillOpacity="0.8"/>
  </svg>
);
const TailwindIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M16 4C9.37 4 4 9.37 4 16C4 22.63 9.37 28 16 28C22.63 28 28 22.63 28 16C28 9.37 22.63 4 16 4ZM10.23 13.92C10.23 12.2 11.53 10.9 13.25 10.9C14.97 10.9 16.27 12.2 16.27 13.92C16.27 15.63 14.97 16.93 13.25 16.93C11.53 16.93 10.23 15.63 10.23 13.92ZM19.77 13.92C19.77 12.2 21.07 10.9 22.79 10.9C24.51 10.9 25.81 12.2 25.81 13.92C25.81 15.63 24.51 16.93 22.79 16.93C21.07 16.93 19.77 15.63 19.77 13.92Z" fill="#38BDF8"/>
  </svg>
);
const NodejsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.33.341l-9.44 5.51v11.3l9.44 5.51 9.439-5.51V5.851L12.33.34zm6.68 15.54l-6.68 3.89-6.68-3.89V6.89l6.68-3.89 6.68 3.89v8.99z" fill="#8CC84B"/>
    <path d="M12.18 8.01c-1.6 0-2.45.69-3.03 1.15l1.01.81c.33-.29.83-.69 1.56-.69.86 0 1.5.5 1.5 1.2s-.5 1.3-1.8 1.8c-1.8.69-2.9 1.4-2.9 3.01h8.5v-1.8H9.3c.1-.8.6-1.3 2.1-1.8 1.6-.5 2.5-1.4 2.5-2.7s-1.3-2.7-3.22-2.7z" fill="#8CC84B"/>
  </svg>
);
const PostgresqlIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24.01 4C12.97 4 4 12.97 4 24.01 4 35.03 12.97 44 24.01 44c11.04 0 20-8.97 20-19.99S35.05 4 24.01 4z" fill="#336791"/>
    <path d="M25.32 10.21h-5.07v23.58h5.07c6.12 0 10.39-3.94 10.39-9.52v-4.54c0-5.58-4.27-9.52-10.39-9.52zm-1.63 3.4h1.21c3.27 0 5.18 1.7 5.18 4.38v4.54c0 2.68-1.91 4.38-5.18 4.38h-1.21v-13.3zM16.97 10.21H11.9v23.58h5.07V10.21z" fill="#fff"/>
  </svg>
);
const PrismaIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 296" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M128 295.42L255.5 221.72V74.32L128 0 .5 74.32v147.4L128 295.42z" fill="#2D3748"/>
    <path d="M128 295.42L.5 221.72V74.32L128 148.02v147.4z" fill="#1B222E"/>
    <path d="M128 0l127.5 73.7v2L128 1.4.5 75.7v-2L128 0z" fill="#fff" opacity=".1"/>
    <path d="M.5 74.32l127.5 73.7 127.5-73.7-127.5-73.7L.5 74.32z" fill="#fff"/>
    <path d="M.5 74.32L128 148.02l-127.5-36.85V74.32z" fill="#E2E8F0"/>
  </svg>
);
const VercelIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 128 111" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M64 0L128 110.85H0L64 0Z" fill="black"/>
  </svg>
);
const SupabaseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M117.33 58.67c0 35.34-22.66 48-50.66 58.66C38 106.67 24 100.67 10.67 89.34 4.37 84.04 1.25 78.21 2.67 72A64.1 64.1 0 0110.67 48C18.67 26.67 36.67 16 64 10.67 92.67 4 117.33 23.33 117.33 58.67z" fill="#3ECF8E"/>
    <path d="M64 10.67C36.67 16 18.67 26.67 10.67 48A64.1 64.1 0 012.67 72c6.67-21.33 18.67-34.66 38.66-41.33S85.33 26 96 46.67c12 24-8 54.66-42.67 59.33-16.15 2.15-29.8-3.52-37.33-10.67C22.67 88 29.33 76 42.67 69.33 60 60.67 80.67 60 85.33 46.67 88 40 82.67 33.33 76 32c-9.33-2-21.33 6.67-25.33 14.67" fill="#3ECF8E"/>
    <path d="M64 10.67c28.67-6.67 53.33 12.66 53.33 48 0 35.34-22.66 48-50.66 58.66C38 106.67 24 100.67 10.67 89.34-1.33 76.67 13.33 49.33 42.67 42.67 64 37.33 74.67 28 64 10.67z" fill="#000" fillOpacity=".2"/>
  </svg>
);
const TRPCIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="128" cy="128" r="128" fill="#2596BE"/>
      <path d="M109.568 76.224H86.72V179.776H109.568V140.224H129.6V120.448H109.568V100H132.8V80.224H109.568V76.224Z" fill="white"/>
      <path d="M148.672 136.64V179.776H169.344V136.64H148.672ZM148.672 80H169.344V121.728H148.672V80Z" fill="white"/>
    </svg>
);


export const LAYERS_DATA: Layer[] = [
  {
    id: '01',
    name: 'Problem',
    subtitle: 'What real issue are we solving?',
    description: 'We start by defining a clear, compelling problem. A great product is a solution to a real-world pain point, not just a cool idea.',
    colorClass: 'text-brand-orange',
    borderColorClass: 'border-l-brand-orange',
    icon: <ProblemIcon className="h-8 w-8" />,
  },
  {
    id: '02',
    name: 'People',
    subtitle: 'Who needs this and why?',
    description: 'Understanding the target audience is crucial. We create detailed user personas to ensure we\'re building for people, not just for ourselves.',
    colorClass: 'text-brand-sky',
    borderColorClass: 'border-l-brand-sky',
    icon: <PeopleIcon className="h-8 w-8" />,
  },
  {
    id: '03',
    name: 'Purpose',
    subtitle: 'The core value proposition.',
    description: 'What is the unique value we offer? This layer crystallizes the "why" — the mission and vision that drive the project forward.',
    colorClass: 'text-brand-yellow',
    borderColorClass: 'border-l-brand-yellow',
    icon: <PurposeIcon className="h-8 w-8" />,
  },
  {
    id: '04',
    name: 'Product',
    subtitle: 'What we are actually building.',
    description: 'This is the tangible solution—the features, functionality, and design that bring the idea to life as a usable and delightful product.',
    colorClass: 'text-brand-blue',
    borderColorClass: 'border-l-brand-blue',
    icon: <ProductIcon className="h-8 w-8" />,
  },
  {
    id: '05',
    name: 'Process',
    subtitle: 'How it works and the user experience.',
    description: 'We map out the user journey and system architecture. The goal is an intuitive, seamless experience from start to finish.',
    colorClass: 'text-brand-red',
    borderColorClass: 'border-l-brand-red',
    icon: <ProcessIcon className="h-8 w-8" />,
  },
  {
    id: '06',
    name: 'Performance',
    subtitle: 'Metrics, scalability, and optimization.',
    description: 'How do we measure success? This layer focuses on key performance indicators (KPIs), technical stability, and continuous improvement.',
    colorClass: 'text-brand-purple',
    borderColorClass: 'border-l-brand-purple',
    icon: <PerformanceIcon className="h-8 w-8" />,
  },
  {
    id: '07',
    name: 'Profit',
    subtitle: 'Business model and sustainability.',
    description: 'A successful project needs a viable business model. We define revenue streams and financial goals to ensure long-term sustainability.',
    colorClass: 'text-brand-green',
    borderColorClass: 'border-l-brand-green',
    icon: <ProfitIcon className="h-8 w-8" />,
  },
];

export const NAV_LAYERS_DATA: NavLayer[] = LAYERS_DATA.map(layer => ({
    id: layer.id,
    navLabel: layer.name,
    title: `Layer ${layer.id}: ${layer.name}`,
    description: `${layer.subtitle} ${layer.description}`,
    colorClass: layer.colorClass,
    icon: layer.icon,
}));

export const PROJECTS_DATA: Project[] = [
  {
    id: 'proj-1',
    name: 'Menu Sparks',
    description: 'Get chef-driven specials from what you already have in stock—complete with costing, menu descriptions, and social media captions. Used by 50+ restaurants to generate over 1,200 unique specials.',
    url: 'https://www.menusparks.com',
    isFlagship: true,
  },
  {
    id: 'proj-2',
    name: 'The Pour Plan',
    description: 'Like a mixologist on call for any mix of drinks, any theme any style of restaurant, bar, tavern or watering hole. Currently in beta with 10 local bars.',
    url: '#',
  },
  {
    id: 'proj-5',
    name: 'Meet The Feed',
    description: 'A site where we find followers without the algos, based on personal or business, specific categories. Now indexing over 10,000 niche accounts.',
    url: '#',
  },
  {
    id: 'proj-3',
    name: 'Pass The Eval',
    description: 'Teaching about the prop firm business, how to pass it and be profitable. Over 200 members in the community and a 78% success rate.',
    url: '#',
  },
  {
    id: 'proj-4',
    name: 'Zach n Zoey',
    description: 'A fun kids line of clothing, stories and toys based on my two youngest kids (Zachary 6 months old the calm, and Zoey 4 years old the storm). First book sold over 500 copies.',
    url: '#',
  },
];

export const TECH_STACK_DATA: Tech[] = [
  {
    name: 'Next.js',
    description: 'A React framework for building fast, user-friendly web applications. Perfect for a dashboard like MenuSpark.',
    category: 'Frontend',
    icon: <NextjsIcon className="w-8 h-8" />,
  },
  {
    name: 'TypeScript',
    description: 'Adds safety and predictability to our code, reducing bugs.',
    category: 'Frontend',
    icon: <TypescriptIcon className="w-8 h-8" />,
  },
  {
    name: 'Tailwind CSS',
    description: 'Allows for rapid and clean user interface design.',
    category: 'Frontend',
    icon: <TailwindIcon className="w-8 h-8" />,
  },
  {
    name: 'Node.js',
    description: 'The runtime environment to execute our JavaScript/TypeScript code on the server.',
    category: 'Backend',
    icon: <NodejsIcon className="w-8 h-8" />,
  },
  {
    name: 'Prisma',
    description: 'A modern database toolkit that makes it easy and safe for our app to talk to the PostgreSQL database.',
    category: 'Backend',
    icon: <PrismaIcon className="w-8 h-8" />,
  },
  {
    name: 'tRPC',
    description: "The missing piece for end-to-end type safety. It creates a seamless, automatically type-safe API between our Next.js frontend and Node.js backend.",
    category: 'Backend',
    icon: <TRPCIcon className="w-8 h-8" />,
  },
  {
    name: 'PostgreSQL',
    description: 'A powerful and reliable database for storing all our data (e.g., menu items, user info, trading data).',
    category: 'Infrastructure & Data',
    icon: <PostgresqlIcon className="w-8 h-8" />,
  },
  {
    name: 'Vercel',
    description: 'The best platform for deploying and hosting our Next.js frontend and serverless backend functions.',
    category: 'Infrastructure & Data',
    icon: <VercelIcon className="w-8 h-8" />,
  },
  {
    name: 'Supabase',
    description: 'Provides our hosted PostgreSQL database and handles things like user authentication.',
    category: 'Infrastructure & Data',
    icon: <SupabaseIcon className="w-8 h-8" />,
  },
];