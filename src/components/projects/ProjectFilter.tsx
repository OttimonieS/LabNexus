import { useEffect, useRef, useState } from "react";

export default function ProjectFilter({
  active,
  onChange,
}: {
  active: string;
  onChange: (s: string) => void;
}) {
  const FILTERS: { key: string; label: string }[] = [
    { key: "all", label: "All" },
    { key: "full-stack", label: "Full Stack" },
    { key: "mobile", label: "Mobile" },
    { key: "ai", label: "AI" },
    { key: "web3", label: "Web3" },
    { key: "data", label: "Data" },
    { key: "identity", label: "Identity" },
    { key: "finance", label: "Finance" },
    { key: "experimental", label: "Experimental" },
  ];
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const update = () => {
      setShowLeft(el.scrollLeft > 10);
      setShowRight(el.scrollWidth - el.clientWidth - el.scrollLeft > 10);
    };

    update();
    el.addEventListener("scroll", update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(el);

    // also observe parent width in case the visible area changes
    if (el.parentElement) ro.observe(el.parentElement);

    return () => {
      el.removeEventListener("scroll", update);
      ro.disconnect();
    };
  }, [FILTERS.length]);

  const scrollBy = (amount: number) => {
    const el = containerRef.current;
    if (!el) return;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className="relative flex items-center">
      {/* Left arrow - Fixed position */}
      <button
        aria-label="Scroll left"
        onClick={() => scrollBy(-240)}
        className={`absolute left-0 z-20 flex-shrink-0 p-2 rounded-lg transition-all ${
          showLeft
            ? "bg-[rgba(0,229,255,0.1)] hover:bg-[rgba(0,229,255,0.2)] cursor-pointer"
            : "bg-transparent cursor-default opacity-40"
        }`}
        disabled={!showLeft}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-[#00E5FF]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Scrollable row */}
      <div className="overflow-hidden max-w-[800px] ml-12 mr-12">
        <div
          ref={containerRef}
          className="flex gap-3 overflow-x-auto no-scrollbar whitespace-nowrap py-2"
          role="tablist"
          aria-label="Project filters"
        >
          {FILTERS.map((filter) => (
            <button
              key={filter.key}
              onClick={() => onChange(filter.key)}
              aria-pressed={active === filter.key}
              role="tab"
              className={`inline-flex items-center justify-center min-w-[120px] px-4 py-2 rounded-lg font-medium transition-all text-center ${
                active === filter.key
                  ? "bg-gradient-to-r from-[#00E5FF] to-[#A4FF6F] text-[#0F172A] shadow-lg shadow-[rgba(0,229,255,0.3)]"
                  : "bg-[rgba(255,255,255,0.04)] hover:bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.06)]"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Right arrow - Fixed position */}
      <button
        aria-label="Scroll right"
        onClick={() => scrollBy(240)}
        className={`absolute right-0 z-20 flex-shrink-0 p-2 rounded-lg transition-all ${
          showRight
            ? "bg-[rgba(0,229,255,0.1)] hover:bg-[rgba(0,229,255,0.2)] cursor-pointer"
            : "bg-transparent cursor-default opacity-40"
        }`}
        disabled={!showRight}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-[#00E5FF]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}
