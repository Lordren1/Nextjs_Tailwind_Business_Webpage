import { BreadcrumbLink } from "@/type/breadcrumb";
import Breadcrumb from "../breadcrumb/Breadcrumb";



interface HeroSubProps {
  title: string;
  description: string;
  breadcrumbLinks:BreadcrumbLink[];
}


export default function HeroSub({title, description, breadcrumbLinks}: HeroSubProps) {

  return (
    <>
      <section className="bg-cover relative overflow-x-hidden section-banner">
        <div className="w-full h-full absolute z-0 bg-heroBg rounded-b-[119px] -left-1/4 top-0"></div>

        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 relative z-10">

          <div className="text-white">
            <h1 className="font-chakrapetch text-4xl lg:text-6xl font-bold">
              {title}
            </h1>

            {description && (
              <p className="mt-4 max-w-2xl text-lg">
                {description}
              </p>
            )}
          </div>

          <div className="absolute -bottom-35 left-0">
            <Breadcrumb links={breadcrumbLinks} />
          </div>

        </div>
      </section>
    </>
  );
}