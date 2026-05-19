"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { projectsData } from "../data/projectsData";

const ventures = Array.from({ length: 4 }).flatMap((_, pageIndex) =>
  projectsData.map((venture, ventureIndex) => ({
    ...venture,
    id: pageIndex * projectsData.length + ventureIndex + 1,
  }))
);

const PortfolioVentures = () => {
  return (
    <section className="ventures-section" aria-labelledby="ventures-title">
      <div className="ventures-container">
        <h2 id="ventures-title">Our Work &amp; Selected Case Studies</h2>

        <div className="ventures-grid" role="list">
          {ventures.map((venture, index) => (
            <article
              className={`venture-card ${index % 2 === 0 ? "normal" : "reverse"}`}
              key={venture.id}
            >
              <div className="venture-image-wrap">
                <Image
                  src={venture.image}
                  alt={venture.title}
                  width={1200}
                  height={800}
                  className="venture-image"
                />
                <span className="venture-tag">{venture.tag}</span>
              </div>

              <div className="venture-content">
                <h3>{venture.title}</h3>
                <p>{venture.description}</p>
                <Link
                  href={`/project/${venture.slug}`}
                  className="venture-read-more"
                  aria-label={`Open ${venture.title}`}
                >
                  ↗
                </Link>
              </div>
            </article>
          ))}
        </div>

     
     
      </div>
    </section>
  );
};

export default PortfolioVentures;