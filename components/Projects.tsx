'use client';

import { useState } from "react";
import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const categories = ["All", "Food", "Finance", "Family", "Tools"];

export default function Projects() {
  const [selected, setSelected] = useState("All");
  const filtered = selected === "All" ? projects : projects.filter(p => p.category === selected);

  return (
    <section className="py-20 bg-white text-black">
      <motion.h2
        className="text-3xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Featured Builds
      </motion.h2>
      <div className="flex justify-center mb-8 gap-2 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-4 py-2 rounded-full font-semibold border transition-all ${selected === cat ? "bg-[#00B86B] text-white border-[#00B86B]" : "bg-zinc-100 text-gray-700 border-zinc-300 hover:bg-[#2ECC71] hover:text-white"}`}
          >
            {cat}
          </button>
        ))}
      </div>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        {filtered.map(project => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </motion.div>
    </section>
  );
} 