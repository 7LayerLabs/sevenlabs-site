import React from 'react';

// A decorative illustration representing the "Seven Layers" concept.
const StoryOfSevenIllustration: React.FC = () => (
    <div aria-hidden="true" className="flex justify-center items-center">
        <svg className="w-full h-auto max-w-[240px] md:max-w-full" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g transform="rotate(-8 120 120) translate(0, 10)">
            {/* Layer 1: Problem (Orange) */}
            <rect x="60" y="195" width="120" height="22" rx="5" fill="#D97706" className="opacity-80"/>
            {/* Layer 2: People (Sky) */}
            <rect x="65" y="169" width="110" height="22" rx="5" fill="#0891B2" className="opacity-80"/>
            {/* Layer 3: Purpose (Yellow) */}
            <rect x="70" y="143" width="100" height="22" rx="5" fill="#CA8A04" className="opacity-80"/>
            {/* Layer 4: Product (Blue) */}
            <rect x="75" y="117" width="90" height="22" rx="5" fill="#2563EB" className="opacity-80"/>
            {/* Layer 5: Process (Red) */}
            <rect x="80" y="91" width="80" height="22" rx="5" fill="#DC2626" className="opacity-80"/>
            {/* Layer 6: Performance (Purple) */}
            <rect x="85" y="65" width="70" height="22" rx="5" fill="#9333EA" className="opacity-80"/>
            {/* Layer 7: Profit (Green) */}
            <rect x="90" y="39" width="60" height="22" rx="5" fill="#059669" className="opacity-80"/>
          </g>
        </svg>
    </div>
);


const About: React.FC = () => {
  const handleScrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 items-center">
        <div className="md:col-span-1">
            <StoryOfSevenIllustration />
        </div>
        <div className="md:col-span-2 text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-text mb-8">
            The Story of Seven
          </h2>
          <div className="space-y-6 text-muted text-lg leading-relaxed">
            <p>
              I’m Derek—a systems thinker, serial builder, and dad of seven. That number isn’t just personal—it’s foundational. Every project I touch follows a repeatable, layered process grounded in the same principle: start with clarity, finish with impact.
            </p>
            <p>
              That process is the <strong>7-Layer Framework</strong>—a method I’ve developed across restaurants, trading desks, brands, and AI experiments. It flows from identifying the core <span className="font-bold text-brand-orange/90">Problem</span>, to solving it for specific <span className="font-bold text-brand-sky/90">People</span>, defining a <span className="font-bold text-brand-yellow/90">Purpose</span>, building the right <span className="font-bold text-brand-blue/90">Product</span>, crafting a smart <span className="font-bold text-brand-red/90">Process</span>, tracking <span className="font-bold text-brand-purple/90">Performance</span>, and ensuring lasting <span className="font-bold text-brand-green/90">Profit</span>.
            </p>
            <p>
              Seven Layer Labs isn’t just my sandbox—it’s a methodology made for many. Dive into the system, see it in action, or let’s apply it to your idea. Got a spark?{' '}
              <button 
                onClick={() => handleScrollTo('contact')} 
                className="font-bold text-brand-sky hover:text-brand-sky/80 transition-colors duration-200 underline underline-offset-4 decoration-brand-sky/50 hover:decoration-brand-sky/80"
              >
                Let's build something together.
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;