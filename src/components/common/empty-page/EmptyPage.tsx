/* eslint-disable @next/next/no-img-element */
import empty from "@/../public/gifts-background/illustration/empty/Empty-bro.svg"
import RevealOnScroll from "../animation/RevealOnScroll"
function EmptyPage() {
  return (
    <RevealOnScroll>
       <div className="flex items-center justify-center ">
      <img src={empty.src} alt=""  className="h-[600px]"/>
      
    </div>
    </RevealOnScroll>
   
  )
}

export default EmptyPage
