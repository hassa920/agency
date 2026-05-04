import React from "react";
import "../css/project.css";
import GetStartedButton from "../Component/GetStartedButton";
import PortfolioVentures from "../Component/PortfolioVentures";
import StartProjectContact from "../Component/StartProjectContact";

const Page = () => {
  return (
    <>
      <section className="project-hero">
        <div className="project-overlay"></div>
        <div className="project-content">
          <h1>Our Work & Case Studies</h1>
          <p>
            Take a look at some of the projects we’ve delivered for our clients.
            Each project highlights our ability to combine creativity,
            strategy, and technology to build solutions that perform.
            From modern designs to scalable systems, our work reflects
            a focus on real impact and measurable growth.
            Explore how we turn ideas into successful digital experiences—
            and how we can do the same for you.
          </p>

          <GetStartedButton />
        </div>
      </section>

      <PortfolioVentures />
      <StartProjectContact />
    </>
  );
};

export default Page;