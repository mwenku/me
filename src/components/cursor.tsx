import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleMouseDown = () => setClicking(true);
    const handleMouseUp = () => setClicking(false);
    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [visible]);

  return (
    <>
      <div
        className="fixed top-0 left-0 z-[1] w-[500px] h-[500px] bg-orange-300 blur-3xl opacity-15 rounded-full pointer-events-none"
        style={{
          transform: `translate(${position.x - 250}px, ${position.y - 250}px)`,
        }}
      />
      <div
        className="fixed top-0 left-0 z-[9999] pointer-events-none transition-transform duration-150 ease-out"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${clicking ? 0.85 : 1})`,
          opacity: visible ? 1 : 0,
        }}
      >
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path
            d="M2 2L11 25L14.5 15.5L24 11L2 2Z"
            fill="hsl(var(--foreground))"
            stroke="hsl(var(--background))"
            strokeWidth="1"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </>
  );
};

export default CustomCursor;
