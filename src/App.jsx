import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import { PageShell } from './components/Layout';

import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

// Scroll to the top whenever the route changes
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        const element = document.querySelector(hash);

        element?.scrollIntoView({
          behavior: window.matchMedia(
            '(prefers-reduced-motion: reduce)'
          ).matches
            ? 'auto'
            : 'smooth',
        });
      }, 80);

      return () => clearTimeout(timer);
    }

    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  }, [pathname, hash]);

  return null;
}

// Main application and route configuration
export default function App() {
  return (
    <>
      <ScrollToTop />

      <PageShell>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/portfolio" element={<Portfolio />} />

          <Route path="/contact" element={<Contact />} />

          {/* 404 - Page Not Found */}
          <Route
            path="*"
            element={
              <main className="not-found">
                <span className="eyebrow">
                  404 / LOST FRAME
                </span>

                <h1>
                  This frame isn’t
                  <br />
                  <span className="serif">in the cut.</span>
                </h1>

                <a href="/" className="button button-gold">
                  Back to home
                </a>
              </main>
            }
          />
        </Routes>
      </PageShell>
    </>
  );
}