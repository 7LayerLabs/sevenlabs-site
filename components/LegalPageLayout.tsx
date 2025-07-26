
import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LegalPageLayoutProps {
  children: React.ReactNode;
  title: string;
  lastUpdated: string;
}

const LegalPageLayout: React.FC<LegalPageLayoutProps> = ({ children, title, lastUpdated }) => {
  return (
    <div className="bg-background min-h-screen text-text font-sans flex flex-col">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(#E5E7EB_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 flex-grow">
        <div className="max-w-4xl mx-auto bg-surface/90 backdrop-blur-sm p-8 sm:p-12 rounded-lg border border-subtle shadow-md">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-text mb-2">{title}</h1>
          <p className="text-muted mb-8 border-b border-subtle pb-6">Last Updated: {lastUpdated}</p>
          <div className="space-y-6 text-base leading-relaxed text-muted/90">
             {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LegalPageLayout;
