import { useReveal } from '../hooks/useReveal';

export function ClosingCTA() {
  const ref = useReveal();

  return (
    <section ref={ref} id="contact" className="py-22 md:py-30">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl">
          {/* Heading */}
          <h2 className="reveal font-display text-4xl md:text-5xl text-graphite-900 leading-tight mb-6">
            If it's worth building, it's worth evaluating seriously.
          </h2>

          {/* Body */}
          <p className="reveal text-graphite-600 text-lg leading-relaxed mb-10 md:mb-14">
            The best opportunities are usually not the loudest ones. If something
            has real potential, Captive Path is built for the conversation that
            helps determine what it deserves next.
          </p>

          {/* CTA */}
          <div className="reveal">
            <a
              href="mailto:zach@captivepath.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-teal-800 text-stone-50 text-sm font-medium tracking-wide rounded hover:bg-teal-700 transition-colors duration-200"
            >
              Start a conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
