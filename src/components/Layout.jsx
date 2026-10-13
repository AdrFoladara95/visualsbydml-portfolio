import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ArrowUpRight,
  Instagram,
  Youtube,
} from 'lucide-react';
import { site } from '../data/site';

const links = [
  ['Home', '/'],
  ['Portfolio', '/portfolio'],
  ['Services', '/#services'],
  ['About', '/about'],
  ['Contact', '/contact'],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <Link
        className="wordmark"
        to="/"
        onClick={close}
        aria-label="VisualsByDML home"
      >
        <span className="wordmark-mark">
          V<span>.</span>
        </span>

        <span>
          VISUALS<span className="gold">BYDML</span>
        </span>
      </Link>

      <nav
        className={`nav-links ${open ? 'nav-open' : ''}`}
        aria-label="Main navigation"
      >
        {links.map(([label, to]) => (
          <NavLink
            key={label}
            to={to}
            onClick={close}
            className={({ isActive }) =>
              isActive && to !== '/#services'
                ? 'nav-link active'
                : 'nav-link'
            }
          >
            {label}
          </NavLink>
        ))}

        <Link
          className="button button-gold nav-cta"
          to="/contact"
          onClick={close}
        >
          Book a Shoot
          <ArrowUpRight size={15} />
        </Link>
      </nav>

      <button
        className="menu-toggle"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <Link className="wordmark footer-brand" to="/">
            <span className="wordmark-mark">
              V<span>.</span>
            </span>

            <span>
              VISUALS<span className="gold">BYDML</span>
            </span>
          </Link>

          <p className="muted footer-copy">
            Real moments. Intentional frames.
            <br />
            Stories that stay with you.
          </p>
        </div>

        <div className="footer-col">
          <span className="eyebrow">EXPLORE</span>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Start a project</Link>
        </div>

        <div className="footer-col">
          <span className="eyebrow">SAY HELLO</span>

          <a href={`mailto:${site.email}`}>
            {site.email}
          </a>

          <a
            href={`https://wa.me/${site.phoneDigits}`}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp ↗️
          </a>

          <span>{site.location}</span>
        </div>

        <div className="footer-social">
          <a
            href={site.instagram}
            aria-label="Instagram"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram />
          </a>

          <a
            href={site.youtube}
            aria-label="YouTube"
            target="_blank"
            rel="noreferrer"
          >
            <Youtube />
          </a>

          <a
            href={site.tiktok}
            aria-label="TikTok"
            target="_blank"
            rel="noreferrer"
            className="tiktok"
          >
            ♪
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          ©️ {new Date().getFullYear()} VisualsByDML. All rights reserved.
        </span>

        <span>Made to move you.</span>
      </div>
    </footer>
  );
}

export function PageShell({ children }) {
  const location = useLocation();

  return (
    <>
      <Header />

      <main key={location.pathname} className="page-enter">
        {children}
      </main>

      <Footer />
    </>
  );
}