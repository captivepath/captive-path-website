import { Link } from 'react-router-dom';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-200 bg-stone-100/40">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block">
              <img
                src="/images/cp-logo.webp"
                alt="Captive Path"
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-3 text-sm text-graphite-500 leading-relaxed max-w-sm">
              An independent venture platform led by Zach Warshawsky. Built for
              what's worth building.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-display font-semibold tracking-widest uppercase text-graphite-400 mb-4">
              Navigate
            </p>
            <div className="flex flex-col gap-2.5">
              <Link to="/about" className="text-sm text-graphite-600 hover:text-graphite-900 transition-colors">About</Link>
              <Link to="/process" className="text-sm text-graphite-600 hover:text-graphite-900 transition-colors">Process</Link>
              <Link to="/journal" className="text-sm text-graphite-600 hover:text-graphite-900 transition-colors">Journal</Link>
              <Link to="/contact" className="text-sm text-graphite-600 hover:text-graphite-900 transition-colors">Contact</Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <p className="text-xs font-display font-semibold tracking-widest uppercase text-graphite-400 mb-4">
              Connect
            </p>
            <div className="flex flex-col gap-2.5">
              <Link to="/contact" className="text-sm text-graphite-600 hover:text-graphite-900 transition-colors">
                Start a conversation
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="text-xs text-graphite-400">
            &copy; {year} Captive Path. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
