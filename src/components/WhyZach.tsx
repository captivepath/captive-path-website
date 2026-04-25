import { useReveal } from '../hooks/useReveal';

export function WhyZach() {
  const ref = useReveal();

  return (
    <section
      ref={ref}
      className="py-22 md:py-30 bg-graphite-900 text-stone-100"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          {/* Section label */}
          <p className="reveal text-xs font-medium tracking-widest uppercase text-teal-400 mb-4">
            Founder
          </p>

          {/* Heading */}
          <h2 className="reveal font-display text-4xl md:text-5xl text-stone-50 leading-tight mb-8">
            Led by operator judgment.
          </h2>

          {/* Body */}
          <p className="reveal text-stone-300 text-lg leading-relaxed mb-6">
            Captive Path is founded and led by Zach Warshawsky, whose background
            spans technology, operations, systems, growth, and venture building.
            The advantage is not just access to tools — it is the ability to
            combine strategic thinking with real execution leverage across modern
            platforms and workflows.
          </p>

          {/* Supporting line */}
          <p className="reveal text-stone-400 text-base leading-relaxed">
            Two decades across technology, operations, systems, and growth —
            applied to what's worth building.
          </p>

          {/* Decorative line motif */}
          <div className="reveal mt-12 flex items-center gap-3">
            <div className="h-px w-12 bg-teal-700" />
            <span className="text-sm text-teal-400 font-medium tracking-wide">
              Zach Warshawsky
            </span>
            <div className="h-px flex-1 bg-graphite-700" />
          </div>
        </div>
      </div>
    </section>
  );
}
