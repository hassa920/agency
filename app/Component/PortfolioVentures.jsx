"use client";

import React, { useMemo, useState } from "react";

const baseVentures = [
  {
    id: 1,
    title: "Urban Clean Co.",
    description:
      "Urban Clean Co. partnered with us to build a stronger online identity and attract more local customers through targeted digital strategies.",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
    tag: "Digital Strategy",
  },
  {
    id: 2,
    title: "Wildlife Experience Hub",
    description:
      "We helped Wildlife Experience Hub modernize their website and improve engagement with a cleaner user experience.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    tag: "Web Experience",
  },
  {
    id: 3,
    title: "Precision Build Group",
    description:
      "Our team enhanced Precision Build Group’s digital presence with optimized content and performance-focused design.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    tag: "Growth Optimization",
  },
  {
    id: 4,
    title: "Prime Exterior Services",
    description:
      "We supported Prime Exterior Services in building trust online by improving visibility and brand consistency.",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80",
    tag: "Brand Development",
  },
  {
    id: 5,
    title: "NextGen Property Solutions",
    description:
      "NextGen Property Solutions worked with us to generate high-quality leads through better funnel design and targeting.",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80",
    tag: "Lead Generation",
  }
];

const ventures = Array.from({ length: 4 }).flatMap((_, pageIndex) =>
  baseVentures.map((venture, ventureIndex) => ({
    ...venture,
    id: pageIndex * baseVentures.length + ventureIndex + 1,
  }))
);

const PortfolioVentures = () => {
  const perPage = 5;
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(ventures.length / perPage);
  const pageButtons =
    totalPages <= 3 ? Array.from({ length: totalPages }, (_, index) => index + 1) : [1, 2, totalPages];

  const visibleVentures = useMemo(() => {
    const start = (page - 1) * perPage;
    return ventures.slice(start, start + perPage);
  }, [page]);

  return (
    <section className="ventures-section" aria-labelledby="ventures-title">
      <div className="ventures-container">
        <h2 id="ventures-title">Our Work & Selected Case Studies</h2>

        <div className="ventures-grid" role="list">
          {visibleVentures.map((venture, index) => (
            <article
              className={`venture-card ${index % 2 === 0 ? "normal" : "reverse"}`}
              key={venture.id}
            >
              <div className="venture-image-wrap">
                <img src={venture.image} alt={venture.title} className="venture-image" />
                <span className="venture-tag">{venture.tag}</span>
              </div>

              <div className="venture-content">
                <h3>{venture.title}</h3>
                <p>{venture.description}</p>
                <a href="#" className="venture-read-more" aria-label={`Open ${venture.title}`}>
                  ↗
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="ventures-pagination" aria-label="Portfolio pagination">
          <button type="button" className="ventures-icon-btn" onClick={() => setPage(1)} aria-label="First page">
            «
          </button>

          <div className="ventures-dots" role="tablist" aria-label="Pagination pages">
            {pageButtons.map((pageNumber, index, arr) => {
              const isActive = pageNumber === page;
              return (
                <React.Fragment key={pageNumber}>
                  <button
                    type="button"
                    className={`ventures-dot ${isActive ? "active" : ""}`}
                    onClick={() => setPage(pageNumber)}
                    aria-label={`Go to page ${pageNumber}`}
                    aria-pressed={isActive}
                  >
                    {pageNumber}
                  </button>
                  {index === 1 && arr[2] - arr[1] > 1 ? <span className="ventures-ellipsis">...</span> : null}
                </React.Fragment>
              );
            })}
          </div>

          <button
            type="button"
            className="ventures-icon-btn"
            onClick={() => setPage(totalPages)}
            aria-label="Last page"
          >
            »
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioVentures;