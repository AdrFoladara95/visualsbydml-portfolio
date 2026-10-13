import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight, Aperture, Clapperboard,Focus, MessageCircle,MoveUpRight,Play,Quote,Sparkles } from 'lucide-react';
import { projects, services } from '../data/site';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import potrait from '../images/my-potrait.jpeg'

const benefits = [
  {
    icon: <Aperture />,
    title: 'Creative storytelling',
    text: 'Every frame has a feeling. Every edit has a reason.',
  },
  {
    icon: <Clapperboard />,
    title: 'Production with purpose',
    text: 'A considered process from first idea to final export.',
  },
  {
    icon: <Focus />,
    title: 'The details matter',
    text: 'Thoughtful composition, sound, pacing, and colour.',
  },
  {
    icon: <MessageCircle />,
    title: 'Clear communication',
    text: 'A collaborative experience with no guesswork.',
  },
  {
    icon: <Sparkles />,
    title: 'Made for your story',
    text: 'Your vision leads. The creative approach follows.',
  },
  {
    icon: <Play />,
    title: 'A polished final cut',
    text: 'Careful editing and colour finishing for a cohesive look.',
  },
];

const testimonials = [
  {
    number: '01',
    quote:
      'Overall, great job on the video. Definitely a lot of meaningful visuals.',
    name: 'Demiirxcare',
    context: 'Video Production',
  },
  {
    number: '02',
    quote:
      'It was beyond beautiful—behind the schedule, but it was simply gorgeous. You did amazing work!',
    name: 'Rahman',
    context: 'Creative Project',
  },
  {
    number: '03',
    quote:
      'Superb job under the frame, honestly. Please send your account details—I LOVE IT.',
    name: 'Eche',
    context: 'Video Editing',
  },
];

export default function Home() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-media">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=2200&q=85"
            aria-label="Cinematic filmmaking background footage"
          >
            <source
              src="https://videos.pexels.com/video-files/3130284/3130284-hd_1920_1080_30fps.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <div className="hero-shade" />

        <div className="hero-content">
          <span className="eyebrow hero-eyebrow">
            <span className="eyebrow-line" />
            INDEPENDENT FILMMAKER · IBADAN, NIGERIA
          </span>

          <h1>
            STORIES
            <br />
            <span>IN MOTION.</span>
          </h1>

          <p>
            Crafting cinematic visuals that make every moment
            unforgettable.
          </p>

          <div className="hero-actions">
            <Link className="button button-gold" to="/portfolio">
              Explore My Work
              <ArrowUpRight size={16} />
            </Link>

            <Link className="button button-outline" to="/contact">
              Book a Shoot
            </Link>
          </div>
        </div>

        <a className="scroll-cue" href="#featured">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={15} />
        </a>

        <span className="hero-side-note">
          FRAME IT. FEEL IT. REMEMBER IT.
        </span>
      </section>

      {/* Introduction Strip */}
      <section className="intro-strip">
        <span className="eyebrow">VISUALS WITH INTENTION</span>

        <p>
          From once-in-a-lifetime moments to ideas that move
          culture — <em>your story deserves to be felt.</em>
        </p>

        <span className="intro-number">01 — 04</span>
      </section>

      {/* Featured Portfolio */}
      <section
        id="featured"
        className="section portfolio-section"
      >
        <div className="section-heading">
          <div>
            <span className="eyebrow">
              A FEW STORIES, TOLD IN FRAMES
            </span>

            <h2>
              Selected <span className="serif">work.</span>
            </h2>
          </div>

          <Link className="text-link" to="/portfolio">
            View all projects
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="project-grid">
          {projects.slice(0, 4).map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onOpen={setSelected}
            />
          ))}
        </div>

        {/* <div className="placeholder-note">
          Portfolio images are illustrative placeholders until
          original client work is added.
        </div> */}
      </section>

      {/* About Preview */}
      <section className="about-preview">
        <div className="about-image">
          <img
            src={potrait}
            loading="lazy"
            alt="Filmmaker holding a camera on location, illustrative placeholder"
          />

          <span className="image-stamp">
            BEHIND
            <br />
            THE LENS
          </span>
        </div>

        <div className="about-copy">
          <span className="eyebrow">
            THE PERSON BEHIND THE PICTURE
          </span>

          <h2>
            Not just seen.
            <br />
            <span className="serif">Felt.</span>
          </h2>

          <p className="about-lead">
            More than beautiful footage, I create visual
            experiences that tell stories, capture emotions,
            and leave lasting impressions.
          </p>

          <p className="muted">
            I’m AWE MOSES DAMILARE and i am the creative behind VisualsByDML. I believe
            the strongest films don’t just show what happened
            — they bring you back to how it felt. My approach
            pairs thoughtful storytelling with a cinematic eye
            for the moments that matter.
          </p>

          <Link className="button button-outline" to="/about">
            More About Me
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="section services-section"
      >
        <div className="section-heading">
          <div>
            <span className="eyebrow">
              WHAT I CAN CREATE WITH YOU
            </span>

            <h2>
              Made for your <span className="serif">moment.</span>
            </h2>
          </div>

          <p className="section-side-copy">
            Different stories call for different approaches.
            Let’s find the right one for yours.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, i) => (
            <article
              className="service-card"
              key={service.title}
            >
              <span className="service-number">
                0{i + 1}
              </span>

              <h3>{service.title}</h3>

              <p>{service.text}</p>

              <Link
                to={`/contact?service=${encodeURIComponent(
                  service.title
                )}`}
                aria-label={`Get a quote for ${service.title}`}
                className="service-link"
              >
                Get a Quote
                <ArrowUpRight size={16} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Why Choose VisualsByDML */}
      <section className="why-section">
        <div className="why-heading">
          <span className="eyebrow">
            THE EXPERIENCE MATTERS
          </span>

          <h2>
            Good work.
            <br />
            <span className="serif">Good people.</span>
          </h2>

          <p>
            Professional filmmaking should feel as good as the
            final film looks. Here’s what I bring to every
            collaboration.
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((b) => (
            <article className="benefit" key={b.title}>
              <span className="benefit-icon">
                {b.icon}
              </span>

              <div>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Testimonials */}
<section className="testimonials section">
  <div className="section-heading">
    <div>
      <span className="eyebrow">
        KIND WORDS FROM CLIENTS
      </span>

      <h2>
        The story after
        <br />
        <span className="serif">the story.</span>
      </h2>
    </div>

    <Quote className="quote-mark" size={46} />
  </div>

  <div className="testimonial-grid">
    {testimonials.map((testimonial, index) => (
      <article
        className="testimonial-card"
        key={testimonial.name}
      >
        <span className="testimonial-number">
          0{index + 1}
        </span>

        <Quote
          className="testimonial-icon"
          size={28}
        />

        <p className="testimonial-quote">
          “{testimonial.quote}”
        </p>

        <div className="testimonial-footer">
          <div className="testimonial-avatar">
            {testimonial.number}
          </div>

          <div>
            <h3>{testimonial.name}</h3>
            <span>{testimonial.context}</span>
          </div>
        </div>
      </article>
    ))}
  </div>
</section>

      {/* Final Call to Action */}
      <section className="final-cta">
        <div className="cta-bg" />

        <div className="cta-content">
          <span className="eyebrow">
            HAVE A STORY WORTH TELLING?
          </span>

          <h2>
            LET’S CREATE
            <br />
            SOMETHING{' '}
            <span className="serif">UNFORGETTABLE.</span>
          </h2>

          <p>
            Have a story worth telling? Let’s bring your vision
            to life.
          </p>

          <Link
            to="/contact"
            className="button button-gold"
          >
            Start Your Project
            <MoveUpRight size={16} />
          </Link>
        </div>

        <span className="cta-index">
          VISUALS BY DML / {new Date().getFullYear()}
        </span>
      </section>

      {/* Project Details Modal */}
      <ProjectModal
        project={selected}
        onClose={() => setSelected(null)}
      />
    </>
  );
}