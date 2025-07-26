
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark-green text-surface/70 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative flex flex-col sm:flex-row justify-between items-center gap-y-4">
          
          {/* Copyright */}
          <div className="text-sm text-center sm:text-left order-2 sm:order-1">
            <p>&copy; 2025. All rights reserved.</p>
          </div>

          {/* Brand Name */}
          <div className="text-center order-1 sm:order-2 sm:absolute sm:left-1/2 sm:-translate-x-1/2">
            <span className="font-cursive text-3xl text-white">Seven Layer Labs</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-x-6 text-sm order-3">
            <a href="/tos.html" className="hover:text-white transition-colors duration-200">Terms of Service</a>
            <a href="/privacy.html" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
