
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className, ...props }) => {
  const baseClasses = 'px-6 py-2.5 font-bold rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-4';

  const variantClasses = {
    primary: 'bg-brand-green text-background hover:bg-opacity-90 focus:ring-brand-green/50',
    secondary: 'bg-transparent border-2 border-subtle text-muted hover:border-text hover:text-text focus:ring-subtle',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
