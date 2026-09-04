import { useEffect, useState } from "react";
import type { MouseEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { scrollToId, setScrollLocked } from "../lib/scroll";
import { EASE } from "../lib/motion";

const LINKS = [
  { label: "About", id: "about" },
  { label: "Collection", id: "collection" },
  { label: "Our Story", id: "story" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setScrollLocked(open);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      setScrollLocked(false);
    };
  }, [open]);

  const go = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      scrollToId(id);
    }
    setOpen(false);
  };

  return (
    <>
      <header
        data-testid="navbar"
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-500 ${
          open
            ? "border-b border-transparent"
            : scrolled
              ? "border-b border-navy/10 bg-ivory/85 backdrop-blur-md"
              : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-12"
        >
          <a
            href="/"
            data-testid="nav-logo"
            aria-label="Vyra Lane — home"
            className="relative z-50 block mt-3.5 sm:mt-4  md:-ml-12.5 -ml-8.5"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                scrollToId("top");
              }
              setOpen(false);
            }}
          >
            <img
              src={open ? "/logo-light.png" : "/logo.png"}
              alt="Vyra Lane"
              className="h-20 w-auto sm:h-30"
            />
          </a>

          <ul className="hidden items-center gap-9 lg:flex">
            {LINKS.map((l) => (
              <li key={l.id}>
                <a
                  href={`/#${l.id}`}
                  data-testid={`nav-link-${l.id}`}
                  onClick={(e) => go(e, l.id)}
                  className="font-mono text-[11px] uppercase tracking-[0.25em] text-navy/70 transition-colors duration-300 hover:text-navy"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/#waitlist"
                data-testid="nav-join-button"
                onClick={(e) => go(e, "waitlist")}
                className="inline-flex items-center gap-2 bg-navy px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.25em] text-ivory transition-colors duration-300 hover:bg-midnight"
              >
                Join the waitlist
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </li>
          </ul>

          <button
            type="button"
            data-testid="mobile-menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
            className="relative z-50 -mr-2 p-2 lg:hidden"
          >
            {open ? (
              <X className="h-6 w-6 text-ivory" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6 text-navy" aria-hidden="true" />
            )}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-menu"
              data-testid="mobile-menu"
              className="dark-surface fixed inset-0 z-40 flex flex-col bg-navy lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: EASE }}
            >
              <div className="flex flex-1 flex-col justify-center px-8 pb-16 pt-24">
                <ul className="space-y-1">
                  {LINKS.map((l, i) => (
                    <li key={l.id} className="overflow-hidden">
                      <motion.a
                        href={`/#${l.id}`}
                        data-testid={`mobile-nav-link-${l.id}`}
                        onClick={(e) => go(e, l.id)}
                        className="block py-2 font-serif text-5xl font-light text-ivory"
                        initial={{ y: "110%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "110%" }}
                        transition={{
                          duration: 0.7,
                          delay: 0.1 + i * 0.08,
                          ease: EASE,
                        }}
                      >
                        {l.label}
                      </motion.a>
                    </li>
                  ))}
                </ul>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
                >
                  <a
                    href="/#waitlist"
                    data-testid="mobile-nav-join-button"
                    onClick={(e) => go(e, "waitlist")}
                    className="mt-12 inline-flex items-center gap-3 border border-ivory/40 px-8 py-4 font-mono text-xs uppercase tracking-[0.25em] text-ivory transition-colors duration-300 hover:bg-ivory hover:text-navy"
                  >
                    Join the waitlist
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <p className="mt-12 font-mono text-[10px] uppercase tracking-[0.3em] text-ivory/40">
                    Clarity over excess — MMXXVI
                  </p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
