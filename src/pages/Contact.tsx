import { useReveal } from '../hooks/useReveal';

function ContactHero() {
  const ref = useReveal();
  return (
    <section ref={ref} className="pt-32 pb-20 md:pt-40 md:pb-26 section-fade-in">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <p className="reveal text-xs font-display font-medium tracking-widest uppercase text-teal-800 mb-4">
          Contact
        </p>
        <h1 className="reveal font-display text-4xl sm:text-5xl md:text-6xl text-graphite-900 leading-tight font-bold mb-6 max-w-3xl">
          Start a conversation.
        </h1>
        <p className="reveal text-graphite-600 text-lg md:text-xl leading-relaxed max-w-2xl">
          If you have an opportunity worth exploring, Captive Path is built for
          the conversation that helps determine what it deserves next.
        </p>
      </div>
    </section>
  );
}

function ContactForm() {
  const ref = useReveal();
  return (
    <section ref={ref} className="pb-22 md:pb-30">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16">
          {/* Form */}
          <div className="md:col-span-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const name = (form.elements.namedItem('name') as HTMLInputElement).value;
                const email = (form.elements.namedItem('email') as HTMLInputElement).value;
                const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
                window.location.href = `mailto:zach@captivepath.com?subject=${encodeURIComponent(`Captive Path inquiry from ${name}`)}&body=${encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`)}`;
              }}
              className="space-y-6"
            >
              <div className="reveal">
                <label htmlFor="name" className="block text-sm font-medium text-graphite-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-sm text-graphite-800 text-base placeholder:text-graphite-400 focus:outline-none focus:border-teal-700 focus:ring-1 focus:ring-teal-700 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div className="reveal">
                <label htmlFor="email" className="block text-sm font-medium text-graphite-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-sm text-graphite-800 text-base placeholder:text-graphite-400 focus:outline-none focus:border-teal-700 focus:ring-1 focus:ring-teal-700 transition-colors"
                  placeholder="you@example.com"
                />
              </div>

              <div className="reveal">
                <label htmlFor="message" className="block text-sm font-medium text-graphite-700 mb-2">
                  What are you working on?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-sm text-graphite-800 text-base placeholder:text-graphite-400 focus:outline-none focus:border-teal-700 focus:ring-1 focus:ring-teal-700 transition-colors resize-y"
                  placeholder="Briefly describe the opportunity or idea you'd like to explore."
                />
              </div>

              <div className="reveal">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-8 py-4 bg-teal-800 text-stone-50 text-sm font-medium tracking-wide rounded hover:bg-teal-700 transition-all duration-200 hover:shadow-lg hover:shadow-teal-900/20"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>

          {/* Sidebar info */}
          <div className="md:col-span-2">
            <div className="reveal brand-line pl-6 mb-10">
              <h3 className="font-display font-semibold text-graphite-900 text-lg mb-3">
                Direct contact
              </h3>
              <a
                href="mailto:zach@captivepath.com"
                className="text-teal-800 text-base hover:text-teal-700 transition-colors link-underline"
              >
                zach@captivepath.com
              </a>
            </div>

            <div className="reveal brand-line pl-6 mb-10">
              <h3 className="font-display font-semibold text-graphite-900 text-lg mb-3">
                What to include
              </h3>
              <ul className="space-y-2 text-graphite-500 text-sm leading-relaxed">
                <li>What you're building or exploring</li>
                <li>Where you are in the process</li>
                <li>What kind of support you're looking for</li>
                <li>Any relevant timeline or constraints</li>
              </ul>
            </div>

            <div className="reveal brand-line pl-6">
              <h3 className="font-display font-semibold text-graphite-900 text-lg mb-3">
                Response time
              </h3>
              <p className="text-graphite-500 text-sm leading-relaxed">
                Expect a response within 1–2 business days. Every serious inquiry
                gets direct attention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <>
      <ContactHero />
      <ContactForm />
    </>
  );
}
