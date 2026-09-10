import { Reveal } from "../components/Reveal";
import { IMAGES } from "../lib/site";
import type { ManifestoChapter } from "../types";

const CHAPTERS: ManifestoChapter[] = [
  {
    number: "01",
    title: "Intentionality",
    line: "Nothing earns a place without a reason.",
  },
  {
    number: "02",
    title: "Architecture of form",
    line: "Silhouette first. Decoration, never.",
  },
  {
    number: "03",
    title: "Considered detail",
    line: "The quiet decisions are the loudest.",
  },
];

export function BrandStory() {
  return (
    <section
      id="story"
      data-testid="story-section"
      aria-labelledby="story-heading"
      className="bg-alabaster py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <figure className="relative">
              <div
                aria-hidden="true"
                className="absolute inset-0 -translate-x-3 translate-y-3 border border-navy/20"
              />
              <div className="relative aspect-4/5 overflow-hidden border border-navy/15 bg-ivory">
                <img
                  src={IMAGES.story}
                  alt="Studio study in monochrome — the quiet process behind Vyra Lane"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="mt-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-navy/50">
                <span>Fig. 02 — In the studio</span>
                <span>Vyra Lane</span>
              </figcaption>
            </figure>
          </Reveal>

          <div>
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-navy/50">
                03 — Our story
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                id="story-heading"
                className="mt-5 font-serif text-2xl font-light leading-[1.1] tracking-tight text-navy sm:text-3xl lg:text-4xl"
              >
                More than <em className="italic">clothing.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 text-base font-light leading-relaxed text-slate sm:text-lg">
                Vyra Lane began with a frustration — wardrobes full of noise and
                nothing to say. We started sketching the opposite: clothing
                reduced to its essentials, then refined until only the intention
                remained.
              </p>
              <p className="mt-5 text-base font-light leading-relaxed text-slate sm:text-lg">
                We think in silhouettes, seams and proportion — in how a
                shoulder sits and how a hem moves. The result is a small,
                deliberate body of work, designed slowly and edited without
                mercy.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-24">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-navy/50">
              The manifesto
            </p>
          </Reveal>
          <div className="mt-8 grid gap-10 md:grid-cols-3">
            {CHAPTERS.map((c, i) => (
              <Reveal key={c.number} delay={i * 0.12}>
                <article
                  data-testid={`manifesto-chapter-${i + 1}`}
                  className="border-t border-navy/15 pt-6"
                >
                  <p className="font-mono text-xs tracking-[0.3em] text-gold">
                    {c.number}
                  </p>
                  <h3 className="mt-4 font-serif text-xl font-normal tracking-normal text-navy sm:text-2xl">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-slate">
                    {c.line}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
