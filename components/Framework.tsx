'use client';

import React from "react";
import { layers } from "@/lib/layers";
import FrameworkTile from "./FrameworkTile";

export default function Framework() {
  return (
    <section className="py-20 bg-background-dark text-white relative">
      <h2 className="text-3xl font-bold text-center mb-10">The Seven Layers of Every Great Build</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {layers.map((layer) => (
          <FrameworkTile key={layer.number} layer={layer} />
        ))}
      </div>
      <div className="absolute left-0 bottom-0 w-full overflow-hidden leading-none">
        <svg className="w-full h-16" viewBox="0 0 1440 320">
          <path
            fill="#F7F7F7"
            fillOpacity="1"
            d="M0,160L60,165.3C120,171,240,181,360,165.3C480,149,600,107,720,122.7C840,139,960,213,1080,234.7C1200,256,1320,224,1380,208L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
} 