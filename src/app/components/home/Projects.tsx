'use client';

import { projects } from "@/app/api/data";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";




export default function Projects() {

  return (
    <>
      <section className="bg-light overflow-hidden py-14 lg:py-18 xl:py-22 bg-prim-light">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 space-y-14">
          <div className="projects-content text-center mb-10">
            <span className="sub-title text-14 bg-prim text-white py-1 rounded-xl relative font-chakrapetch capitalize ps-5 pe-3">
              Featured Projects
            </span>

            <h2 className="mt-4 font-chakrapetch lg:text-35 font-semibold">
              Delivering Innovative Solutions with Measurable Business Results
            </h2>

            <p className="mt-4 text-center text-pera-dark max-w-3xl mx-auto">
              Explore how we help organizations solve complex challenges,
              optimize operations, and achieve sustainable growth through
              technology, strategy, and innovation.
            </p>
          </div>
        </div>

        <Swiper 
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={1.5}
          loop={true}
          centeredSlides={true}
          speed={4000}
          autoplay={{ delay: 0, disableOnInteraction: false}}
          allowTouchMove={false}
          breakpoints={{
            1400: { slidesPerView: 1.5 },
            0: { slidesPerView: 1 }
          }}
        >
          {projects.concat(projects).map((project, index) => (
            <SwiperSlide key={`${project.id}-${index}`}>
              <div
                data-aos="fade-left" 
                data-aos-anchor-placement="top-center"
                data-aos-delay={`${index * 100}`} 
                className="project-item flex flex-col lg:flex-col lg:flex-row items-center w-full bg-white
                shadow-xl p-5 lg:p-8 rounded-2xl gap-8 h-auto lg:h-[550px]"  
              >
                <div className="project-image w-full lg:w-1/2 h-full">
                  <Image 
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={500}
                  className="w-full h-full object-coveer rounded-xl"
                  />
                </div>
                <div className="project-content w-full lg:w-1/2">
                  <span className="inline-block bg-prim/10 text-prim border border-prim/20 rounded-full px-4 py-1 text-sm font-chakrapetch font-medium">
                    {project.category}
                  </span>

                  <h3 className="font-unbounded text-24 lg:text-32 pt-4 pd-4">
                    {project.title}
                  </h3>

                  <p className="text-pera-dark leading-7 pb-6">
                    {project.description}
                  </p>

                  <div className="bg-prim-light border-1-4 border-prim p-4 rounded-lg mb-8">
                    <span className="block text-sm text-pera-dark mb-1">
                      Project Impact
                    </span>

                    <span className="text-xl font-semibold text-dark">
                      {project.results}
                    </span>
                  </div>

                  <Link
                    href={`/projects/${project.slug}.`}
                    className="text-white bg-dark h-[50px] text-sm lg:text-16 w-fit rounded-full font-chakrapetch font-semibold flex gap-2
                    ps-4 pe-2 py-2 justify-center items-center tracking-wider group"
                  >
                    View Project 
                    <Icon 
                      icon="tabler:arrow-right"
                      width={24}
                      height={24}
                      className="bg-prim text-white rounded-full h-full w-[35px] p-1.5 group-hover:rotate-45 transition duration-300"
                    />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}