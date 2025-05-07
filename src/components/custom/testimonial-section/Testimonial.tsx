// https://i.pravatar.cc/48?u=933372

import CarouselTestimonial from "./components/CarouselTestimonial";


function Testimonial() {
  return (
    <div className='bg-[url("/gifts-background/icons/testimonial-background.svg")] p-6 object-cover mb-20'>
      <div className="fixed-size !mb-0">
        <CarouselTestimonial />
      </div>
    </div>
  );
}

export default Testimonial;
