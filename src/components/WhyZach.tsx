import { useReveal } from '../hooks/useReveal';

interface WhyZachProps {
  expanded?: boolean;
}

export function WhyZach({ expanded = false }: WhyZachProps) {
  const ref = useReveal();

  return (
    <section
      ref={ref}
      className="py-22 md:py-30 bg-graphite-900 text-stone-100 relative overflow-hidden"
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <div className={`${expanded ? '' : 'grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center'}`}>
          {/* Text content */}
          <div className={expanded ? 'max-w-3xl' : ''}>
            <p className="reveal text-xs font-display font-medium tracking-widest uppercase text-teal-400 mb-4">
              Founder
            </p>

            <h2 className="reveal font-display text-4xl md:text-5xl text-stone-50 leading-tight font-bold mb-8">
              Led by <span className="text-highlight-light">operator judgment.</span>
            </h2>

            <p className="reveal text-stone-300 text-lg leading-relaxed mb-6">
              Captive Path is founded and led by Zach Warshawsky, whose background
              spans technology, operations, systems, growth, and venture building.
              The advantage is not just access to tools — it is the ability to
              combine strategic thinking with real execution leverage across modern
              platforms and workflows.
            </p>

            <p className="reveal text-stone-400 text-base leading-relaxed mb-8">
              Two decades across technology, operations, systems, and growth —
              applied to what's worth building.
            </p>

            {/* Decorative line motif */}
            <div className="reveal flex items-center gap-3">
              <div className="h-px w-12 bg-teal-700" />
              <span className="text-sm text-teal-400 font-display font-medium tracking-wide">
                Zach Warshawsky
              </span>
              <div className="h-px flex-1 bg-graphite-700 max-w-32" />
            </div>
          </div>

          {/* Photo */}
          {!expanded && (
            <div className="reveal flex justify-center md:justify-end">
              <div className="photo-editorial rounded-sm w-72 md:w-80 aspect-[4/5] overflow-hidden">
                <img
                  src="/images/zach-warshawsky.jpg"
                  alt="Zach Warshawsky — Founder of Captive Path"
                  className="w-full h-full object-cover object-top grayscale-[20%] contrast-[1.05]"
                  loading="lazy"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
