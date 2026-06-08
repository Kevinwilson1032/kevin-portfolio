import "../styles/project.css";

export default function TogetherCareEpic() {
  return (
    <div className="project-page">

      <h1 className="project-title">
        TogetherCare Epic
      </h1>

      <div className="project-content">

        {/* HEADER IMAGES */}

        <div className="project-image-row">

          <div className="project-image">
            <img
              src="/trinity.png"
              alt="Trinity Health"
            />
          </div>

          <div className="project-image">
            <img
              src="/togethercare.png"
              alt="TogetherCare Epic"
            />
          </div>

        </div>

        {/* OVERVIEW */}

        <div className="detail-card">

          <div className="overview-layout">

            <div className="overview-text">

              <h2>Overview</h2>

              <span className="detail-tag">
                Trinity Health
              </span>

              <p>
                Participated in Trinity Health's TogetherCare Epic
                implementation initiative, supporting physician and
                clinical staff onboarding, workflow optimization,
                and end-user training across healthcare organizations.
              </p>

              <p>
                Worked closely with clinicians, providers, and
                operational teams to improve Epic adoption,
                streamline workflows, and support enterprise-wide
                electronic health record transformation efforts.
              </p>
              <p>
                I had a lot of experience teambuilding and working collaboratively 
                with many leaders across togethercare and trinity health. 
              </p>
              <h3>Responsibilities</h3>

              <p>
                Epic Training • Workflow Analysis • Physician Support •
                Healthcare Operations • Change Management
              </p>

            </div>

            <div className="room-image">
              <img
                src="/room.jpg"
                alt="Epic Training Room"
              />
            </div>

          </div>

        </div>

        {/* IMPACT */}

        <div className="detail-card github-card">

          <h2>Project Impact</h2>

          <p>
            Supported successful Epic adoption through training,
            workflow guidance, and user support initiatives,
            helping healthcare teams transition to modernized
            clinical systems and processes.
          </p>

        </div>

      </div>

    </div>
  );
}