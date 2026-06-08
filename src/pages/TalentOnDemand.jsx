import "../styles/project.css";

export default function TalentOnDemand() {
return ( <div className="project-page">

  <h1 className="project-title">
    Talent On Demand
  </h1>

  {/* LOGOS */}

  <div className="tod-header">

    <img
      src="/deloitte-logo.png"
      alt="Deloitte"
      className="tod-logo"
    />

    <img
      src="/tod.png"
      alt="Talent On Demand"
      className="tod-logo"
    />

  </div>

  <div className="project-content">

    {/* OVERVIEW */}

    <div className="detail-card">

      <div className="km-layout">

        <div className="km-text">

          <h2>Overview</h2>

          <span className="detail-tag">
            Deloitte Consulting
          </span>

          <p>
            Contributed to Deloitte's Talent On Demand initiative,
            a centralized enterprise platform designed to improve
            learning accessibility, knowledge sharing, and workforce
            development across large global teams.
          </p>

          <p>
            The platform provided employees with streamlined access
            to training resources, development opportunities,
            knowledge repositories, and organizational learning
            content. My responsibilities included supporting content
            organization, platform optimization, user experience
            improvements, and information management workflows.
          </p>

          <p>
            Working closely with stakeholders, I helped ensure that
            learning materials remained accessible, searchable, and
            aligned with business objectives. Process improvements
            and platform enhancements contributed to a more efficient
            knowledge-sharing environment across multiple teams and
            departments.
          </p>

          <p>
            The project strengthened collaboration, improved resource
            discoverability, and supported continuous professional
            development within Deloitte's enterprise learning
            ecosystem.
          </p>

          <h3>Tools & Technologies</h3>

          <p>
            SharePoint • Knowledge Management • Learning Platforms •
            Content Administration • Process Improvement •
            Information Management
          </p>

        </div>

        <div className="tod-images">

          <img
            src="/deloitte1.jpg"
            alt="Talent On Demand Screenshot 1"
          />

          <img
            src="/deloitte2.jpg"
            alt="Talent On Demand Screenshot 2"
          />

        </div>

      </div>

    </div>

    {/* IMPACT */}

    <div className="detail-card github-card">

      <h2>Project Impact</h2>

      <p>
        Supported a large-scale enterprise learning and knowledge
        management platform that improved access to organizational
        resources, enhanced collaboration, and promoted continuous
        professional development across Deloitte teams.
      </p>

    </div>

  </div>

</div>

);
}
