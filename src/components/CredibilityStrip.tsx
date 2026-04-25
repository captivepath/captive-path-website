import { useReveal } from '../hooks/useReveal';

const pillars = [
  {
    number: '01',
    title: 'Independent platform',
    subtitle: 'Owned ventures + selective engagements',
  },
  {
    number: '02',
    title: 'Selective opportunities',
    subtitle: 'Judgment before capacity',
  },
  {
    number: '03',
    title: 'Serious execution',
    subtitle: 'Strategy, systems, modern build',
  },
];

export function CredibilityStrip() {
  const ref = useReveal();

  return (
    <section ref={ref} className="border-y border-stone-200 section-fade-in">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-14 md:py-18">
        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {pillars.map((pillar) => (
            <div key={pillar.number} className="reveal">
              <span className="text-sm font-display font-medium text-teal-800 tracking-wider mb-3 block">
                {pillar.number}
              </span>
              <h3 className="font-display text-xl md:text-2xl font-semibold text-graphite-900 mb-2">
                {pillar.title}
              </h3>
              <p className="text-graphite-500 text-base leading-relaxed">
                {pillar.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
