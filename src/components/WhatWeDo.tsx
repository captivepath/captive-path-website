import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';

const pillars = [
  {
    title: 'Evaluate the opportunity',
    description:
      'Pressure-test ideas, markets, wedges, and viability before overcommitting.',
  },
  {
    title: 'Shape the strategy',
    description:
      'Clarify positioning, business design, operating structure, and next moves.',
  },
  {
    title: 'Build the foundation',
    description:
      'Create products, systems, workflows, or infrastructure that move the venture forward.',
  },
  {
    title: 'Support what scales',
    description:
      'Stay involved where there is real alignment, upside, and leverage.',
  },
];

interface WhatWeDoProps {
  condensed?: boolean;
}

export function WhatWeDo({ condensed = false }: WhatWeDoProps) {
  const ref = useReveal();

  return (
    <section ref={ref} className="py-22 md:py-30">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <p className="reveal text-xs font-display font-medium tracking-widest uppercase text-teal-800 mb-4">
          What we do
        </p>

        <h2 className="reveal font-display text-4xl md:text-5xl text-graphite-900 leading-tight font-bold mb-6">
          Built for more than <span className="text-highlight">advice.</span>
        </h2>

        <p className="reveal text-graphite-600 text-lg leading-relaxed max-w-2xl mb-14 md:mb-18">
          Captive Path works on opportunities that need more than outsourced labor
          or broad consulting. The focus is on evaluating what matters, structuring
          the right path forward, and helping build the systems, product, and
          momentum behind it.
        </p>

        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-2 gap-px bg-graphite-700 border-2 border-graphite-700 rounded-sm overflow-hidden">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="reveal bg-stone-50 p-8 md:p-10 hover:bg-stone-100/60 transition-colors duration-300"
            >
              <h3 className="text-lg font-display font-semibold text-graphite-900 mb-3">
                {pillar.title}
              </h3>
              <p className="text-graphite-500 text-base leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {condensed && (
          <div className="reveal mt-10">
            <Link
              to="/about"
              className="text-sm font-medium text-teal-800 hover:text-teal-700 transition-colors link-underline"
            >
              Learn more about what we do →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
