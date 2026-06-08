import "../styles/project.css";

export default function FitnessCoach() {
  return (
    <div className="project-page">

      <h1 className="project-title">
        Fitness Coach AI
      </h1>

      <div className="project-content">

        {/* video */}

        <div className="project-video">
          <iframe
            src="https://www.youtube.com/embed/vTqIERZcFJQ"
            title="Fitness Coach AI Demo"
            allowFullScreen
          ></iframe>
        </div>

        {/* OVERVIEW CARD */}

        <div className="detail-card">

          <h2>Overview</h2>

          <span className="detail-tag">
            AI Application
          </span>

          <p>
            Fitness Coach AI is an AI-powered fitness assistant
            designed to generate personalized workout recommendations
            based on user goals and preferences. The application
            demonstrates how artificial intelligence can be used
            to support workout planning, exercise guidance, and
            fitness tracking through an intuitive user interface.
            this AI is built as a full-stack web application 
            using Next.js and React with TypeScript for type-safe development.
            The frontend provides a guided workout-planning experience
            where users select their fitness goals, experience level, 
            available equipment,and training frequency. 
            User interactions are managed through React state
            and rendered with a responsive interface styled using Tailwind CSS.
            When a user requests a workout plan or sends a chat message,
            the frontend makes a POST request to a custom API route built 
            with Next.js Route Handlers.
            The backend formats the request as a prompt for our LLM or API.
          </p>

          <h3>Tech Stack</h3>

          <p>
           Next.js • React • TypeScript • Tailwind CSS • API •  LLM • Git • GitHub
          </p>

        </div>

        {/* GITHUB CARD */}

        <div className="detail-card github-card">

          <h2>Source Code</h2>

          <p>
            View the complete repository on GitHub.
          </p>

          <a
            href="https://github.com/Kevinwilson1032/fitness-coach-ai"
            target="_blank"
            rel="noreferrer"
            className="github-link"
          >
            View GitHub Repository
          </a>

        </div>

      </div>

    </div>
  );
}