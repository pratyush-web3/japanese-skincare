"use client";

import { useState, useEffect } from "react";
import Image, { type ImageProps } from "next/image";
import { FALLBACK_IMAGE } from "@/lib/images";

type PremiumImageProps = Omit<ImageProps, "src" | "alt"> & {
  src: string;
  alt: string;
  fallbackSrc?: string;
};

export default function PremiumImage({
  src,
  alt,
  fallbackSrc = FALLBACK_IMAGE,
  className = "",
  ...props
}: PremiumImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    setCurrentSrc(src);
  }, [src]);

  return (
    <Image
      {...props}
      src={currentSrc}
      alt={alt}
      className={className}
      onError={() => {
        if (currentSrc !== fallbackSrc) {
          setCurrentSrc(fallbackSrc);
        }
      }}
    />
  );
}
