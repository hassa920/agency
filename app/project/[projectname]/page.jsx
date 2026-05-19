import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getProjectBySlug } from "../../data/projectsData";
import '../../css/project-detail.css';
import StartProjectContact from "../../Component/StartProjectContact";

export async function generateMetadata({ params }) {
  const { projectname } = await params;
  const project = getProjectBySlug(projectname);
  
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - Case Study`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { projectname } = await params;
  const project = getProjectBySlug(projectname);

  if (!project) {
    notFound();
  }

  return (
    <>
      <section className="project-detail-hero">
        <div className="project-detail-overlay"></div>
        <div className="project-detail-content">
          <Link href="/project" className="project-detail-back-link">
            ← Back to Projects
          </Link>
          <span className="project-detail-tag">{project.tag}</span>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </div>
      </section>

      <section className="project-detail-section">
        <div className="project-detail-container">
          <div className="project-detail-image-wrapper">
            <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={800}
              className="project-detail-hero-image"
            />
          </div>

          <div className="project-detail-grid">
            <div className="project-detail-main">
              <div className="project-detail-block">
                <h2>Client Goals & Challenges</h2>
                <div className="project-detail-goals">
                  <div className="project-detail-goals-section">
                    <h3>Goals</h3>
                    <ul>
                      {project.clientGoals.map((goal, index) => (
                        <li key={index}>{goal}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="project-detail-goals-section">
                    <h3>Challenges</h3>
                    <ul>
                      {project.challenges.map((challenge, index) => (
                        <li key={index}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="project-detail-block">
                <h2>Our Approach & Strategy</h2>
                {project.approach.map((approach, index) => (
                  <div key={index} className="project-detail-approach">
                    <h3>{approach.title}</h3>
                    <p>{approach.description}</p>
                    <ul>
                      {approach.points.map((point, pointIndex) => (
                        <li key={pointIndex}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="project-detail-block">
                <h2>Results & Impact</h2>
                <ul className="project-detail-results">
                  {project.results.map((result, index) => (
                    <li key={index}>{result}</li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="project-detail-sidebar">
              <div className="project-detail-sidebar-card">
                <h3>Project Details</h3>
                <div className="project-detail-info">
                  <span className="project-detail-label">Service</span>
                  <span className="project-detail-value">{project.tag}</span>
                </div>
                <div className="project-detail-info">
                  <span className="project-detail-label">Industry</span>
                  <span className="project-detail-value">Digital Services</span>
                </div>
                <Link href="/contact" className="project-detail-cta">
                  Start Your Project →
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <StartProjectContact />
    </>
  );
}
