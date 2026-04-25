export function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-6 md:px-10 w-full py-20 md:py-30">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="text-sm font-medium tracking-widest uppercase text-teal-800 mb-6 md:mb-8">
            Independent venture platform
          </p>

          {/* Headline */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-graphite-900 leading-[1.05] tracking-tight mb-8 md:mb-10">
            A venture platform for what's worth building.
          </h1>

          {/* Subhead */}
          <p className="text-lg md:text-xl text-graphite-600 leading-relaxed max-w-2xl mb-10 md:mb-14">
            Captive Path builds, backs, and helps shape selected ventures
            through strategy, systems, and modern technical execution.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-teal-800 text-stone-50 text-sm font-medium tracking-wide rounded hover:bg-teal-700 transition-colors duration-200"
            >
              Start a conversation
            </a>
            <a
              href="#how"
              className="inline-flex items-center justify-center px-7 py-3.5 border border-graphite-800 text-graphite-800 text-sm font-medium tracking-wide rounded hover:bg-graphite-800 hover:text-stone-50 transition-colors duration-200"
            >
              See how it works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
