import { ArrowUpRight, Play } from 'lucide-react';

export default function ProjectCard({
  project,
  onOpen,
  index = 0,
}) {
  return (
    <button
      type="button"
      className={`project-card project-card-${index % 3}`}
      onClick={() => onOpen(project)}
      aria-label={`Watch ${project.title} video`}
    >
      <span className="project-image-wrap">
        <video
          key={project.video}
          src={project.video}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="project-video-preview"
          onError={(e) => {
            e.currentTarget.classList.add('video-error');
          }}
        />

        <span className="project-play">
          <Play size={16} fill="currentColor" />
        </span>

        <span className="project-index">
          {String(index + 1).padStart(2, '0')}
        </span>
      </span>

      <span className="project-meta">
        <span>
          <strong>{project.title}</strong>
          <small>{project.category}</small>
        </span>

        <span className="project-year">
          {project.year}
          <ArrowUpRight size={16} />
        </span>
      </span>
    </button>
  );
}