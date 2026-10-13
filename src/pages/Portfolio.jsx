import { useMemo, useState } from 'react';

import { projects } from '../data/site';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';

const filters = [
  'All work',
  'Weddings & Love Stories',
  'Events & Celebrations',
  'Commercial & Brand Films',
  'Music Videos',
  'Lifestyle & Creative Films',
];

export default function Portfolio() {
  const [filter, setFilter] = useState('All work');
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(
    () =>
      filter === 'All work'
        ? projects
        : projects.filter((p) => p.category === filter),
    [filter]
  );

  return (
    <div className="inner-page">
      {/* Page Hero */}
      <section className="page-hero portfolio-hero">
        <span className="eyebrow">THE VISUAL JOURNAL</span>

        <h1>
          Every frame
          <br />
          holds a <span className="serif">feeling.</span>
        </h1>

        <p>
          Discover visual stories crafted to capture attention, 
          communicate ideas, and leave a lasting impression — from 
          engaging short-form content to immersive long-form videos.
        </p>
      </section>

      {/* Portfolio Projects */}
      <section className="section portfolio-page-section">
        <div
          className="filter-list"
          aria-label="Filter projects"
        >
          {filters.map((f) => (
            <button
              key={f}
              className={
                filter === f
                  ? 'filter-pill selected'
                  : 'filter-pill'
              }
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="project-grid portfolio-full-grid">
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onOpen={setSelected}
            />
          ))}
        </div>

      </section>

      {/* Project Details Modal */}
      <ProjectModal
        project={selected}
        onClose={() => setSelected(null)}
      />
    </div>
  );
}