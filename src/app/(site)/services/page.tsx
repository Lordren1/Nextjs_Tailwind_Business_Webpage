'use client';

import { services } from "@/app/api/data";
import HeroSub from "@/app/components/sharedComponents/HeroSub";
import { Icon } from "@iconify/react";
import Link from "next/link";



export default function Services() {

  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services", text: "Services" },
  ];


  return (
    <>
      <HeroSub 
        title="Our Servics"
        description="Innovative solutions designed to help businesses grow, adapt, and thrive in a competitive digital landscape."
        breadcrumbLinks={breadcrumbLinks}
      />

      <section className="bg-prim-light py-14 lg:py-18 xl:py-22">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">

          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="bg-prim text-white px-4 py-2 rounded-full text-sm font-chakrapetch">
              What We Offer
            </span>

            <h2 className="mt-5 font-chakrapetch text-3xl lg:text-5xl font-semibold text-midnight_text">
              Solutions Built for Sustainable Business Growth
            </h2>

            <p className="mt-5 text-pera-dark leading-7">
              From digital transformation and technology consulting to business
              strategy and customer experience optimization, we help
              organizations unlock new opportunities and achieve measurable
              results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <article 
                key={service.id}
                id={service.id}
                className="group bg-white rounded-2xl shadow-lg p-8 flex flex-col transition-all duration-500 hover:bg-dark hover:-translate-y-2"
              >
                <div className="w-[70px] h-[70px] rounded-full border border-dark flex items-center justify-center mb-8 transition-transform duration-500 group-hover:rotate-y-360">
                  <Icon
                    icon={service.icon}
                    width={36}
                    height={36}
                    className="text-dark group-hover:text-white transition-colors duration-500"
                  />
                </div> 

                <h3 className="font-unbounded text-18 font-medium mb-4 text-midnight_text group-hover:text-white transition-colors duration-500">
                  {service.title}
                </h3>

                <p className="text-pera-dark leading-7 group-hover:text-white transition-colors duration-500">
                  {service.description}
                </p>

                <Link
                  href={service.href}
                  className="mt-auto pt-8 flex items-center gap-2 font-chakrapetch font-semibold text-dark group-hover:text-white transition-colors duration-500"
                >
                  Learn More

                  <Icon
                    icon="tabler:arrow-right"
                    width={24}
                    height={24}
                    className="w-[35px] h-[35px] p-1.5 rounded-full bg-prim text-white transition-transform duration-500 group-hover:bg-white group-hover:text-dark group-hover:rotate-45"
                  />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}