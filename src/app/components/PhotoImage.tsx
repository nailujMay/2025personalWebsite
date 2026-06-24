"use client";

import Image from "next/image";
import { useState } from "react";

type PhotoImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

function PhotoImage({ src, alt, width, height, className = "" }: PhotoImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
      onLoad={() => setLoaded(true)}
      className={`w-full h-auto transition-all duration-700 ease-out ${
        loaded ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-md scale-[1.02]"
      } ${className}`}
    />
  );
}

export default PhotoImage;
