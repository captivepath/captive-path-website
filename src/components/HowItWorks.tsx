import { useReveal } from '../hooks/useReveal';

const steps = [
  {
    number: '01',
    title: 'Assess',
    description:
      'Understand the idea, the market, the wedge, and the practical upside.',
  },
  {
    number: '02',
    title: 'Refine',
    description:
      'Clarify the strategy, priorities, constraints, and execution path.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'Create the product, systems, or infrastructure required to move.',
  },
  {
    number: '04',
    title: 'Advance',
    description:
      'Continue selectively where the opportunity and alignment are strong.',
  },
];

export function HowItWorks() {
  const ref = useReveal();

  return (
    <section ref={ref} id="how" className="py-22 md:py-30">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section label */}
        <p className="reveal text-xs font-medium tracking-widest uppercase text-teal-800 mb-4">
          How it works
        </p>

        {/* Heading */}
        <h2 className="reveal font-display text-4xl md:text-5xl text-graphite-900 leading-tight mb-6">
          Clarity first. Then momentum.
        </h2>

        {/* Body */}
        <p className="reveal text-graphite-600 text-lg leading-relaxed max-w-2xl mb-14 md:mb-18">
          The process starts with understanding the opportunity, pressure-testing
          what matters, and identifying where real leverage exists. From there,
          Captive Path helps define direction, build the right foundation, and
          support the opportunities that justify deeper involvement.
        </p>

        {/* Steps — editorial list with line separators */}
        <div className="reveal-stagger">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`reveal flex flex-col md:flex-row md:items-start gap-4 md:gap-10 py-8 md:py-10 ${
                i < steps.length - 1 ? 'border-b border-stone-200' : ''
              } ${i === 0 ? 'border-t border-stone-200' : ''}`}
            >
              <span className="text-sm font-medium text-teal-800 tracking-wider md:w-16 shrink-0">
                {step.number}
              </span>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-graphite-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-graphite-500 text-base leading-relaxed max-w-lg">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
