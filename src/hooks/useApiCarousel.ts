"use client";

import { CarouselApi } from "@/components/ui/carousel";
import { useCallback, useEffect, useState } from "react";

export function useApiCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  // update the count when the window is resized
  const updataCount = useCallback(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
  }, [api]);
  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
    window.addEventListener("resize", updataCount);
    return () => window.removeEventListener("resize", updataCount);
  }, [api, updataCount]);

  return { setApi, current, count };
}
