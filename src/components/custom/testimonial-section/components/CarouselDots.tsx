"use client";
// import { useCallback, useEffect, useState } from "react";

function CarouselDots({ current, count }: { current: number; count: number }) {
  // calculate the number of dots based on the window width
  // const getDotsCount = useCallback(() => {
  //   return window.innerWidth >= 1024 && window.innerWidth < 1280
  //     ? Math.ceil(count / 3)
  //     : window.innerWidth >= 1200
  //     ? Math.ceil(count / 4)
  //     : count;
  // }, [count]);
  // const [dotsCount, setDotsCount] = useState(getDotsCount());
 // update the dots count when the window is resized
  // useEffect(() => {
  //   const handleResize = () => {
  //     setDotsCount(getDotsCount());
  //   };

  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, [count, getDotsCount]);

  // console.log(dotsCount)
  return (
    <div className="flex justify-center mt-3">
      {Array.from({ length: count }).map((_, index) => (
        <span
          key={index}
          className={` inline-block  rounded-full bg-white mx-0.5 
            ${current === index + 1 ? "w-5 h-3" : "w-3 h-3"} `}
        ></span>
      ))}
    </div>
  );
}

export default CarouselDots;
