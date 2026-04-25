import { useReveal } from '../hooks/useReveal';

interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

const articles: Article[] = [
  {
    slug: 'evaluating-venture-ideas',
    title: 'The framework for evaluating venture-stage ideas',
    excerpt:
      'Most ideas feel good on the surface. The difference between a viable venture and an expensive experiment comes down to how rigorously you pressure-test the fundamentals before committing resources.',
    date: 'Coming soon',
    category: 'Venture Analysis',
  },
  {
    slug: 'systems-over-hustle',
    title: 'Systems over hustle: why infrastructure decides outcomes',
    excerpt:
      'The ventures that scale reliably are not the ones with the most energy — they are the ones with the best systems. Building repeatable infrastructure early changes everything that follows.',
    date: 'Coming soon',
    category: 'Strategy',
  },
  {
    slug: 'incubation-model',
    title: 'What a modern incubation model actually looks like',
    excerpt:
      'Traditional incubation is broken. The best opportunities need more than office space and mentorship — they need strategic clarity, technical capability, and real execution support.',
    date: 'Coming soon',
    category: 'Incubation',
  },
];

const categories = ['All', 'Venture Analysis', 'Strategy', 'Incubation'];

function JournalHero() {
  const ref = useReveal();
  return (
    <section ref={ref} className="pt-32 pb-16 md:pt-40 md:pb-20 section-fade-in">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <p className="reveal text-xs font-display font-medium tracking-widest uppercase text-teal-800 mb-4">
          Journal
        </p>
        <h1 className="reveal font-display text-4xl sm:text-5xl md:text-6xl text-graphite-900 leading-tight font-bold mb-6 max-w-3xl">
          Ideas, analysis, and operating perspective.
        </h1>
        <p className="reveal text-graphite-600 text-lg md:text-xl leading-relaxed max-w-2xl">
          Writing on venture evaluation, strategy, incubation, and the work of
          building things that matter.
        </p>
      </div>
    </section>
  );
}

function ArticleList() {
  const ref = useReveal();
  return (
    <section ref={ref} className="pb-22 md:pb-30">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Category filters */}
        <div className="reveal flex flex-wrap gap-3 mb-12 md:mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 text-sm font-medium rounded-sm transition-colors duration-200 ${
                cat === 'All'
                  ? 'bg-graphite-900 text-stone-50'
                  : 'bg-stone-100 text-graphite-600 hover:bg-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Article cards */}
        <div className="reveal-stagger space-y-0">
          {articles.map((article, i) => (
            <article
              key={article.slug}
              className={`reveal group py-10 md:py-12 ${
                i < articles.length - 1 ? 'border-b border-stone-200' : ''
              } ${i === 0 ? 'border-t border-stone-200' : ''}`}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-10">
                <div className="md:w-36 shrink-0">
                  <span className="text-xs font-display font-medium tracking-wider uppercase text-teal-800">
                    {article.category}
                  </span>
                  <p className="text-sm text-graphite-400 mt-1">{article.date}</p>
                </div>
                <div className="flex-1">
                  <h2 className="font-display text-2xl md:text-3xl font-semibold text-graphite-900 leading-snug mb-3 group-hover:text-teal-800 transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-graphite-500 text-base leading-relaxed max-w-2xl">
                    {article.excerpt}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* More coming soon */}
        <div className="reveal mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-stone-100 rounded-sm">
            <div className="w-2 h-2 bg-teal-600 rounded-full animate-pulse" />
            <p className="text-sm font-medium text-graphite-600">
              More articles coming soon
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Journal() {
  return (
    <>
      <JournalHero />
      <ArticleList />
    </>
  );
}
