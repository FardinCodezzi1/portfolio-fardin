"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface ImagesBadgeProps {
  text: string;
  images: string[];
  className?: string;
  /** Controlled hover — when set, drives the fan-out from the parent card */
  hovered?: boolean;
  folderSize?: { width: number; height: number };
  teaserImageSize?: { width: number; height: number };
  hoverImageSize?: { width: number; height: number };
  hoverTranslateY?: number;
  hoverSpread?: number;
  hoverRotation?: number;
}

export function ImagesBadge({
  text,
  images,
  className,
  hovered,
  folderSize = { width: 32, height: 24 },
  teaserImageSize = { width: 20, height: 14 },
  hoverImageSize = { width: 56, height: 38 },
  hoverTranslateY = -42,
  hoverSpread = 22,
  hoverRotation = 15,
}: ImagesBadgeProps) {
  const [localHover, setLocalHover] = React.useState(false);
  const isHovered = hovered ?? localHover;
  const displayImages = images.slice(0, 3);
  const tabWidth = folderSize.width * 0.375;
  const tabHeight = folderSize.height * 0.25;

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 perspective-[1000px] transform-3d",
        className,
      )}
      onMouseEnter={() => setLocalHover(true)}
      onMouseLeave={() => setLocalHover(false)}
    >
      <motion.div
        className="relative shrink-0"
        style={{
          width: folderSize.width,
          height: folderSize.height,
          transformStyle: "preserve-3d",
        }}
      >
        <div className="absolute inset-0 rounded-[4px] bg-gradient-to-b from-amber-400 to-amber-500 shadow-sm">
          <div
            className="absolute left-0.5 rounded-t-[2px] bg-gradient-to-b from-amber-300 to-amber-400"
            style={{
              top: -tabHeight * 0.65,
              width: tabWidth,
              height: tabHeight,
            }}
          />
        </div>

        {displayImages.map((image, index) => {
          const totalImages = displayImages.length;
          const baseRotation =
            totalImages === 1
              ? 0
              : totalImages === 2
                ? (index - 0.5) * hoverRotation
                : (index - 1) * hoverRotation;
          const hoverY = hoverTranslateY - (totalImages - 1 - index) * 3;
          const hoverX =
            totalImages === 1
              ? 0
              : totalImages === 2
                ? (index - 0.5) * hoverSpread
                : (index - 1) * hoverSpread;
          const teaseY = -4 - (totalImages - 1 - index) * 1;
          const teaseRotation =
            totalImages === 1
              ? 0
              : totalImages === 2
                ? (index - 0.5) * 3
                : (index - 1) * 3;

          return (
            <motion.div
              key={image}
              className="absolute top-0.5 left-1/2 origin-bottom overflow-hidden rounded-[3px] bg-surface shadow-sm ring-1 ring-black/20"
              animate={{
                x: `calc(-50% + ${isHovered ? hoverX : 0}px)`,
                y: isHovered ? hoverY : teaseY,
                rotate: isHovered ? baseRotation : teaseRotation,
                width: isHovered ? hoverImageSize.width : teaserImageSize.width,
                height: isHovered ? hoverImageSize.height : teaserImageSize.height,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
                delay: index * 0.03,
              }}
              style={{ zIndex: 10 + index }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image}
                alt=""
                className="h-full w-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            </motion.div>
          );
        })}

        <motion.div
          className="absolute inset-x-0 bottom-0 h-[85%] origin-bottom rounded-[4px] bg-gradient-to-b from-amber-300 to-amber-400 shadow-sm"
          animate={{
            rotateX: isHovered ? -45 : -25,
            scaleY: isHovered ? 0.8 : 1,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          style={{ transformStyle: "preserve-3d", zIndex: 20 }}
        >
          <div className="absolute top-1 right-1 left-1 h-px bg-amber-200/50" />
        </motion.div>
      </motion.div>

      <span className="text-sm font-medium text-foreground">{text}</span>
    </div>
  );
}
