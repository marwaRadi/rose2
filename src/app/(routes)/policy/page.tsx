// import type { Metadata } from "next";

import { Suspense } from "react";
import { getMetadata } from "../../../_utils/getMetadata";
import LoadingSpinner from "@/components/common/spinner/LoadingSpinner";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "policy",
//   description:
//     "This page outlines the terms and conditions, privacy policies, and usage guidelines for our service. Please review the details carefully",
// };
export const metadata = getMetadata(
  "policy",
  "This page outlines the terms and conditions, privacy policies, and usage guidelines for our service. Please review the details carefully"
);

function page() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div>policy</div>;
    </Suspense>
  ); 
}

export default page;
