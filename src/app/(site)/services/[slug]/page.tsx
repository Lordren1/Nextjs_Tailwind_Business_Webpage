'use client';

import { services } from "@/app/api/data";
import HeroSub from "@/app/components/sharedComponents/HeroSub";
import { Icon } from "@iconify/react";
import { notFound } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type FAQItem = {
  question: string;
  answer: string;
};

type Props = {
  params: Promise<{ slug: string }>;
};



const faqData: FAQItem[] = [
  {
    question: "What does this service involve?",
    answer:
      "Our approach is tailored to your business needs. We assess your current situation, identify opportunities for improvement, and develop practical solutions that support your business goals.",
  },
  {
    question: "How can this service benefit my business?",
    answer:
      "Our solutions are designed to improve efficiency, strengthen performance, solve business challenges, and create opportunities for sustainable growth.",
  },
  {
    question: "How do you develop solutions for each business?",
    answer:
      "We begin by understanding your business, its challenges, objectives, and existing processes. We then use these insights to develop practical solutions that fit your specific needs.",
  },
  {
    question: "Can you tailor the service to our business?",
    answer:
      "Yes. Our services can be adapted to the size, goals, industry, and specific requirements of your organization.",
  },
  {
    question: "How can we get started?",
    answer:
      "You can contact our team to discuss your business needs, challenges, and objectives. We will help identify the most appropriate solution for your organization.",
  },
];

export default function ServiceDetails({ params }: Props) {
  // Unwrap params Promise
  const { slug } = React.use(params);

  // Find the selected service using the id from our services data
  const service = services.find((s) => s.id === slug);

  if (!service) return notFound();
  console.log(service);
console.log(service.image);

  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services", text: "Services" },
    { href: service.href, text: service.title },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  
  return (
    <>
      <HeroSub
        title={service.title}
        description={service.description}
        breadcrumbLinks={breadcrumbLinks}
      />

      <section className="py-15">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 flex flex-col lg:flex-row gap-5">

          {/* Main Content */}
          <div className="lg:w-[60%] w-full">
            <div className="bg-white rounded-2xl space-y-6 p-5">

              <Image 
                  src={service.image}
                  alt={service.title}
                  width={800}
                  height={400}
                  className="w-full h-[400px] object-cover rounded-2xl"
                />
                

              <h1 className="font-unbounded font-medium uppercase text-3xl">
                {service.title}
              </h1>

              <p className="text-pera-dark text-16 leading-6">
                {service.description}
              </p>

              <p className="text-pera-dark text-16 leading-6">
                We work with businesses to understand their challenges,
                identify opportunities, and develop practical solutions that
                support growth, efficiency, innovation, and long-term
                performance.
              </p>

              {/* Service Benefits */}
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  "Practical Business Solutions",
                  "Improved Efficiency",
                  "Better Decision Making",
                  "Sustainable Growth",
                  "Technology-Driven Innovation",
                  "Improved Business Performance",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Icon
                      icon="material-symbols:check-rounded"
                      width={24}
                      height={24}
                      className="bg-prim text-white rounded-full p-0.5 shrink-0"
                    />

                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Service Approach */}
              <div className="space-y-4">
                <h2 className="font-unbounded font-medium text-3xl">
                  Our Approach
                </h2>

                <p className="text-pera-dark text-16 leading-6">
                  Every business has different goals and challenges. Our
                  approach focuses on understanding your organization first,
                  then developing solutions that are practical, measurable,
                  and aligned with your objectives.
                </p>

                <p className="text-pera-dark text-16 leading-6">
                  From identifying areas for improvement to implementing
                  effective strategies and technologies, we work with you
                  throughout the process to create meaningful business impact.
                </p>
              </div>

              {/* FAQ */}
              <div className="space-y-4 w-full">
                <h2 className="font-unbounded font-medium text-3xl mb-5">
                  Frequently Asked Questions
                </h2>

                {faqData.map((item, index) => (
                  <div
                    key={index}
                    className={`border rounded-lg overflow-hidden transition-all duration-300 ${
                      openIndex === index
                        ? "bg-prim text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    <button
                      type="button"
                      className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
                      onClick={() => toggle(index)}
                    >
                      <span className="font-medium">
                        {item.question}
                      </span>

                      <Icon
                        icon={
                          openIndex === index
                            ? "akar-icons:minus"
                            : "akar-icons:plus"
                        }
                        className="text-xl shrink-0"
                      />
                    </button>

                    {openIndex === index && (
                      <div className="px-6 py-4 border-t border-white/20 bg-white/10 text-white/90">
                        {item.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-[40%] w-full lg:self-start lg:sticky top-20 space-y-5 py-5">

            {/* More Services */}
            <div className="border-gray-100 shadow-lg bg-white p-5 rounded-xl">
              <h3 className="text-black pb-5 font-semibold">
                More Services
              </h3>

              <div className="flex flex-col gap-3">
                {services.map((s) => (
                  <Link
                    key={s.id}
                    href={s.href}
                    className={`flex justify-between items-center p-3 rounded-lg transition-colors duration-300 ${
                      s.id === service.id
                        ? "bg-prim text-white"
                        : "bg-white shadow-lg hover:bg-prim hover:text-white"
                    }`}
                  >
                    <span>{s.title}</span>

                    <Icon
                      icon="weui:arrow-outlined"
                      width={16}
                      height={16}
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* Service Tags */}
            <div className="border-gray-100 shadow-lg bg-white p-5 rounded-xl">
              <h3 className="text-black pb-5 font-semibold">
                Services
              </h3>

              <div className="flex flex-wrap gap-2">
                {services.map((s) => (
                  <Link
                    key={s.id}
                    href={`/services#${s.id}`}
                    className={`border border-border px-3 py-1 rounded-sm transition-colors duration-300 ${
                      s.id === service.id
                        ? "bg-dark text-white border-transparent"
                        : "hover:bg-pera-dark hover:border-transparent hover:text-white"
                    }`}
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}