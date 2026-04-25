import { useState, useEffect } from 'react';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-stone-50/95 backdrop-blur-sm border-b border-stone-200'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">
        <a href="#" className="font-body text-graphite-900 font-semibold tracking-tight text-sm uppercase">
          Captive Path
        </a>
        <a
          href="#contact"
          className="text-sm font-medium text-teal-800 hover:text-teal-700 transition-colors duration-200"
        >
          Start a conversation
        </a>
      </div>
    </nav>
  );
}
