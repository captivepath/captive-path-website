import { useReveal } from '../hooks/useReveal';

const audiences = [
  {
    label: 'Founders',
    description:
      'Viable ideas and a need for structure, traction, or build support.',
  },
  {
    label: 'Operators',
    description:
      'Clear sight of the opportunity but need a serious execution partner.',
  },
  {
    label: 'Businesses',
    description:
      'Launching new initiatives that require judgment, systems, and modern build capability.',
  },
];

export function WhoItsFor() {
  const ref = useReveal();

  return (
    <section ref={ref} className="py-22 md:py-30 section-fade-in border-y border-stone-200">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <p className="reveal text-xs font-display font-medium tracking-widest uppercase text-teal-800 mb-4">
          Who it's for
        </p>

        <h2 className="reveal font-display text-4xl md:text-5xl text-graphite-900 leading-tight font-bold mb-6">
          For people with something real to build.
        </h2>

        <p className="reveal text-graphite-600 text-lg leading-relaxed max-w-2xl mb-14 md:mb-18">
          Captive Path is best aligned with founders, operators, and emerging
          businesses that have credible potential but need stronger strategy,
          technical leverage, product direction, or execution support to move
          faster and more intelligently.
        </p>

        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-6">
          {audiences.map((item) => (
            <div
              key={item.label}
              className="reveal bg-stone-50 border border-stone-200 rounded-sm p-8 md:p-10 card-lift"
            >
              <p className="text-xs font-display font-semibold tracking-widest uppercase text-teal-800 mb-4">
                {item.label}
              </p>
              <p className="text-graphite-600 text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
