import { getMetadata } from "@/_utils/getMetadata";
import LoadingSpinner from "@/components/common/spinner/LoadingSpinner";
import ProtectedRoute from "@/components/protected-route/ProtectedRoute";
import { Suspense } from "react";

export const metadata = getMetadata(
  "Favorite",
  "Your Wishlist: Keep track of your favorite products and easily save them for later. Whether you're planning a future purchase or just bookmarking items you love, your wishlist is the perfect place to organize your top picks and return to them anytime."
);

function page() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ProtectedRoute>
        <div>favorite page</div>;
      </ProtectedRoute>
    </Suspense>
  );
}

export default page;
