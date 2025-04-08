import type { Metadata } from "next";
export function getMetadata(title:string,description:string) {
  const metadata: Metadata = {
  title,
  description
  };
  
  return metadata

}
 