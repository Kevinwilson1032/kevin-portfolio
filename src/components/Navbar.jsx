import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link
          to="/"
          className="text-2xl font-bold text-white"
        >
          Kevin Wilson
        </Link>

        <div className="flex gap-8">

          <a
            href="#projects"
            className="text-white hover:text-cyan-400"
          >
            Projects
          </a>

          <a
            href="/Kevin_Wilson_Resume.pdf"
            target="_blank"
            className="text-white hover:text-cyan-400"
          >
            Resume
          </a>

        </div>

      </div>

    </nav>
  );
}