'use client';

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { companies } from "@/app/api/data";
import Image from "next/image";



export default function Companies() {

  return (
    <>
      <section className="bg-light overflow-hidden py-14 lg:py-18 xl:py-22 bg-prim-light">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 space-y-14">
          <div className="compaines-content text-center">
            <span className="sub-title text-14 bg-prim text-white py-1 rounded-xl relative font-chakrapetch capitalize ps-5 pe-3">
              Trusted Partners
            </span>

            <h2 className="mt-4 font-chakrapetch lg:text-35 font-semibold">
              Collaborating with Forward-Thinking Organizations
            </h2>

            <p className="mt-4 text-pera-dark max-w-3xl mx-auto">
              We work alongside innovative businesses, technology providers, and industry leaders to deliver solutions that drive growth, efficiency, and lasting impact.
            </p>
          </div>
        </div>

        <div className="relative mt-10">
          <Swiper 
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={5}
            loop={true}
            speed={3000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            allowTouchMove={false}
            breakpoints={{
              320: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
            className="compaines-swiper relative"
          >
            {companies.map((company, index) => (
              <SwiperSlide 
                key={index}
              >
                <div
                  data-aos="fade-left" 
                  data-aos-anchor-placement="top-center"
                  data-aos-delay={`${index * 100}`}
                  className="companies-item h-[100px] w-full bg-white shadow-xl px-8 rounded-xl flex items-center justify-center cursor-pointer"
                >
                  <Image 
                    src={company.image}
                    alt={`brand-${index + 1}`}
                    width={150}
                    height={80}
                    className="object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}