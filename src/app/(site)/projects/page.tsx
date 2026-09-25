import { projects } from "@/app/api/data";
import HeroSub from "@/app/components/sharedComponents/HeroSub";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";





export default function ProjectsPage() {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/projects", text: "Projects" },
  ];

  return (
    <>
      <HeroSub
        title="Projects"
        description="Explore some of the solutions we have delivered for organizations across different industries."
        breadcrumbLinks={breadcrumbLinks}
      />

      <section className="py-14 lg:py-18 xl:py-22 bg-prim-light">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden shadow-xl"
              >
                <Image 
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={500}
                  className="w-full h-[260px] object-cover"
                />

                <div className="p-6">
                  <span className="bg-prim/10 text-prim px-3 py-1 rounded-full text-sm" >
                    {project.category}
                  </span>

                  <h3 className="text-2xl font-semibold mt-4 mb-3 text-prim">
                    {project.title}
                  </h3>

                  <p className="text-pera-dark mb-5">
                    {project.shortDescription}
                  </p>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="flex items-center gap-2 text-prim font-medium"
                  >
                   View Project 

                   <Icon 
                    icon="tabler:arrow-right"
                    width={20}
                    height={20}
                   />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>
    </>
  );
}