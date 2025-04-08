import { useEffect, useRef } from "react";

function useOutsideClick(close: () => void) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleCloseWindow(e: MouseEvent) {
      if (ref &&  !ref.current?.contains(e.target as Node)) close();
    }
    document.addEventListener("click", handleCloseWindow);

    return () => document.removeEventListener("click", handleCloseWindow);
  }, [close]);

  return ref;
}

export default useOutsideClick;
