import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* ================= DOCK ================= */}

      <div className="dock">
        <a
          className="dock-item"
          href="https://www.linkedin.com/in/kevinwilson1032"
          target="_blank"
          rel="noreferrer"
        >
          in
        </a>

        <a
          className="dock-item"
          href="mailto:kevinwilson1032@gmail.com"
        >
          @
        </a>

        <a
          className="dock-item"
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
        >
          gh
        </a>
      </div>

      {/* ================= HERO ================= */}

      <section className="hero">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <div className={`profile ${scrolled ? "hide" : ""}`}>
  <img src="/profile.jpg" alt="Kevin Wilson" />
</div>

<div className="name-row">
  <img
    src="/trinity-health-logo.png"
    alt="Trinity Health"
    className="company-logo"
  />

  <h1 className="glass-title hero-name">
    Kevin Wilson
  </h1>

  <img
    src="/deloitte-logo.png"
    alt="Deloitte"
    className="company-logo"
  />
</div>
          <div className="hero-badges">
            <span className="hero-badge">Healthcare IT</span>
            <span className="hero-badge">Epic Systems</span>
            <span className="hero-badge">AI</span>
            <span className="hero-badge">Data Analytics</span>
          </div>

          <p className="subtext">
            Computer Engineer specializing in Data Analytics and Information Management. 
            ISTQB-certified professional developer with experience supporting complex tech projects and data-driven collaboration. 
            Experienced team with globally recognized organizations including Deloitte and Trinity Health.
          </p>
        </div>
      </section>

      {/* ================= ABOUT ================= */}

      <section className="about-section">
        <div className="about-card">
          <h2 className="glass-title section-heading">
            About Me
          </h2>

         <p>
         Engineer. Analyst. Mentor. Problem Solver.
        </p>

        <p>
          I specialize in complex information management using new technology.
          My experience spans healthcare IT, enterprise knowledge management, data
          analytics, artificial intelligence, team building, and machine learning.
          Having contributed to initiatives at Deloitte and Trinity Health, I've developed a passion for
          optimmization of technology that empower people and improve decision-making.
        </p>
        </div>
      </section>
      <section className="experience-section">
  <h2 className="glass-title section-heading">
    Experience
  </h2>
    {/*==EXPERIENCE==*/}
  <div className="timeline">
    <div className="timeline-card">
      <h3>Deloitte</h3>
      <p>
        Supported enterprise knowledge management initiatives,
        analytics solutions, ServiceNow optimization, and
        large-scale learning platforms.
      </p>
    </div>

    <div className="timeline-card">
      <h3>Trinity Health</h3>
      <p>
        Supported TogetherCare Epic implementations,
        physician onboarding, workflow optimization,
        and healthcare technology adoption.
      </p>
    </div>
  </div>
</section>
<section className="skills-section">
  <h2 className="glass-title section-heading">
    Technical Skills
  </h2>
{/*==skills==*/}
  <div className="skills-grid">
    <span className="skill">Python</span>
    <span className="skill">React</span>
    <span className="skill">JavaScript</span>
    <span className="skill">SQL</span>
    <span className="skill">Power BI</span>
    <span className="skill">Machine Learning</span>
    <span className="skill">Computer Vision</span>
    <span className="skill">AI</span>
    <span className="skill">ServiceNow</span>
    <span className="skill">SharePoint</span>
    <span className="skill">SalesForce</span>
    <span className="skill">EPIC</span>
  </div>
</section>
{/*certifications*/}
<section className="cert-section">
  <h2 className="glass-title section-heading">
    Certifications
  </h2>

  <div className="cert-grid">

    <div className="project-card">
      <img
        src="/istqb.png"
        alt="ISTQB Certified Tester"
        className="cert-image"
      />
      <h3>ISTQB Certified Tester
        Foundation Level v4.0
      </h3>
      <p>
        International Software Testing Qualifications Board
      </p>
    </div>
    <div className="project-card">
      <img
        src="/mic.png"
        alt="Certificate"
        className="cert-image"
      />
      <h3>Programming for Everybody</h3>
      <p>
        University of Michigan
      </p>
    </div>
    <div className="project-card">
      <img
        src="/kennesaw.png"
        alt="Certificate"
        className="cert-image"
      />
      <h3>Cybersecurity and Its Ten Domains</h3>
      <p>
        Kennesaw State university
      </p>
    </div>

    <div className="project-card">
      <img
        src="/ucsan.png"
        alt="Certificate"
        className="cert-image"
      />
      <h3>Introduction to Big Data</h3>
      <p>
        University of California San Diego
      </p>
    </div>

    <div className="project-card">
      <img
        src="/learnq.png"
        alt="Certificate"
        className="cert-image"
      />
      <h3>Cloud Computing Basics</h3>
      <p>
        LearnQuest
      </p>
    </div>

    <div className="project-card">
      <img
        src="/google.png"
        alt="Certificate"
        className="cert-image"
      />
      <h3>Technical Support Fundamentals</h3>
      <p>
        Google
      </p>
    </div>

  </div>
</section>

      {/* ================= PROJECTS ================= */}

      <section className="projects-section">
        <div className="section-title">
          <h2 className="glass-title section-heading">
            Featured Projects
          </h2>
        </div>

        <div className="project-grid">

          <Link
            to="/projects/finger-volume-control"
            className="project-card"
          >
            <h3>Gesture Volume Control</h3>
            <span className="project-tag">
              Computer Vision
            </span>

            <p>
              Control system volume using hand gestures
              with Python and MediaPipe.
            </p>
          </Link>

          <Link
            to="/projects/traffic-sign-recognition"
            className="project-card"
          >
            <h3>Traffic Sign Recognition</h3>

            <span className="project-tag">
              Deep Learning
            </span>

            <p>
              CNN model trained to classify road traffic
              signs with high accuracy.
            </p>
          </Link>

          <Link
            to="/projects/fitness-coach-ai"
            className="project-card"
          >
            <h3>Fitness Coach AI</h3>

            <span className="project-tag">
              AI Application
            </span>

            <p>
              AI-powered personalized fitness coaching
              and workout recommendations.
            </p>
          </Link>

          <Link
            to="/projects/talent-on-demand"
            className="project-card"
          >
            <h3>Talent On Demand</h3>

            <span className="project-tag">
              Deloitte
            </span>

            <p>
              Enterprise learning and talent portal
              supporting large-scale knowledge sharing.
            </p>
          </Link>

          <Link
            to="/projects/knowledge-management"
            className="project-card"
          >
            <h3>Knowledge Management</h3>

            <span className="project-tag">
              Deloitte
            </span>

            <p>
              ServiceNow and SharePoint optimization
              initiative improving information access.
            </p>
          </Link>

          <Link
            to="/projects/togethercare-epic"
            className="project-card"
          >
            <h3>TogetherCare Epic</h3>

            <span className="project-tag">
              Trinity Health
            </span>

            <p>
              Epic training, workflow support,
              and physician onboarding.
            </p>
          </Link>

        </div>
      </section>
      {/*contact*/}
      <section className="contact-section">
  <h2 className="glass-title section-heading">
    Let's Connect
  </h2>

  <p className="contact-text">
    Interested in working together?
  </p>

  <div className="contact-links">
    <a
      href="mailto:kevinwilson1032@gmail.com"
      className="project-card"
    >
      Email Me
    </a>

    <a
      href="https://www.linkedin.com/in/kevinwilson1032"
      target="_blank"
      rel="noreferrer"
      className="project-card"
    >
      LinkedIn
    </a>
  </div>
</section>
    </div>
  );
}
