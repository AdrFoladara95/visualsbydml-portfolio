import { Link } from 'react-router-dom';
import potrait from '../images/my-potrait.jpeg'
import {
  ArrowUpRight,
  Camera,
  Clapperboard,
  Film,
  Aperture,
  BookOpen,
  Eye,
  Palette,
  Clock,
  BriefcaseBusiness,
} from 'lucide-react';

export default function About() {
  const skills = [
    {
      icon: BookOpen,
      title: 'Storytelling Through Editing',
      description:
        'Turning raw footage into compelling videos that connect with viewers and bring stories to life.',
    },
    {
      icon: Eye,
      title: 'Attention to Detail',
      description:
        'Noticing the little things that make a big difference in the final video.',
    },
    {
      icon: Palette,
      title: 'Visual Creativity',
      description:
        'Creating fresh, engaging, and on-brand visuals that help your content stand out.',
    },
    {
      icon: Clock,
      title: 'Pacing & Timing',
      description:
        'Keeping viewers engaged with thoughtful cuts, smooth transitions, and well-timed storytelling.',
    },
  ];

  const capabilities = [
    {
      icon: Clapperboard,
      title: 'Long-Form Editing',
      description:
        'Engaging YouTube videos shaped around clear storytelling, smooth pacing, and audience retention.',
    },
    {
      icon: Film,
      title: 'Short-Form Content',
      description:
        'Dynamic reels and short videos designed to capture attention and communicate ideas quickly.',
    },
    {
      icon: Aperture,
      title: 'Creative Visuals',
      description:
        'A thoughtful approach to visual style, composition, and editing that gives each project its own identity.',
    },
    {
      icon: Camera,
      title: 'Filmmaking',
      description:
        'Exploring meaningful moments and ideas through the camera, with an eye for authentic visual stories.',
    },
  ];

  return (
    <div className="inner-page">
      {/* Page Hero */}
      <section className="page-hero">
        <span className="eyebrow">
          A LITTLE ABOUT THE PERSON BEHIND THE LENS
        </span>

        <h1>
          Curiosity in the eye.
          <br />
          <span className="serif">Story in the soul.</span>
        </h1>

        <p>
          Thoughtful filmmaking and editing for the moments,
          people, and ideas that deserve to stay with us.
        </p>
      </section>

      {/* About Section */}
      <section className="about-page-grid">
        <div className="about-page-image">
          <img
            src={potrait}
            alt="Filmmaker portrait"
          />

          <span className="image-caption">
            AWE MOSES DAMILARE 
          </span>
        </div>

        <div className="about-page-copy">
          <span className="eyebrow">THE CREATIVE JOURNEY</span>

          <h2>
            Every story has
            <br />
            a <span className="serif">point of view.</span>
          </h2>

          <p>
            I’m Awe Moses Damilare, a freelance video editor
            and filmmaker based in Ibadan, Nigeria, and the
            creative behind VisualsByDML.
          </p>

          <p>
            I work with YouTubers and brands, specializing in
            long-form YouTube videos and short-form content such
            as reels. What started as a hobby gradually grew into
            a creative passion that keeps me inspired and gives
            me the freedom to bring ideas to life.
          </p>

          <p>
            Picking up a camera opened up a new way for me to
            tell stories, capture meaningful moments, and see
            the world from a different perspective. I’m drawn
            to the little details that make a story feel
            personal — from the pause before the vows to the
            atmosphere of a room coming alive and the quiet
            confidence behind a brand.
          </p>

          <p>
            My process starts with listening. Understanding your
            vision, your story, and what matters most to you
            helps me shape how we plan, shoot, and edit. My goal
            is to create visuals that feel authentic, intentional,
            and uniquely yours — not just another video, but a
            story worth remembering.
          </p>

          <Link to="/contact" className="button button-gold">
            Let’s work together
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      {/* Personal Skills */}
      <section className="capabilities section">
        <span className="eyebrow">WHAT I BRING TO EVERY PROJECT</span>

        <h2>
          The details make
          <br />
          <span className="serif">the difference.</span>
        </h2>

        <div className="capability-grid">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <article key={skill.title}>
                <Icon />
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Experience */}
      <section className="experience-section section">
        <div className="experience-copy">
          <span className="eyebrow">THE EXPERIENCE SO FAR</span>

          <h2>
            Learning, creating,
            <br />
            <span className="serif">and bringing stories to life.</span>
          </h2>

          <p>
            I’ve been editing videos for over two years, helping
            YouTubers and brands bring their stories to life.
            Along the way, I’ve also volunteered at TEDx events,
            gaining hands-on experience creating content that
            inspires, connects, and engages audiences.
          </p>
        </div>

        <div className="experience-highlight">
          <BriefcaseBusiness size={28} />

          <span className="eyebrow">MY JOURNEY</span>

          <strong>2+ Years</strong>

          <p>
            Creating, editing, and developing my craft through
            real-world projects and creative experiences.
          </p>
        </div>
      </section>

      {/* Creative Capabilities */}
      <section className="capabilities section">
        <span className="eyebrow">
          FROM RAW FOOTAGE TO FINAL FRAME
        </span>

        <h2>
          A considered process.
          <br />
          <span className="serif">A personal result.</span>
        </h2>

        <div className="capability-grid">
          {capabilities.map((capability) => {
            const Icon = capability.icon;

            return (
              <article key={capability.title}>
                <Icon />
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Filmmaking Philosophy */}
      <section className="philosophy">
        <span className="eyebrow">A FILMMAKING PHILOSOPHY</span>

        <p>
          “The goal isn’t simply to record a moment. It’s to
          make someone feel close enough to remember it.”
        </p>

        <span className="gold">— VISUALSBYDML</span>
      </section>
    </div>
  );
}