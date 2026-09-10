import { Reveal } from "../components/Reveal";

export function BrandIntro() {
  return (
    <section
      id="about"
      data-testid="brand-intro-section"
      aria-labelledby="about-heading"
      className="py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-navy/50">
              01 — The brand
            </p>
            <hr className="mt-4 h-px w-16 border-0 bg-navy/20" />
          </Reveal>

          <div className="lg:col-span-9">
            <Reveal delay={0.1}>
              <h2
                id="about-heading"
                className="max-w-3xl font-serif text-2xl font-light leading-[1.1] tracking-tight text-navy sm:text-3xl lg:text-4xl"
              >
                Designed with <em className="italic">intention.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-2xl text-base font-light leading-relaxed text-slate sm:text-lg">
                Vyra Lane is an independent clothing label built on a simple
                belief — that fewer, better things make the stronger statement.
                Every silhouette is considered, every detail deliberate. We
                design slowly, edit ruthlessly, and keep only what earns its
                place.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-16 max-w-4xl font-serif text-2xl font-light italic leading-snug text-navy/80 sm:text-3xl lg:text-4xl">
                &ldquo;We keep only what earns its place.&rdquo;
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
