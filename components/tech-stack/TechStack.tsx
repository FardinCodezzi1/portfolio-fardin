"use client";

import React, { useState, useRef, useMemo, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimationFrame, AnimatePresence } from "framer-motion";
import { techLabel, techSlug } from "@/components/ui/tech-icon";
import { fadeIn, sectionViewport } from "@/lib/animations";
import { expertiseGroups, type TechId } from "@/lib/data";

// --- Helper for Tech Icon URLs ---
function skillSrc(id: TechId) {
  if (id === "framer" || id === "quasar") {
    const map: Record<string, string> = {
      framer: "framer",
      quasar: "quasar",
    };
    return `https://cdn.simpleicons.org/${map[id]}/e2b714`;
  }
  return `https://skillicons.dev/icons?i=${techSlug(id)}`;
}

// --- Sub-component: Orbiting Tech Planet ---
function PlanetIcon({
  data,
  angle,
  orbitWidth,
  orbitHeight,
  setGlobalPaused,
  systemRotation,
}: {
  data: { id: TechId; label: string; groupLabel: string };
  angle: number;
  orbitWidth: number;
  orbitHeight: number;
  setGlobalPaused: (paused: boolean) => void;
  systemRotation: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const TARGET_ANGLE = Math.PI / 2;
  const TRIGGER_WINDOW = 0.25;

  const normalizedAngle = useMemo(() => {
    let clg = angle % (2 * Math.PI);
    if (clg < 0) clg += 2 * Math.PI;
    return clg;
  }, [angle]);

  const isWithinAutoplayZone = useMemo(() => {
    const angleDifference = Math.abs(normalizedAngle - TARGET_ANGLE);
    const circularDifference = Math.min(
      angleDifference,
      2 * Math.PI - angleDifference
    );
    return circularDifference <= TRIGGER_WINDOW;
  }, [normalizedAngle, TARGET_ANGLE, TRIGGER_WINDOW]);

  const x = Math.cos(angle) * orbitWidth;
  const y = Math.sin(angle) * orbitHeight;
  
  // Front icons pass in front of central avatar (z-index 40 > 20)
  // Back icons pass behind central avatar (z-index 5 < 20)
  const isFront = y > 0;
  const showTooltip = isHovered || (isWithinAutoplayZone && isFront);

  return (
    <motion.div
      className="absolute top-1/2 left-1/2"
      style={{ x, y, zIndex: isFront ? 40 : 5 }}
    >
      <div
        style={{
          transform: "translate(-50%, -50%)",
          rotate: `${-systemRotation}deg`,
        }}
        className="relative flex flex-col items-center justify-center"
      >
        <motion.div
          onMouseEnter={() => {
            if (isFront) {
              setGlobalPaused(true);
              setIsHovered(true);
            }
          }}
          onMouseLeave={() => {
            setGlobalPaused(false);
            setIsHovered(false);
          }}
          className="relative cursor-pointer"
          whileHover={isFront ? { scale: 1.25 } : {}}
          animate={{
            filter:
              isFront && (isHovered || isWithinAutoplayZone)
                ? "brightness(1.2) blur(0px) drop-shadow(0 0 14px rgba(56, 189, 248, 0.85))"
                : isFront
                ? "brightness(1.0) blur(0px) drop-shadow(0 0 8px rgba(0,0,0,0.6))"
                : "brightness(0.25) blur(2.5px)",
          }}
        >
          <div className="relative flex h-12 w-12 items-center justify-center p-2 sm:h-14 sm:w-14">
            <Image
              src={skillSrc(data.id)}
              alt={data.label}
              width={38}
              height={38}
              className="object-contain"
              unoptimized
            />
          </div>
        </motion.div>

        {/* Floating Skill Badge Tooltip */}
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 22, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="pointer-events-none absolute top-full left-1/2 z-50 -translate-x-1/2"
            >
              <div className="flex flex-col items-center whitespace-nowrap rounded-lg border border-cyan-500/30 bg-[#0c101d]/90 px-3 py-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.9)] backdrop-blur-xl">
                <span className="text-xs font-semibold text-foreground">
                  {data.label}
                </span>
                <span className="font-mono text-[10px] tracking-wider text-cyan-400 uppercase">
                  {data.groupLabel}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

// --- Main TechStack Section Component ---
export function TechStack() {
  const [isPaused, setIsPaused] = useState(false);
  const [masterAngle, setMasterAngle] = useState(0);
  const [screenScale, setScreenScale] = useState(1);

  const timeOffset = useRef(0);
  const lastTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setScreenScale(0.6);
      else if (width < 1024) setScreenScale(0.85);
      else setScreenScale(1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const SYSTEM_TILT = -14;
  const ORBIT_W = 420 * screenScale;
  const ORBIT_H = 140 * screenScale;
  const AVATAR_SIZE = 340 * screenScale;
  const DURATION = 35; // Seconds per complete orbit revolution

  // Filter out mssql and plsql from planet list
  const planetData = useMemo(() => {
    const items = expertiseGroups
      .flatMap((group) =>
        group.items.map((item) => ({
          id: item.id,
          label: techLabel(item.id),
          groupLabel: group.label,
        }))
      )
      .filter((item) => item.id !== "mssql" && item.id !== "plsql");

    return items.map((icon, i) => ({
      ...icon,
      offset: (i * (2 * Math.PI)) / items.length,
    }));
  }, []);

  useAnimationFrame((time) => {
    if (lastTimeRef.current === null) {
      lastTimeRef.current = time;
      return;
    }
    if (isPaused) {
      timeOffset.current += time - lastTimeRef.current;
    }
    lastTimeRef.current = time;
    if (!isPaused) {
      const effectiveTime = time - timeOffset.current;
      setMasterAngle(((effectiveTime / 1000) * (2 * Math.PI)) / DURATION);
    }
  });

  return (
    <section
      id="expertise"
      className="relative scroll-mt-24 overflow-hidden bg-[#07090e] border-y border-white/10 py-20 md:py-28 text-white"
    >
      {/* Deep Blue/Cyan Background Ambient Glows */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-137.5 w-137.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-95 w-95 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/15 blur-[100px]" />

      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <p className="font-mono text-xs tracking-[0.18em] text-cyan-400 uppercase">
            Expertise
          </p>
          <h2 className="mt-2 bg-linear-to-b from-white via-slate-200 to-slate-400 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl">
            Built with tools I actually ship in
          </h2>
          <p className="mt-3 text-sm text-slate-400 sm:text-base">
            Frontend systems, backend services, languages, and databases orbiting the core workflow.
          </p>
        </div>

        {/* --- Solar System Interactive Stage --- */}
        <div className="relative my-4 flex aspect-16/10 w-full max-w-4xl items-center justify-center mx-auto select-none touch-none">
          {/* Tilted Orbit Container */}
          <div
            style={{ rotate: `${SYSTEM_TILT}deg` }}
            className="relative flex h-full w-full items-center justify-center"
          >
            {/* SVG Orbit Path Line */}
            <svg
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible pointer-events-none z-0"
              style={{ width: 1, height: 1 }}
            >
              <ellipse
                cx="0"
                cy="0"
                rx={ORBIT_W}
                ry={ORBIT_H}
                fill="none"
                stroke="rgba(56, 189, 248, 0.25)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
            </svg>

            {/* Central Photo Element - Fixed inside stacking container at z-index 20 */}
            <motion.div
              animate={{ y: [-8 * screenScale, 8 * screenScale] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
              className="absolute z-20 flex items-center justify-center pointer-events-none"
              style={{
                width: AVATAR_SIZE,
                height: AVATAR_SIZE,
                rotate: `${-SYSTEM_TILT}deg`, // Un-tilt image so photo stays upright
              }}
            >
              <div className="relative h-full w-full">
                <div className="absolute inset-8 -z-10 rounded-full bg-cyan-400/15 blur-2xl" />
                <Image
                  src="/assets/fardin/fardinSun.png"
                  alt="Fardin"
                  fill
                  className="object-contain brightness-75 contrast-[1.05] drop-shadow-[0_15px_25px_rgba(0,0,0,0.85)]"
                  priority
                />
              </div>
            </motion.div>

            {/* Orbiting Tech Icons (Front: z-40, Back: z-5) */}
            {planetData.map((p, i) => (
              <PlanetIcon
                key={`${p.id}-${i}`}
                data={p}
                angle={masterAngle + p.offset}
                orbitWidth={ORBIT_W}
                orbitHeight={ORBIT_H}
                setGlobalPaused={setIsPaused}
                systemRotation={SYSTEM_TILT}
              />
            ))}
          </div>
        </div>

        {/* --- Expertise Category Grid Breakdown --- */}
        <div className="mt-12 space-y-10">
          {expertiseGroups.map((group, gi) => {
            const filteredItems = group.items.filter(
              (item) => item.id !== "mssql" && item.id !== "plsql"
            );
            if (filteredItems.length === 0) return null;

            return (
              <motion.div
                key={group.id}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={sectionViewport}
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="font-mono text-xs text-cyan-400">
                    0{gi + 1}
                  </span>
                  <h3 className="text-sm font-semibold tracking-wide text-slate-200 uppercase">
                    {group.label}
                  </h3>
                  <span className="h-px flex-1 bg-white/10" />
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                  {filteredItems.map((item) => (
                    <div
                      key={item.id}
                      className="group flex items-center gap-3 rounded-md border border-white/10 bg-[#0f1422]/80 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-cyan-500/10"
                    >
                      <Image
                        src={skillSrc(item.id)}
                        alt={techLabel(item.id)}
                        width={28}
                        height={28}
                        className="rounded-sm transition-transform duration-300 group-hover:scale-110"
                        unoptimized
                      />
                      <span className="text-xs font-medium text-slate-400 group-hover:text-slate-100">
                        {techLabel(item.id)}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}