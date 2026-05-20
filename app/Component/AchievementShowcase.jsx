import React from "react";

const achievementData = [
  {
    id: "digital-excellence",
    name: "Digital Excellence",
    kind: "Innovation Recognition - Web Solutions",
    year: "2012",
  },
  {
    id: "creative-impact",
    name: "Creative Impact",
    kind: "Design Recognition - Branding & UX",
    year: "2018",
  },
  {
    id: "strategic-growth",
    name: "Strategic Growth",
    kind: "Performance Recognition - Campaign Strategy",
    year: "2022",
  },
];

const AchievementRow = ({ item }) => {
  return (
    <li className="achievement-row" role="row">
      <p className="achievement-name" role="cell">
        {item.name}
      </p>
      <p className="achievement-kind" role="cell">
        {item.kind}
      </p>
      <p className="achievement-year" role="cell">
        {item.year}
      </p>
    </li>
  );
};

const AchievementShowcase = () => {
  return (
    <section className="achievement-section" aria-labelledby="achievement-title">
      <div className="achievement-container">
        <div className="achievement-heading">
          <span className="achievement-accent" aria-hidden="true"></span>
          <h2 id="achievement-title">Milestones & Recognitions</h2>
          <span className="achievement-accent" aria-hidden="true"></span>
        </div>

        <div className="achievement-grid">
          <div className="achievement-image-wrap">
            <img
              className="achievement-image"
              src="/images/milestone.png"
              alt="Modern workspace showcasing digital development tools"
            />
          </div>

          <div className="achievement-table-wrap">
            <div className="achievement-table-head" role="row">
              <span role="columnheader">Title</span>
              <span role="columnheader">Category</span>
              <span role="columnheader">Year</span>
            </div>

            <ul className="achievement-table" role="table" aria-label="Achievement records">
              {achievementData.map((item) => (
                <AchievementRow key={item.id} item={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementShowcase;