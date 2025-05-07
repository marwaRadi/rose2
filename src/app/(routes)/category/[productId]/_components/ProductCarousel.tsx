"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Pause, Play } from "lucide-react";

// select image component as motion image
const MotionImage = motion.create(Image);

type ProductCarouselProps = {
  product: { images: string[]; name: string };
};
function ProductCarousel({ product }: ProductCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  //==================================================================
  const { images, name } = product;
  //===================================================================

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length, isPaused]);
  //================================================================
  return (
    <div className="xl:w-[80%] lg:ml-[15%] lg:w-3/4 grid ">
      <div className="relative aspect-square sm:aspect-[3/2] md:aspect-square xl:aspect-[3/2]   mb-3  rounded-[10px] overflow-hidden">
        <MotionImage
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, info) => {
            if (info.offset.x < -100) {
              setCurrent((prev) => (prev + 1) % images.length);
            } else if (info.offset.x > 100) {
              setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
            }
          }}
          key={images[current]}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            opacity: { duration: 1 },
            scale: { duration: 3, ease: "linear" },
          }}
          fill
          src={images[current]}
          alt={name}
          className="object-cover  "
        />
        <button
          className="absolute bg-primary-dark top-[10px] right-[10px] z-10 rounded-full ring-2 ring-white text-white  p-2 "
          onClick={() => setIsPaused(!isPaused)}
        >
          {isPaused ? <Play /> : <Pause />}
        </button>
      </div>
      <div>
        <div className="grid grid-cols-4 gap-3">
          {product.images.map((image, index) => (
            <div className="relative aspect-square" key={index}>
              <Image
                onClick={() => setCurrent(index)}
                fill
                src={image}
                alt={product.name}
                className={`object-cover rounded-[10px] ${
                  index === current && "ring-2 ring-primary-dark"
                } transition duration-300 ease-in-out`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

//====================================================

// function ProductCarousel({ product }: ProductCarouselProps) {
//   const [api, setApi] = useState<CarouselApi>();
//   const [current, setCurrent] = useState(0);
//   //==================================================================
//   const MotionImage = motion.create(Image);
//   //===================================================================
// const imageVariants = {
//   initial: { opacity: 0, scale: 0.95 },
//   animate: {
//     opacity: 1,
//     scale: 1,
//     transition: {
//       opacity: { duration: 2 },
//       scale: { duration: 1, delay: 1 },
//     },
//   },
//   exit: {
//     opacity: 0,
//     scale: 0.95,
//     transition: { duration: 1 },
//   },
// };
//   useEffect(() => {
//     if (!api) {
//       return;
//     }

//     setCurrent(api.selectedScrollSnap() + 1);

//     api.on("select", () => {
//       setCurrent(api.selectedScrollSnap() + 1);
//     });
//   }, [api]);
//   console.log(current);
//   //================================================================
//   return (
//     <div>
//       <Carousel setApi={setApi}>
//         <CarouselContent>
//           {product.images.map((image, index) => (
//             <CarouselItem key={index}>
//               <div className="relative aspect-square  mb-3">
//                 <AnimatePresence mode="wait">
//                   <MotionImage
//                     variants={imageVariants}
//                     initial="initial"
//                     animate="animate"
//                     exit="exit"
//                     fill
//                     src={image}
//                     alt={product.name}
//                     className="object-cover rounded-[10px] "
//                   />
//                 </AnimatePresence>
//               </div>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//       </Carousel>
//       <div>
//         <div className="grid grid-cols-4 gap-3">
//           {product.images.map((image, index) => (
//             <div className="relative aspect-square" key={index}>
//               <Image
//                 fill
//                 src={image}
//                 alt={product.name}
//                 className={`object-cover rounded-[10px] ${
//                   index + 1 === current && "ring-2 ring-primary-dark"
//                 }`}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

export default ProductCarousel;
