import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  ArrowUpRight,
  CheckCircle2,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Send,
} from 'lucide-react';

import { site, services } from '../data/site';

const initial = {
  name: '',
  email: '',
  phone: '',
  projectType: '',
  date: '',
  location: '',
  budget: '',
  description: '',
};

export default function Contact() {
  const [params] = useSearchParams();

  const [form, setForm] = useState({
    ...initial,
    projectType: params.get('service') || '',
  });

  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const service = params.get('service');

    if (service) {
      setForm((f) => ({
        ...f,
        projectType: service,
      }));
    }
  }, [params]);

  const update = (e) => {
    const { name, value } = e.target;

    setForm((f) => ({
      ...f,
      [name]: value,
    }));

    setErrors((old) => ({
      ...old,
      [name]: '',
    }));

    setStatus('');
  };

  const validate = () => {
    const e = {};

    if (!form.name.trim()) {
      e.name = 'Please enter your name.';
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Enter a valid email address.';
    }

    if (!form.phone.trim()) {
      e.phone = 'Please add a phone or WhatsApp number.';
    }

    if (!form.projectType) {
      e.projectType = 'Choose a project type.';
    }

    if (
      !form.description.trim() ||
      form.description.trim().length < 15
    ) {
      e.description =
        'Tell me a little more (at least 15 characters).';
    }

    setErrors(e);

    return Object.keys(e).length === 0;
  };

  const submit = (e) => {
    e.preventDefault();

    if (!validate()) {
      setStatus('error');
      return;
    }

    const body = `Hello VisualsByDML! I'd like to discuss a project.

Name: ${form.name}
Email: ${form.email}
Phone/WhatsApp: ${form.phone}
Project type: ${form.projectType}
Shoot date: ${form.date || 'Not decided'}
Location: ${form.location || 'Not specified'}
Estimated budget: ${form.budget || 'Not specified'}

Project details:
${form.description}`;

    setStatus('demo');

    window.open(
      `https://wa.me/${site.phoneDigits}?text=${encodeURIComponent(body)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className="inner-page contact-page">
      <section className="page-hero contact-hero">
        <span className="eyebrow">
          THE FIRST FRAME STARTS HERE
        </span>

        <h1>
          Tell me what
          <br />
          you’re <span className="serif">imagining.</span>
        </h1>

        <p>
          Have a date in mind, a story to tell, or just an idea
          taking shape? Tell me a little about it.
        </p>
      </section>

      <section className="contact-layout section">
        <div className="contact-aside">
          <span className="eyebrow">
            LET’S TALK DETAILS
          </span>

          <h2>
            Good things start
            <br />
            with a <span className="serif">conversation.</span>
          </h2>

          <p className="muted">
            Share the essentials and we’ll take it from there.
            The more I know about your vision, the better I can
            help bring it to life.
          </p>

          <div className="contact-detail">
            <span>
              <Mail />
            </span>

            <div>
              <small>EMAIL</small>
              <a href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </div>
          </div>

          <div className="contact-detail">
            <span>
              <MessageCircle />
            </span>

            <div>
              <small>WHATSAPP</small>

              <a
                href={`https://wa.me/${site.phoneDigits}`}
                target="_blank"
                rel="noreferrer"
              >
                {site.phone}
              </a>
            </div>
          </div>

          <div className="contact-detail">
            <span>
              <MapPin />
            </span>

            <div>
              <small>BASED IN</small>
              <span>{site.location}</span>
            </div>
          </div>

          <a
            className="social-contact"
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
          >
            <Instagram size={18} />
            @visualsbydml
            <ArrowUpRight size={15} />
          </a>

          <div className="availability-note">
            <span className="availability-dot" />
            Available for selected projects
          </div>
        </div>

        <form
          className="inquiry-form"
          onSubmit={submit}
          noValidate
        >
          <div className="form-heading">
            <span className="eyebrow">
              PROJECT INQUIRY
            </span>

            <span className="form-step">
              01 / LET’S BEGIN
            </span>
          </div>

          <div className="form-grid">
            <Field
              label="Full name"
              name="name"
              value={form.name}
              onChange={update}
              error={errors.name}
              placeholder="Your name"
              required
            />

            <Field
              label="Email address"
              name="email"
              type="email"
              value={form.email}
              onChange={update}
              error={errors.email}
              placeholder="you@example.com"
              required
            />

            <Field
              label="Phone / WhatsApp"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={update}
              error={errors.phone}
              placeholder="+234 ..."
              required
            />

            <div className="field">
              <label htmlFor="projectType">
                Type of project <span>*</span>
              </label>

              <select
                id="projectType"
                name="projectType"
                value={form.projectType}
                onChange={update}
                aria-invalid={!!errors.projectType}
                required
              >
                <option value="">Select a service</option>

                {services.map((s) => (
                  <option key={s.title}>
                    {s.title}
                  </option>
                ))}
              </select>

              {errors.projectType && (
                <small className="field-error">
                  {errors.projectType}
                </small>
              )}
            </div>

            <Field
              label="Event / shoot date"
              name="date"
              type="date"
              value={form.date}
              onChange={update}
            />

            <Field
              label="Location"
              name="location"
              value={form.location}
              onChange={update}
              placeholder="City or venue"
            />

            <div className="field field-full">
              <label htmlFor="budget">
                Estimated budget
              </label>

              <select
                id="budget"
                name="budget"
                value={form.budget}
                onChange={update}
              >
                <option value="">
                  Choose a range (optional)
                </option>
                <option>Under ₦100,000</option>
                <option>₦100,000 – ₦250,000</option>
                <option>₦250,000 – ₦500,000</option>
                <option>₦500,000+</option>
                <option>Let’s discuss</option>
              </select>
            </div>

            <div className="field field-full">
              <label htmlFor="description">
                Tell me about your project <span>*</span>
              </label>

              <textarea
                id="description"
                name="description"
                rows="5"
                value={form.description}
                onChange={update}
                placeholder="The idea, the mood, the important details…"
                aria-invalid={!!errors.description}
                required
              />

              {errors.description && (
                <small className="field-error">
                  {errors.description}
                </small>
              )}
            </div>
          </div>

          {status === 'error' && (
            <p
              className="form-feedback error"
              role="alert"
            >
              A few details need your attention. Please check
              the highlighted fields.
            </p>
          )}

          {status === 'demo' && (
            <p
              className="form-feedback success"
              role="status"
            >
              <CheckCircle2 size={18} />
              Your message is ready in WhatsApp. Review it
              there and press send to submit your inquiry.
              This demo form does not send data to a server.
            </p>
          )}

          <button
            className="button button-gold submit-button"
            type="submit"
          >
            Send Project Inquiry
            <Send size={16} />
          </button>

          <p className="form-privacy">
            Your details are not stored on this
            website. Submitting opens WhatsApp with your
            message pre-filled.
          </p>
        </form>
      </section>
    </div>
  );
}

function Field({
  label,
  name,
  type = 'text',
  value,
  onChange,
  error,
  placeholder,
  required,
}) {
  return (
    <div className="field">
      <label htmlFor={name}>
        {label} {required && <span>*</span>}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        aria-invalid={!!error}
      />

      {error && (
        <small className="field-error">
          {error}
        </small>
      )}
    </div>
  );
}