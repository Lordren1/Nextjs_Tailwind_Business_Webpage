import { projects } from "@/app/api/data";
import HeroSub from "@/app/components/sharedComponents/HeroSub";
import Image from "next/image";
import { notFound } from "next/navigation";



type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectDetails({ params }: Props) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) return notFound();

  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/projects", text: "Projects" },
    { href: `/projects/${project.slug}`, text: project.title},
  ];

  return (
    <>
      <HeroSub
        title={project.title}
        description={project.shortDescription}
        breadcrumbLinks={breadcrumbLinks}
      />

      <section className="py-14 lg:py-18 xl:py-22">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={600}
            className="w-full h-[500px] object-cover rounded-2xl mb-10"
          />

          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-6 text-prim">
              <h2 className="text-3xl font-bold">
                Project Overvie
              </h2>

              <p>{project.description}</p>

              <h3 className="text-2xl font-semibold text-prim">
                Challenge
              </h3>

              <p>{project.challenge}</p>

              <h3 className="text-2xl font-semibold text-prim">
                Solution
              </h3>

              <p>{project.solution}</p>

              <h3 className="text-2xl font-semibold text-prim">
                Results
              </h3>

              <ul className="space-y-3">
                {project.results.map((result) => (
                  <li key={result}>
                    • {result}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white shadow-lg rounded-2xl p-6 h-fit">
              <h3 className="text-xl font-semibold mb-6 text-prim">
                Project Details
              </h3>

              <div className="space-y-4">
                <div>
                  <strong>Client</strong>
                  <p>{project.client}</p>
                </div>

                <div>
                  <strong>Duration</strong>
                  <p>{project.duration}</p>
                </div>

                <div>
                  <strong>Year</strong>
                  <p>{project.year}</p>
                </div>

                <div>
                  <strong>Services</strong>
                  <ul>
                    {project.services.map((service) => (
                      <li key={service}>{service}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <strong>Technologies</strong>
                  <ul>
                    {project.technologies.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}