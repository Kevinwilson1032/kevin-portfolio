import "../styles/project.css";

export default function KnowledgeManagement() {
  return (
    <div className="project-page">

      <h1 className="project-title">
        Knowledge Management
      </h1>

      {/* DELOITTE LOGO */}

      <div className="company-logo">
        <img
          src="/deloitte-logo.png"
          alt="Deloitte"
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
                Supported Deloitte knowledge management initiatives by
                automating the migration and transformation of policy
                documentation between Salesforce and ServiceNow.
                Existing processes relied heavily on manual formatting,
                validation, and data entry, resulting in significant
                administrative overhead and delayed publication cycles.
              </p>

              <p>
                To streamline operations, I developed Excel VBA macro
                solutions that automated repetitive processing tasks,
                standardized document structures, and prepared content
                for ServiceNow ingestion. SQL was utilized to validate,
                cleanse, and transform large datasets while maintaining
                data integrity across enterprise systems.
              </p>

              <p>
                Adobe Acrobat automation tools were leveraged to
                accelerate document conversion and formatting workflows,
                reducing manual effort associated with policy management
                and document maintenance.
              </p>

              <p>
                Through workflow redesign, automation, and data
                transformation techniques, the solution delivered an
                estimated 80% increase in operational efficiency while
                improving accuracy, consistency, and governance across
                the knowledge management lifecycle.
              </p>

              <h3>Tools & Technologies</h3>

              <p>
                ServiceNow • Salesforce • SQL • Excel VBA • Adobe Acrobat •
                Process Automation • Data Transformation
              </p>

            </div>

            <div className="km-side-image">
              <img
                src="/sales.jpg"
                alt="Salesforce Workflow"
              />
            </div>

          </div>

        </div>

        {/* LARGE SHOWCASE IMAGE */}

        <div className="project-image">
          <img
            src="/deloittess.png"
            alt="Knowledge Management Dashboard"
          />
        </div>

        {/* IMPACT */}

        <div className="detail-card github-card">

          <h2>Project Impact</h2>

          <p>
            Automated the transformation and migration of enterprise
            policy documentation between Salesforce and ServiceNow,
            reducing manual effort and improving process efficiency
            by approximately 80% through workflow automation and
            structured data management practices.
          </p>

        </div>

      </div>

    </div>
  );
}