import "../styles/project.css";

export default function FingerVolume() {
  return (
    <div className="project-page">

      <h1 className="project-title">
        Gesture Volume Control
      </h1>

      <div className="project-content">

        {/* VIDEO */}

        <div className="project-video">
          <iframe
            src="https://www.youtube.com/embed/FHF1Fmqv8dU"
            title="Gesture Volume Control Demo"
            allowFullScreen
          ></iframe>
        </div>

        {/* OVERVIEW CARD */}

        <div className="detail-card">

          <h2>Overview</h2>

          <span className="detail-tag">
            Computer Vision
          </span>

          <p>
            Gesture Volume Control is a computer vision application
            built using Python, OpenCV, MediaPipe, and Pycaw.
            The system tracks hand landmarks through a webcam
            and maps the distance between the thumb and index finger
            to system volume levels, enabling touchless audio control.
          </p>

          <h3>Tech Stack</h3>

          <p>
            Python • OpenCV • MediaPipe • Pycaw
          </p>

        </div>

        {/* GITHUB CARD */}

        <div className="detail-card github-card">

          <h2>Source Code</h2>

          <p>
            View the complete repository on GitHub.
          </p>

          <a
            href="https://github.com/Kevinwilson1032/Volume-Finger-Control"
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