'use client';

export default function Footer() {
  return (
    <>
      {/* Wavy Top Divider for Footer */}
      <div className="relative">
        <svg className="absolute -top-1 left-0 w-full" viewBox="0 0 1440 100">
          <path
            fill="#F7F7F7"
            d="M0,0 C360,80 1080,80 1440,0 L1440,100 L0,100 Z"
          ></path>
        </svg>
      </div>
      <footer className="py-10 bg-background-light text-center text-text-muted text-sm relative z-10">
        <p>Seven kids. Seven layers. Infinite builds.</p>
        <div className="mt-4 space-x-4">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Projects</a>
          <a href="#" className="hover:underline">Framework</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </footer>
    </>
  );
} 