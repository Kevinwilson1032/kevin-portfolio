import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/chicago.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="relative z-10 text-center"
      >
        <h1 className="text-7xl font-bold text-white">
          Kevin Wilson
        </h1>

        <p className="text-2xl mt-4 text-cyan-400">
          Healthcare IT • Epic • AI • Analytics
        </p>

        <p className="text-slate-300 mt-6 max-w-2xl">
          Building healthcare technology, AI applications,
          and data-driven solutions.
        </p>

        <a
          href="#projects"
          className="inline-block mt-8 bg-cyan-500 px-6 py-3 rounded-xl"
        >
          View Projects
        </a>
      </motion.div>
    </section>
  );
}