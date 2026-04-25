import { useReveal } from '../hooks/useReveal';

const focuses = [
  'Venture shaping and opportunity evaluation',
  'Product and execution strategy',
  'Systems and operating infrastructure',
  'AI-assisted research, planning, and build acceleration — used as leverage, not hype',
  'Selective venture support, incubation, or partnership',
];

export function FocusAreas() {
  const ref = useReveal();

  return (
    <section ref={ref} className="py-22 md:py-30 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section label */}
        <p className="reveal text-xs font-medium tracking-widest uppercase text-teal-800 mb-4">
          Focus areas
        </p>

        {/* Heading */}
        <h2 className="reveal font-display text-4xl md:text-5xl text-graphite-900 leading-tight mb-14 md:mb-18">
          Where Captive Path creates the most leverage.
        </h2>

        {/* Focus list — editorial treatment */}
        <div className="reveal-stagger">
          {focuses.map((item, i) => (
            <div
              key={i}
              className={`reveal flex items-start gap-5 py-6 md:py-7 ${
                i < focuses.length - 1 ? 'border-b border-stone-200' : ''
              } ${i === 0 ? 'border-t border-stone-200' : ''}`}
            >
              <span className="text-teal-700 mt-0.5 shrink-0">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M3 10h14M12 5l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <p className="text-graphite-700 text-lg leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
