'use client';

export default function CTA() {
  return (
    <>
      {/* Wavy Top Divider for CTA */}
      <div className="relative">
        <svg className="absolute -top-1 left-0 w-full" viewBox="0 0 1440 100">
          <path
            fill="#ffffff"
            d="M0,0 C360,80 1080,80 1440,0 L1440,100 L0,100 Z"
          ></path>
        </svg>
      </div>
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white text-center relative z-10">
        <h2 className="text-3xl font-bold">Want to Build Together?</h2>
        <p className="mt-2 text-lg">Got an idea? Let’s turn it into a layered build.</p>
        <div className="mt-6 space-x-4">
          <button className="px-5 py-3 bg-white text-primary font-semibold rounded hover:bg-accent transition">
            Let’s Collaborate
          </button>
          <button className="px-5 py-3 bg-zinc-800 text-white font-semibold rounded hover:bg-zinc-700 transition">
            Download Template
          </button>
        </div>
      </section>
    </>
  );
} 