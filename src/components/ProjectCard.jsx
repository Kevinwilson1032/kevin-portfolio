import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProjectCard({
  title,
  description,
  icon,
  link,
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -10,
      }}
      className="bg-slate-900 rounded-2xl p-8 border border-slate-800"
    >
      <div className="text-5xl mb-4">
        {icon}
      </div>

      <h3 className="text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="text-slate-400 mt-3">
        {description}
      </p>

      <Link
        to={link}
        className="inline-block mt-6 text-cyan-400"
      >
        Learn More →
      </Link>
    </motion.div>
  );
}