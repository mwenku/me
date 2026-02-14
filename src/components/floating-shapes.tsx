const shapes = [
  {
    type: "circle",
    className: "floating-shape floating-shape-1",
    style: { top: "6%", left: "3%" },
    svg: (
      <svg width="180" height="180" viewBox="0 0 60 60" fill="none">
        <circle cx="30" cy="30" r="28" stroke="currentColor" strokeWidth="0.3" />
      </svg>
    ),
  },
  {
    type: "triangle",
    className: "floating-shape floating-shape-2",
    style: { top: "12%", right: "8%" },
    svg: (
      <svg width="160" height="160" viewBox="0 0 50 50" fill="none">
        <path d="M25 5L45 42H5L25 5Z" stroke="currentColor" strokeWidth="0.3" />
      </svg>
    ),
  },
  {
    type: "cross",
    className: "floating-shape floating-shape-3",
    style: { top: "42%", left: "5%" },
    svg: (
      <svg width="120" height="120" viewBox="0 0 36 36" fill="none">
        <path d="M18 4V32M4 18H32" stroke="currentColor" strokeWidth="0.3" />
      </svg>
    ),
  },
  {
    type: "square",
    className: "floating-shape floating-shape-4",
    style: { top: "68%", right: "4%" },
    svg: (
      <svg width="140" height="140" viewBox="0 0 40 40" fill="none">
        <rect x="4" y="4" width="32" height="32" stroke="currentColor" strokeWidth="0.3" />
      </svg>
    ),
  },
  {
    type: "dots",
    className: "floating-shape floating-shape-5",
    style: { top: "28%", right: "22%" },
    svg: (
      <svg width="140" height="140" viewBox="0 0 44 44" fill="none">
        <circle cx="8" cy="8" r="1.5" fill="currentColor" />
        <circle cx="22" cy="8" r="1.5" fill="currentColor" />
        <circle cx="36" cy="8" r="1.5" fill="currentColor" />
        <circle cx="8" cy="22" r="1.5" fill="currentColor" />
        <circle cx="22" cy="22" r="1.5" fill="currentColor" />
        <circle cx="36" cy="22" r="1.5" fill="currentColor" />
        <circle cx="8" cy="36" r="1.5" fill="currentColor" />
        <circle cx="22" cy="36" r="1.5" fill="currentColor" />
        <circle cx="36" cy="36" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    type: "hexagon",
    className: "floating-shape floating-shape-6",
    style: { top: "55%", left: "12%" },
    svg: (
      <svg width="160" height="160" viewBox="0 0 48 48" fill="none">
        <path
          d="M24 4L43 14V34L24 44L5 34V14L24 4Z"
          stroke="currentColor"
          strokeWidth="0.3"
        />
      </svg>
    ),
  },
  {
    type: "wave",
    className: "floating-shape floating-shape-7",
    style: { top: "82%", left: "25%" },
    svg: (
      <svg width="240" height="72" viewBox="0 0 80 24" fill="none">
        <path
          d="M0 12C10 4 20 20 30 12C40 4 50 20 60 12C70 4 80 20 80 12"
          stroke="currentColor"
          strokeWidth="0.25"
          fill="none"
        />
      </svg>
    ),
  },
  {
    type: "diamond",
    className: "floating-shape floating-shape-8",
    style: { top: "3%", left: "42%" },
    svg: (
      <svg width="120" height="120" viewBox="0 0 32 32" fill="none">
        <path d="M16 2L30 16L16 30L2 16L16 2Z" stroke="currentColor" strokeWidth="0.3" />
      </svg>
    ),
  },
  {
    type: "arc",
    className: "floating-shape floating-shape-9",
    style: { top: "48%", right: "10%" },
    svg: (
      <svg width="160" height="160" viewBox="0 0 50 50" fill="none">
        <path
          d="M5 40C5 20 20 5 40 5"
          stroke="currentColor"
          strokeWidth="0.3"
          fill="none"
        />
      </svg>
    ),
  },
  {
    type: "small-circle",
    className: "floating-shape floating-shape-10",
    style: { top: "72%", left: "48%" },
    svg: (
      <svg width="80" height="80" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="0.25" />
      </svg>
    ),
  },
];

export const FloatingShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {shapes.map((shape) => (
        <div
          key={shape.type}
          className={shape.className}
          style={shape.style}
        >
          {shape.svg}
        </div>
      ))}
    </div>
  );
};
