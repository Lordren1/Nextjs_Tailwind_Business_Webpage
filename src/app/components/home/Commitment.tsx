'use client';

import { whyChooseUs } from "@/app/api/data";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";


const tags = [
  {
    name: "Digital Transformation",
    slug: "digital-transformation",
  },
  {
    name: "Web Development",
    slug: "web-development",
  },
  {
    name: "Technology Consulting",
    slug: "technology-consulting",
  },
  {
    name: "Business Strategy",
    slug: "business-strategy",
  },
  {
    name: "Data & Analytics",
    slug: "data-analytics",
  },
  {
    name: "Customer Experience",
    slug: "customer-experience",
  },
  {
    name: "Process Optimization",
    slug: "process-optimization",
  },
  {
    name: "Innovation & Product Development",
    slug: "innovation-product-development",
  },
];

export default function Commitment() {

  return (
    <>
      <section className="bg-light overflow-hidden py-14 lg:py-18 xl:py-22 bg-prim-light">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 space-y-8">
          {/* <div className="commitment-content bg-white p-8 rounded-2xl">
            <span className="sub-title text-14 bg-prim text-white py-1 rounded-xl relative font-chakrapetch capitalize ps-5 pe-3">
              Why Choose Swift Charge
            </span>

            <h2 className="mt-4 font-chakrapetch lg:text-35 font-semibold mb-5">
              Delivering innovative solutions, measurable results, and lasting partnerships
              that empower businesses to grow, adapt, and thrive in a rapidly changing
              digital world.
            </h2>

            <p className="text-pera-dark mb-6 leading-7">
              Our team combines expertise, innovation, and strategic thinking to help
              organizations overcome challenges, unlock new opportunities, and achieve
              sustainable success.
            </p>

            <Link
              href="/services"
              className="text-white bg-dark h-[50px] text-sm lg:text-16 w-fit rounded-full font-chakrapetch font-semibold flex gap-2 ps-4 pe-2 py-2 justify-center items-center tracking-wider group"
            >
              Explore Our Solutions
              <Icon
                icon="tabler:arrow-right"
                width="24"
                height="24"
                className="bg-prim text-white rounded-full h-full w-[35px] p-1.5 group-hover:-rotate-45 transition duration-300"
              />
            </Link>
          </div> */}
          <div className="text-center mb-12">
            <span className="sub-title text-14 bg-prim text-white py-1 rounded-xl relative font-chakrapetch capitalize ps-5 pe-3">
              Why Choose Us
            </span>

            <h2 className="mt-4 font-chakrapetch lg:text-35 font-semibold">
              Trusted Expertise. Practical Solutions. Measurable Results.
            </h2>

            <p className="mt-4 text-pera-dark max-w-3xl mx-auto">
              We help organizations navigate change, embrace innovation, and achieve sustainable growth through tailored business and technology solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-col-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={item.id}
                data-aos="fade-up" 
                    data-aos-anchor-placement="top-center"
                    data-aos-delay={`${index * 100}`}
                className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-2xl transition duration-500 group"
              >
                <div className="w-[80px] h-[80px] rounded-full bg-prim/10 flex items-center justify-center mb-6 group-hover:bg-prim transition-colors duration-500">
                  <Icon
                    icon={item.icon}
                    width={35}
                    height={35}
                    className="text-prim group-hover:text-white transition-colors duration-500"
                  />
                </div>

                <h3 className="font-chakrapetch text-22 text-prim font-semibold mb-4">
                  {item.title}
                </h3>

                <p className="text-pera-dark leading-7">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="font-chakrapetch text-28 text-prim font-semibold mb-4">
              Ready to Transform Your Business?
            </h3>

            <p className="text-pera-dark max-w-2xl mx-auto mb-8">
              Partner with us to unlock new opportunities, optimize performance, and build solutions that drive long-term success.
            </p>

            <Link
              href="/contact"
              className="text-white bg-dark h-[50px] w-fit rounded-full font-chakrapetch font-semibold inline-flex items-center gap-2 px-4 py-2 group"
            >
              Schedule a Consultation

              <Icon
                icon="tabler:arrow-right"
                width={24}
                height={24}
                className="bg-prim text-white rounded-full w-[35px] h-[35px] p-1.5 group-hover:rotate-45 transition duration-300"
              />
            </Link>
          </div>

          

        </div>
      </section>
    </>
  );
}