import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'lg' }) => {
  const sizeConfig = {
    sm: {
      svg: 'h-10 w-auto',
      text: 'text-xl/tight font-bold text-text tracking-tighter',
      gap: 'gap-x-3',
    },
    lg: {
      svg: 'h-24 w-auto',
      text: 'text-3xl/tight sm:text-4xl/tight font-bold text-text tracking-tighter',
      gap: 'gap-x-4',
    },
  };

  const current = sizeConfig[size];

  return (
    <div role="img" aria-label="Seven Layer Labs" className={`inline-flex items-center ${current.gap} ${className}`}>
      <div className="flex-shrink-0" aria-hidden="true">
        <svg
          className={current.svg}
          viewBox="-36 -5 115 136"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="fill-brand-dark-green">
            {/* Top bar */}
            <rect x="0" y="0" width="22" height="22" />
            <rect x="26" y="0" width="22" height="22" />
            <rect x="52" y="0" width="22" height="22" />
            {/* Slanted bar */}
            <path d="M52 26 L74 26 L52 48 L30 48 Z" />
            <path d="M30 52 L52 52 L30 74 L8 74 Z" />
            <path d="M8 78 L30 78 L8 100 L-14 100 Z" />
            <path d="M-14 104 L8 104 L-14 126 L-36 126 Z" />
          </g>
        </svg>
      </div>
      <div className="flex flex-col justify-center text-left" aria-hidden="true">
        <span className={current.text}>Seven</span>
        <span className={current.text}>Layer</span>
        <span className={current.text}>Labs</span>
      </div>
    </div>
  );
};

export default Logo;