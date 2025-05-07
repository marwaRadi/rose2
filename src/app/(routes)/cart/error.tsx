"use client"; // Error boundaries must be Client Components

import PrimaryBtn from "@/components/common/buttons/PrimaryBtn";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong! from cart</h2>
      {error.message}
      <PrimaryBtn
        onclick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </PrimaryBtn>
    </div>
  );
}
