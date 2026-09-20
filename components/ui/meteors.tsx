"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type MeteorSpec = {
  left: number;
  delay: string;
  duration: string;
};

/** Fixed discrete values — identical on server and client */
function buildMeteors(count: number): MeteorSpec[] {
  return Array.from({ length: count }, (_, idx) => ({
    left: Math.round(idx * (800 / count) - 400),
    delay: `${((idx * 7) % 20) / 4}s`,
    duration: `${5 + (idx % 5)}s`,
  }));
}

export const Meteors = ({
  number = 16,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const [mounted, setMounted] = useState(false);
  const meteors = buildMeteors(number);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Avoid SSR/client style serialization mismatches entirely
  if (!mounted) {
    return <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden />;
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {meteors.map((m, idx) => (
        <span
          key={`meteor-${idx}`}
          className={cn(
            "animate-meteor-effect absolute h-0.5 w-0.5 rotate-[215deg] rounded-[9999px] bg-accent",
            "before:absolute before:top-1/2 before:h-px before:w-10 before:-translate-y-1/2 before:bg-gradient-to-r before:from-accent before:to-transparent before:content-['']",
            className,
          )}
          style={{
            top: "-40px",
            left: `${m.left}px`,
            animationDelay: m.delay,
            animationDuration: m.duration,
          }}
        />
      ))}
    </div>
  );
};
