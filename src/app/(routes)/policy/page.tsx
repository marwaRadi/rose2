// import type { Metadata } from "next";

import { getMetadata } from "../../../_utils/getMetadata";
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
  return <div>policy</div>;
}

export default page;
