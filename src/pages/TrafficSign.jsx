import "../styles/project.css";

export default function TrafficSign() {
  return (
    <div className="project-page">

      <h1 className="project-title">
        Traffic Sign Recognition
      </h1>

      <div className="project-content">

        {/* SCREENSHOT */}

        <div className="project-image">
          <img
            src="/tsr.png"
            alt="Traffic Sign Recognition"
          />
        </div>

        {/* OVERVIEW CARD */}

        <div className="detail-card">

          <h2>Overview</h2>

          <span className="detail-tag">
            Deep Learning
          </span>

          <p>
            Traffic Sign Recognition is a computer vision and deep
            learning project designed to automatically identify and
            classify road traffic signs from images. A convolutional
            neural network (CNN) was trained on labeled traffic sign
            datasets to recognize speed limits, warning signs,
            directional indicators, and other roadway signage with
            high accuracy.
          </p>

          <h3>Tech Stack</h3>

          <p>
            Python • TensorFlow • Keras • OpenCV • CNN
          </p>

        </div>

        {/* GITHUB CARD */}

        <div className="detail-card github-card">

          <h2>Source Code</h2>

          <p>
            View the complete repository on GitHub.
          </p>

          <a
            href="https://github.com/Kevinwilson1032/Traffic-sign-Recognition-"
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