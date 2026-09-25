import { about, services } from "@/app/api/data";
import Companies from "@/app/components/home/Companies";
import HeroSub from "@/app/components/sharedComponents/HeroSub";
import Team from "@/app/components/team/Team";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";





export default function() {

  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About Us" },
  ];

  return (
    <>
      <HeroSub 
        title="About SwiftCharge "
        description="Empowering businesses through technology, innovation, and strategic solutions that drive measurable growth."
        breadcrumbLinks={breadcrumbLinks}
      />

      <div className="bg-light overflow-hidden py-14 lg:py-18 xl:py-22 bg-prim-light">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 flex lg:flex-row flex-col items-start gap-5">
          <div className="image lg:w-[55%] w-full rounded-lg overflow-hidden">
            <Image 
              src="/images/about/about-01.jpg" 
              alt="about-image" 
              width={500} 
              height={500} 
              className="w-full h-full" 
            />
          </div>
          
          <div className="content w-full lg:w-[45%] ms-4" >
            <span className="sub-title text-14 bg-prim text-white py-1 rounded-xl relative font-chakrapetch capitalize ps-5 pe-3">
              Who We Are
            </span>

            <p className="text-pera-dark mt-5 mb-5">
              SwiftCharge is a technology and business solutions company dedicated to helping organizations navigate digital transformation, improve operational efficiency, and unlock new opportunities for growth.
            </p>

            <p className="text-pera-dark mt-5 mb-5">
              We combine strategy, innovation, and technology to deliver practical solutions that solve real business challenges and create lasting value.
            </p>

            <Link 
            href="/services"
            className="text-white bg-dark h-[50px] text-sm lg:text-16 w-full rounded-lg font-chakrapetch font-semibold flex gap-2 ps-4 pe-2 py-2 justify-center items-center tracking-wider group mt-5"
          >
            Explore Our Services
            <Icon 
              icon="tabler:arrow-right"
              width="24"
              height="24"
              className="bg-prim text-white rounded-full h-full w-[35px] p-1.5 group-hover:rotate-45 transition duration-300"
            />
          </Link>
          </div>
        </div>
      </div>

      <div className="bg-light overflow-hidden py-14 lg:py-18 xl:py-22">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 space-y-14">
          <div className="about-content flex justify-between items-start lg:items-end gap-2 flex-col lg:flex-row">
            <div>
              <h2 className="w-full lg:w-3/4 mt-4 font-chakrapetch lg:text-35 font-semibold">
                Empowering Business with Expertise.
              </h2>
            </div>

            <Link 
              href="/contact"
              className="text-white bg-dark h-[50px] text-sm lg:text-16 w-fit rounded-full font-chakrapetch font-semibold flex gap-2 ps-4 pe-2 py-2 justify-center items-center tracking-wider group mt-5 lg:mt-0"
            >
              Request a call
              <Icon 
                icon="tabler:arrow-right"
                width="24"
                height="24"
                className="bg-prim text-white rounded-full h-full w-[35px] p-1.5 group-hover:-rotate-45 transition duration-300"
              />
            </Link>

          </div>

            <div className="about-wrapper grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
              {about.map((item, index) => (
                <div 
                  key={index}
                  className="about-item w-full bg-white shadow-xl p-5 space-y-6 rounded-xl border group hover:bg-prim transition duration-500 flex flex-col justify-between"
                >
                  <div className="about-icon border border-dark w-[70px] h-[70px] rounded-full flex justify-center items-center prim-grident transition-transform duration-500 group-hover: rotate-y-360 mb-12">
                    <Icon 
                      icon={item.icon}
                      width="40"
                      height="40"
                      className="group-hover:text-white transition-colors duration-500"
                    />
                  </div>

                  <h4 className="group-hover:text-white transition-colors duration-500 font-medium font-unbounded text-18">
                    {item.title}
                  </h4>

                  <p className="text-pera-dark font-normal group-hover:text-white transition-colors duration-500">
                   {item.description}
                  </p>
                </div>
            ))}
            </div>
            
        </div>
      </div>
      
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

      <Team limit={4} />
      <Companies />
    </>
  );
}