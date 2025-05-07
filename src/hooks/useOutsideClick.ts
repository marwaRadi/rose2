import { useEffect, useRef } from "react";

function useOutsideClick(close: () => void) {
  const ref = useRef<HTMLDivElement>(null);
  const overLayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleCloseWindow(e: MouseEvent) {
      if (ref &&  !ref.current?.contains(e.target as Node)) close();
    }
    window.addEventListener("click", handleCloseWindow);

    return () => window.removeEventListener("click", handleCloseWindow);
  }, [close ]);

  return {ref , overLayRef};
}

export default useOutsideClick;
