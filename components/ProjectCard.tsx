import { motion } from "framer-motion";

interface Project {
  name: string;
  description: string;
  category: string;
  link: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      className="bg-white hover:bg-primary-light text-text-base p-6 rounded-xl shadow hover:shadow-xl transition-all flex flex-col h-full"
      whileHover={{ scale: 1.03 }}
    >
      <div className="flex-1">
        <h3 className="text-xl font-bold mb-2">{project.name}</h3>
        <span className="inline-block bg-primary text-white text-xs px-2 py-1 rounded mb-2">{project.category}</span>
        <p className="text-text-muted text-sm mb-4">{project.description}</p>
      </div>
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-auto inline-block px-4 py-2 bg-primary text-white rounded font-semibold hover:bg-primary-dark transition">Visit</a>
    </motion.div>
  );
} 