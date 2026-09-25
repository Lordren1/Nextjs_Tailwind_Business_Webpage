'use client';

import { testimonial } from "@/app/api/data";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";



export default function Testimonials() {

  return (
    <>
      <section className="overflow-hidden py-14 lg:py-18 xl:py-22 bg-prim-light">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
          <div 
            data-aos="fade-up" 
            data-aos-anchor-placement="top-center"
            data-aos-delay="100" 
            className="relative testimonials-item w-full flex flex-col lg:flex-row h-auto lg:h-[550px] gap-5"
          >

            <div className="testimonial-image w-full lg:w-1/2 h-[400px] lg:h-full rounded-2xl overflow-hidden relative">
               <Image
              src="/images/testimonials/testimonial-img.jpg"
              alt="SwiftCharge client"
              width={800}
              height={800}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/30"></div>

             <div className="rating-box absolute right-5 bottom-5 bg-dark text-white h-[150px] w-[200px] flex flex-col justify-between items-start p-4 rounded-2xl">

              <span className="text-5xl font-unbounded">
                4.9
              </span>

              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Icon
                    key={star}
                    icon="material-symbols:star-rounded"
                    width="24"
                    height="24"
                    className="text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-sm">
                Client Reviews
              </p>

             </div>
            </div>

            <h4 className="absolute top-5 right-5 z-10 text-dark font-chakrapetch font-medium">
              What Our Clients Say
            </h4>

            <Swiper
              modules={[Navigation, Pagination, Autoplay]} 
             spaceBetween={30}
             slidesPerView={1}
             loop={true}
             navigation
             pagination={{ clickable: true }}
             className="w-full lg:w-1/2 h-[400px] lg:h-full testimonials-wrapper" 
            >
              {testimonial.map((item) => (
                <SwiperSlide 
                  key={item.id}
                  className="w-full h-full"
                >
                   <div className="testimonials-content w-full bg-white shadow-lg p-6 lg:p-8 rounded-2xl flex flex-col justify-center items-start h-full">
                    <Icon 
                      icon="iconoir:quote-solid"
                      width={70}
                      height={70}
                      className="text-dark mb-5"
                    />

                    <p className="text-pera-dark text-16 leading-7 md:text-22 md:leading-8 pb-8 border-b-2 border-dashed">
                      {item.text}
                    </p>

                    <div className="user flex items-center gap-2 pt-8">

                      <Image 
                        src={item.image}
                        alt={item.name}
                        width={90}
                        height={90}
                        className="rounded-full h-[70px] w-[70px] object-cover"
                      />

                      <div className="user-info">
                        <h4 className="text-18 font-semibold text-prim">
                          {item.name}
                        </h4>

                        <span className="text-pera-light text-sm">
                          {item.position}
                        </span>
                      </div>

                    </div>

                   </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}