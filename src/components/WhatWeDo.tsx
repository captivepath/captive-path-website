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

export function WhatWeDo() {
  const ref = useReveal();

  return (
    <section ref={ref} id="what" className="py-22 md:py-30">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section label */}
        <p className="reveal text-xs font-medium tracking-widest uppercase text-teal-800 mb-4">
          What we do
        </p>

        {/* Heading */}
        <h2 className="reveal font-display text-4xl md:text-5xl text-graphite-900 leading-tight mb-6">
          Built for more than advice.
        </h2>

        {/* Body */}
        <p className="reveal text-graphite-600 text-lg leading-relaxed max-w-2xl mb-14 md:mb-18">
          Captive Path works on opportunities that need more than outsourced labor
          or broad consulting. The focus is on evaluating what matters, structuring
          the right path forward, and helping build the systems, product, and
          momentum behind it.
        </p>

        {/* Pillars — 2x2 grid with panel framing */}
        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-200 border border-stone-200 rounded-sm overflow-hidden">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="reveal bg-stone-50 p-8 md:p-10"
            >
              <h3 className="text-lg font-semibold text-graphite-900 mb-3">
                {pillar.title}
              </h3>
              <p className="text-graphite-500 text-base leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
