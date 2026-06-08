import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">

      <div className="max-w-7xl mx-auto px-6 py-10 text-center">

        <h3 className="text-xl font-bold text-white">
          Kevin Wilson
        </h3>

        <div className="flex justify-center gap-6 mt-6">

          <a
            href="mailto:kevinwilson1032@gmail.com"
            className="text-white text-2xl"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://linkedin.com/in/kevinwilson1032"
            target="_blank"
            rel="noreferrer"
            className="text-white text-2xl"
          >
            <FaLinkedin />
          </a>

        </div>

        <p className="text-slate-400 mt-6">
          Healthcare IT • Data Analytics • AI
        </p>

      </div>

    </footer>
  );
}