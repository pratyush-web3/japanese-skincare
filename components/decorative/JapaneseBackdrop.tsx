"use client";

import { useMemo } from "react";

/**
 * Japanese decorative patterns and backdrop elements
 * Traditional patterns: Seigaiha (waves), Sakura (cherry blossoms), Asanoha (hemp leaves)
 */

/**
 * Seigaiha Pattern - Traditional Japanese wave pattern
 * Symbolizes peace, good luck, and good fortune
 */
export function SeigaihaPattern({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
      width="120"
      height="70"
      viewBox="0 0 120 70"
    >
      <defs>
        <pattern
          id="seigaiha"
          x="0"
          y="0"
          width="60"
          height="35"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M0 35 Q15 0 30 35 Q45 70 60 35"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            opacity="0.4"
          />
          <path
            d="M0 35 Q15 70 30 35 Q45 0 60 35"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            opacity="0.25"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#seigaiha)" />
    </svg>
  );
}

/**
 * Sakura Accent - Cherry blossom petal decoration
 * Symbolizes renewal, beauty, and the transient nature of life
 */
export function SakuraAccent({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="8" r="2.5" opacity="0.9" />
      <circle cx="8" cy="12" r="2" opacity="0.7" />
      <circle cx="16" cy="12" r="2" opacity="0.7" />
      <circle cx="10" cy="16" r="1.8" opacity="0.5" />
      <circle cx="14" cy="16" r="1.8" opacity="0.5" />
      <circle cx="12" cy="12" r="1" opacity="0.3" />
    </svg>
  );
}

/**
 * Asanoha Pattern - Hemp leaf pattern
 * Symbolizes growth, prosperity, and protection from evil
 */
export function AsanohaPattern({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
      width="120"
      height="120"
      viewBox="0 0 120 120"
    >
      <defs>
        <pattern
          id="asanoha"
          x="0"
          y="0"
          width="60"
          height="60"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M30 0L60 30L30 60L0 30L30 0Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.4"
            opacity="0.3"
          />
          <path
            d="M30 60L60 90L30 120L0 90L30 60Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.4"
            opacity="0.2"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#asanoha)" />
    </svg>
  );
}

/**
 * Kikkou Pattern - Tortoiseshell pattern
 * Symbolizes longevity and good fortune
 */
export function KikkouPattern({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="70"
      viewBox="0 0 80 70"
    >
      <defs>
        <pattern
          id="kikkou"
          x="0"
          y="0"
          width="80"
          height="70"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M40 0L70 17.5V52.5L40 70L10 52.5V17.5L40 0Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            opacity="0.3"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#kikkou)" />
    </svg>
  );
}

/**
 * Predefined petal configurations for consistent rendering
 * Using seeded values instead of Math.random for purity
 */
const PETAL_CONFIGS = [
  { left: 15, delay: 0.5, duration: 7, size: 6, opacity: 0.15 },
  { left: 35, delay: 1.2, duration: 8, size: 5, opacity: 0.12 },
  { left: 55, delay: 2.1, duration: 6, size: 7, opacity: 0.18 },
  { left: 75, delay: 0.8, duration: 9, size: 4, opacity: 0.1 },
  { left: 90, delay: 1.8, duration: 7, size: 6, opacity: 0.14 },
  { left: 25, delay: 3.2, duration: 8, size: 5, opacity: 0.11 },
  { left: 45, delay: 2.5, duration: 6, size: 7, opacity: 0.16 },
  { left: 65, delay: 1.5, duration: 9, size: 4, opacity: 0.13 },
  { left: 85, delay: 0.3, duration: 7, size: 6, opacity: 0.17 },
  { left: 10, delay: 2.8, duration: 8, size: 5, opacity: 0.09 },
] as const;

/**
 * Falling Sakura Petals Animation
 * Creates a gentle floating petal effect
 */
export function FallingPetals({ count = 5 }: { count?: number }) {
  const petals = useMemo(() => {
    return PETAL_CONFIGS.slice(0, count).map((config, i) => ({
      id: i,
      ...config,
    }));
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute text-accent-sakura animate-float"
          style={{
            left: `${petal.left}%`,
            top: '-10px',
            width: petal.size,
            height: petal.size,
            opacity: petal.opacity,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
          }}
        >
          <SakuraAccent className="w-full h-full" />
        </div>
      ))}
    </div>
  );
}

/**
 * Main Japanese Backdrop Component
 * Provides subtle decorative elements across the entire site
 */
export default function JapaneseBackdrop() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden>
      {/* Top right seigaiha pattern */}
      <div className="absolute -top-24 -right-24 w-96 h-96 text-accent-sakura/6">
        <SeigaihaPattern className="w-full h-full" />
      </div>
      
      {/* Bottom left asanoha pattern */}
      <div className="absolute -bottom-32 -left-32 w-80 h-80 text-accent-warm/4">
        <AsanohaPattern className="w-full h-full" />
      </div>

      {/* Subtle horizontal divider */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      
      {/* Floating sakura petal */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 text-accent-sakura/10 animate-float">
        <SakuraAccent className="w-full h-full" />
      </div>
    </div>
  );
}