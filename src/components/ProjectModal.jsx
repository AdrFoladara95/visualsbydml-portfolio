import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [project, onClose]);

  if (!project) return null;

  return createPortal(
    <div
      className="modal-backdrop"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <section
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Close video"
        >
          <X size={24} />
        </button>

        <div className="modal-image">
          <video
            key={project.video}
            src={project.video}
            controls
            autoPlay
            playsInline
            preload="metadata"
            className="modal-video"
            aria-label={`${project.title} video`}
          >
            Your browser does not support video playback.
          </video>
        </div>

        <div className="modal-content">
          <span className="eyebrow">
            {project.category} / {project.year}
          </span>

          <h2 id="modal-title">{project.title}</h2>

          <p>{project.description}</p>

          <div className="modal-details">
            {project.details}
            <span>{project.duration}</span>
          </div>

          <Link
            to="/contact"
            className="button button-gold"
            onClick={onClose}
          >
            Create something similar
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </div>,
    document.body
  );
}