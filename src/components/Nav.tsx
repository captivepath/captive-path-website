import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { to: '/about', label: 'About' },
  { to: '/process', label: 'Process' },
  { to: '/journal', label: 'Journal' },
  { to: '/contact', label: 'Contact' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-stone-50/95 backdrop-blur-sm border-b border-stone-200'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center">
          <img
            src="/images/cp-logo.webp"
            alt="Captive Path"
            className="h-8 md:h-9 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors duration-200 link-underline ${
                location.pathname === link.to
                  ? 'text-teal-800'
                  : 'text-graphite-600 hover:text-graphite-900'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-graphite-700"
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            {mobileOpen ? (
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            ) : (
              <>
                <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden bg-stone-50/98 backdrop-blur-sm border-b border-stone-200 px-6 pb-6">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`block py-3 text-sm font-medium border-b border-stone-100 last:border-0 ${
                location.pathname === link.to
                  ? 'text-teal-800'
                  : 'text-graphite-600'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
