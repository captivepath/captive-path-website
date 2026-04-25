import { useReveal } from '../hooks/useReveal';

export function CredibilityStrip() {
  const ref = useReveal();

  return (
    <section ref={ref} className="border-y border-stone-200 section-fade-in">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-14 md:py-18">
        <div className="reveal brand-line pl-6">
          <p className="font-display text-2xl md:text-3xl text-graphite-800 font-medium leading-snug max-w-3xl">
            Independent platform. Selective opportunities. Serious execution.
          </p>
          <p className="mt-5 text-graphite-500 text-base leading-relaxed max-w-2xl">
            Captive Path is the independent company behind Zach Warshawsky's
            venture-building, strategic execution, and new initiative work. It is
            built for opportunities that deserve more than generic services.
          </p>
        </div>
      </div>
    </section>
  );
}
