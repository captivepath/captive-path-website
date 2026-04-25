import { useReveal } from '../hooks/useReveal';
import { WhatWeDo } from '../components/WhatWeDo';
import { WhoItsFor } from '../components/WhoItsFor';
import { FocusAreas } from '../components/FocusAreas';
import { ClosingCTA } from '../components/ClosingCTA';

function AboutHero() {
  const ref = useReveal();
  return (
    <section ref={ref} className="pt-32 pb-20 md:pt-40 md:pb-26 section-fade-in">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <p className="reveal text-xs font-display font-medium tracking-widest uppercase text-teal-800 mb-4">
          About Captive Path
        </p>
        <h1 className="reveal font-display text-4xl sm:text-5xl md:text-6xl text-graphite-900 leading-tight font-bold mb-6 max-w-3xl">
          An independent venture platform built for <span className="text-highlight">serious</span> work.
        </h1>
        <p className="reveal text-graphite-600 text-lg md:text-xl leading-relaxed max-w-2xl">
          Captive Path exists to evaluate, shape and build selected opportunities.
          It is not a consulting firm, an agency, or an accelerator. It is a focused
          platform for the work that sits between vision and execution.
        </p>
      </div>
    </section>
  );
}

function FounderSection() {
  const ref = useReveal();
  return (
    <section ref={ref} className="py-22 md:py-30 bg-graphite-900 text-stone-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16 items-start">
          {/* Photo */}
          <div className="reveal md:col-span-2">
            <div className="photo-editorial rounded-sm overflow-hidden">
              <img
                src="/images/zach-warshawsky.jpg"
                alt="Zach Warshawsky, Founder of Captive Path"
                className="w-full h-auto object-cover grayscale-[20%] contrast-[1.05]"
              />
            </div>
            <div className="mt-6 flex items-center gap-3">
              <div className="h-px w-10 bg-teal-700" />
              <span className="text-sm text-teal-400 font-display font-medium tracking-wide">
                Zach Warshawsky
              </span>
            </div>
          </div>

          {/* Bio */}
          <div className="md:col-span-3">
            <p className="reveal text-xs font-display font-medium tracking-widest uppercase text-teal-400 mb-4">
              Founder
            </p>
            <h2 className="reveal font-display text-3xl md:text-4xl text-stone-50 leading-tight font-bold mb-8">
              Led by <span className="text-highlight-light">operator judgment.</span>
            </h2>
            <div className="space-y-5">
              <p className="reveal text-stone-300 text-lg leading-relaxed">
                Captive Path is founded and led by Zach Warshawsky, whose background
                spans technology, operations, systems, growth and venture building.
                The advantage is not just access to tools... it is the ability to
                combine strategic thinking with real execution leverage across modern
                platforms and workflows.
              </p>
              <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-px bg-graphite-700 border-2 border-graphite-700 rounded-sm overflow-hidden">
                <div className="bg-graphite-800 p-5 md:p-6">
                  <span className="block font-display text-2xl md:text-3xl font-bold text-teal-400 mb-1">20+</span>
                  <span className="text-stone-400 text-sm leading-snug">Years across technology &amp; operations</span>
                </div>
                <div className="bg-graphite-800 p-5 md:p-6">
                  <span className="block font-display text-2xl md:text-3xl font-bold text-teal-400 mb-1">Multi-domain</span>
                  <span className="text-stone-400 text-sm leading-snug">Systems, growth, venture building</span>
                </div>
                <div className="bg-graphite-800 p-5 md:p-6">
                  <span className="block font-display text-2xl md:text-3xl font-bold text-teal-400 mb-1">Operator-led</span>
                  <span className="text-stone-400 text-sm leading-snug">Strategy paired with real execution</span>
                </div>
              </div>
              <blockquote className="reveal border-l-2 border-teal-700 pl-5">
                <p className="text-stone-300 text-lg font-display font-medium italic leading-relaxed">
                  "Judgment first. Capability second. Tools third."
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <>
      <AboutHero />
      <WhatWeDo />
      <WhoItsFor />
      <FounderSection />
      <FocusAreas />
      <ClosingCTA />
    </>
  );
}
