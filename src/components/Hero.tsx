import { useRef } from "react";
import type { MouseEvent, ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { scrollToId } from "../lib/scroll";
import { IMAGES } from "../lib/site";
import { EASE } from "../lib/motion";

function MaskedLine({
  children,
  delay,
}: {
  children: ReactNode;
  delay: number;
}) {
  const reduce = useReducedMotion();
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="mb-[-0.12em] block pb-[0.12em]"
        initial={reduce ? false : { y: "112%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1.1, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  const go = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollToId(id);
  };

  return (
    <section
      ref={ref}
      id="top"
      aria-labelledby="hero-heading"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden pb-14 pt-28 sm:pt-36"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <motion.p
              className="font-mono text-[11px] uppercase tracking-[0.3em] text-navy/50"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Pre-launch — Autumn / Winter 2026
            </motion.p>

            <h1
              id="hero-heading"
              data-testid="hero-headline"
              className="mt-2 font-serif text-[clamp(3.4rem,10vw,6rem)] font-light leading-[1.02] tracking-tight text-navy"
            >
              <MaskedLine delay={0.2}>Clarity</MaskedLine>
              <MaskedLine delay={0.35}>
                <em className="italic">over</em>
              </MaskedLine>
              <MaskedLine delay={0.5}>excess.</MaskedLine>
            </h1>

            <motion.hr
              aria-hidden="true"
              className="mt-10 h-px w-24 origin-left border-0 bg-navy/30"
              initial={reduce ? false : { scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.75, ease: EASE }}
            />

            <motion.p
              data-testid="hero-subtext"
              className="mt-8 max-w-md text-base font-light leading-relaxed text-slate sm:text-lg"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.9, ease: EASE }}
            >
              Something new is coming. Thoughtfully designed clothing from an
              independent label — join the waitlist and be the first to know
              when we launch.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap items-center gap-6"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.05, ease: EASE }}
            >
              <a
                href="#waitlist"
                data-testid="hero-cta-button"
                onClick={(e) => go(e, "waitlist")}
                className="group inline-flex items-center gap-3 bg-navy px-8 py-4 font-mono text-xs uppercase tracking-[0.25em] text-ivory transition-colors duration-300 hover:bg-midnight"
              >
                Join the waitlist
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
              <a
                href="#story"
                onClick={(e) => go(e, "story")}
                className="link-underline font-mono text-xs uppercase tracking-[0.25em] text-navy/70 hover:text-navy"
              >
                Discover the story
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <motion.figure
              initial={reduce ? false : { clipPath: "inset(0 0 100% 0)" }}
              animate={{ clipPath: "inset(0 0 0% 0)" }}
              transition={{ duration: 1.3, delay: 0.55, ease: EASE }}
              className="relative"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-3 translate-y-3 border border-navy/20"
              />
              <div className="relative aspect-4/5 overflow-hidden border border-navy/15 bg-alabaster sm:aspect-3/4">
                <motion.div style={{ y: imgY }} className="absolute inset-0">
                  <img
                    src={IMAGES.hero}
                    alt="Editorial portrait in deep navy and ivory tones — a first glimpse of the Vyra Lane aesthetic"
                    className="h-full w-full scale-[1.15] object-cover"
                    loading="eager"
                  />
                </motion.div>
              </div>
              <figcaption className="mt-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-navy/50">
                <span>Fig. 01 — First silhouette</span>
                <span>Forthcoming</span>
              </figcaption>
            </motion.figure>
          </div>
        </div>

        <motion.div
          className="mt-16 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-navy/40"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
        >
          <span>Est. 2026</span>
          <span className="hidden sm:inline">Designed with intention</span>
          <span className="flex items-center gap-2">
            Scroll
            <motion.span
              animate={reduce ? undefined : { y: [0, 5, 0] }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
            </motion.span>
          </span>
        </motion.div>
      </div>
    </section>
  );
}
