import React from "react";
import GetStartedButton from "./GetStartedButton";

const principleCards = [
  {
    id: "ai-analytics",
    title: "Insight-Led Decisions",
    description:
      "We rely on data, analytics, and intelligent insights to guide strategies that deliver consistent and measurable outcomes.",
  },
  {
    id: "automation",
    title: "Efficient Systems",
    description:
      "We build streamlined processes and automation flows that reduce manual effort and improve operational speed.",
  },
  {
    id: "growth",
    title: "Long-Term Performance",
    description:
      "Our focus is on sustainable progress through continuous testing, refinement, and performance optimization.",
  },
];

const stats = [
  { id: "years", value: "8+", label: "Years in Industry" },
  { id: "projects", value: "50+", label: "Projects Delivered" },
  { id: "partners", value: "12", label: "Active Collaborations" },
];

const stories = [
  {
    id: "story-1",
    title: "Building Strong Online Presence",
    description:
      "A growing brand needed better visibility. We restructured their digital presence to attract the right audience.",
    image: "/images/online_presence.png",
  },
  {
    id: "story-2",
    title: "Improving Conversion Flow",
    description:
      "We optimized user journeys and messaging to turn website visitors into consistent customers.",
    image: "/images/improving_conversion.png",
  },
  {
    id: "story-3",
    title: "Scaling Digital Campaigns",
    description:
      "Through better targeting and automation, campaigns were scaled efficiently while reducing unnecessary costs.",
    image: "/images/campagin.png",
  },
];

const AboutHero = () => {
  return (
    <section className="about-hero">
      <div className="about-shell about-hero-grid">
        <div className="about-hero-copy">
          <h1>Helping Businesses Grow Through Smart Digital Solutions</h1>
          <p>
            We combine strategy, creativity, and modern technology to build
            solutions that drive real business progress and long-term success.
          </p>
          <GetStartedButton text="Start Now" className="project-btn about-hero-btn" />
        </div>
        <div className="about-hero-visual" aria-hidden="true">
          <img
            className="about-hero-photo"
            src="/images/help_business.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

const AboutInnovation = () => {
  return (
    <section className="about-innovation">
      <div className="about-shell about-innovation-grid">
        <div className="about-collage" aria-hidden="true">
          <img
            className="about-collage-main"
            src="/images/turning.png"
            alt=""
          />
          <img
            className="about-collage-small about-collage-small-a"
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80"
            alt=""
          />
          <img
            className="about-collage-small about-collage-small-b"
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80"
            alt=""
          />
        </div>
        <div className="about-innovation-copy">
          <h2>Turning Ideas Into Practical Digital Solutions</h2>
          <p>
            We help businesses improve workflows, enhance user experience,
            and create systems that support consistent growth in a digital-first world.
          </p>
        </div>
      </div>
    </section>
  );
};

const CorePrinciples = () => {
  return (
    <section className="about-principles">
      <div className="about-shell">
        <div className="about-principles-head">
          <h2>Our Approach to Delivering Consistent Results</h2>
          <div className="about-principles-gem" aria-hidden="true">
            <span>SEO</span>
          </div>
        </div>

        <div className="about-principles-grid">
          {principleCards.map((card) => (
            <article key={card.id} className="about-principle-card">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutStats = () => {
  return (
    <section className="about-stats">
      <div className="about-shell about-stats-grid">
        {stats.map((item) => (
          <article key={item.id} className="about-stat-card">
            <h3>{item.value}</h3>
            <p>{item.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

const ClientStories = () => {
  return (
    <section className="about-stories">
      <div className="about-shell">
        <h2>Success Stories</h2>
        <div className="about-stories-grid">
          {stories.map((story) => (
            <article key={story.id} className="about-story-card">
              <img className="about-story-thumb" src={story.image} alt="" />
              <div className="about-story-icon" aria-hidden="true">
                ✦
              </div>
              <h3>{story.title}</h3>
              <p>{story.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutShowcaseSections = () => {
  return (
    <>
      <AboutHero />
      <AboutInnovation />
      <CorePrinciples />
      <AboutStats />
      <ClientStories />
    </>
  );
};

export default AboutShowcaseSections;