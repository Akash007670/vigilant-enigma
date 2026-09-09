const ITEMS = [
  "Clarity over excess",
  "Something new is coming",
  "Designed with intention",
  "The first collection — coming soon",
  "Vyra Lane",
];

export function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div
      data-testid="marquee"
      aria-hidden="true"
      className="select-none overflow-hidden border-y border-navy/10 bg-alabaster py-5"
    >
      <div className="marquee-track flex w-max items-center whitespace-nowrap">
        {row.map((text, i) => (
          <span key={i} className="flex items-center pr-10">
            <span className="pr-10 font-serif text-xl font-light italic text-navy/80">
              {text}
            </span>
            <span className="block h-1.5 w-1.5 rotate-45 bg-gold/70" />
          </span>
        ))}
      </div>
    </div>
  );
}
