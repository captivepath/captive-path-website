import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';

export function ClosingCTA() {
  const ref = useReveal();

  return (
    <section ref={ref} className="py-22 md:py-30 relative">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl">
          <h2 className="reveal font-display text-4xl md:text-5xl text-graphite-900 leading-tight font-bold mb-6">
            If it's worth building, it's worth evaluating seriously.
          </h2>

          <p className="reveal text-graphite-600 text-lg leading-relaxed mb-10 md:mb-14">
            The best opportunities are usually not the loudest ones. If something
            has real potential, Captive Path is built for the conversation that
            helps determine what it deserves next.
          </p>

          <div className="reveal">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-teal-800 text-stone-50 text-sm font-medium tracking-wide rounded hover:bg-teal-700 transition-all duration-200 hover:shadow-lg hover:shadow-teal-900/20"
            >
              Start a conversation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
