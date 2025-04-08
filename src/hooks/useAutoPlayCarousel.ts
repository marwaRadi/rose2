"use client";

import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

function useAutoPlayCarousel() {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));
  return plugin;
}

export default useAutoPlayCarousel;
