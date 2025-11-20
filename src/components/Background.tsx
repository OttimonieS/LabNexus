import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

export default function Background() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [prefersReducedMotion]);

  return (
    <>
      <div
        className="fixed top-0 left-0 w-1/3 h-1/3 opacity-[0.06] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #0D6EFD 0%, transparent 70%)",
          filter: "blur(36px)",
          transform: prefersReducedMotion
            ? "none"
            : `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
        }}
      />
      <div
        className="fixed bottom-0 right-0 w-1/3 h-1/3 opacity-[0.06] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #A4FF6F 0%, transparent 70%)",
          filter: "blur(36px)",
          transform: prefersReducedMotion
            ? "none"
            : `translate(${-mousePosition.x * 20}px, ${
                -mousePosition.y * 20
              }px)`,
        }}
      />
    </>
  );
}
