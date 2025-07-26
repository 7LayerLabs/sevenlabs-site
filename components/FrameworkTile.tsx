import React from "react";

interface Layer {
  number: string;
  title: string;
  description: string;
}

export default function FrameworkTile({ layer }: { layer: Layer }) {
  return (
    <div className="bg-zinc-800 hover:bg-green-700 p-6 rounded-xl transition-all">
      <h3 className="text-xl font-bold text-white">{layer.number} - {layer.title}</h3>
      <p className="text-sm text-gray-300 mt-2">{layer.description}</p>
    </div>
  );
} 