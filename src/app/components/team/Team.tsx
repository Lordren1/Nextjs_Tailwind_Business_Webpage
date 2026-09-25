
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { team } from "@/app/api/data";



interface TeamProps {
  limit?: number; // add limit prop
}

export default function Team({ limit }: TeamProps) {
  const displayedTeam = typeof limit === 'number' ? team.slice(0, limit) : team;

  return (
    <>
      <section className=" bg-light overflow-hidden py-14 lg:py-18 xl:py-22 bg-prim-light">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 space-y-14">
          <div className="team-content flex flex-col gap-2 items-center text-center">
            <span className="sub-title text-14 bg-prim text-white py-1 rounded-xl relative font-chakrapetch capitalize ps-5 pe-3">
              Meet Our Team
            </span>
            <h2 className="w-full lg:w-3/4 mx-auto mt-4 font-chakrapetch lg:text-35 font-semibold">
              The Team Driving Our Success.
            </h2>
          </div>

          <div className="team-wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {displayedTeam.map((member: (typeof team)[number], index: number) => (
            <div
              key={index}
              className="team-item w-full bg-white shadow-xl rounded-xl border group overflow-hidden transition duration-500 hover:-translate-y-2"
            >
              <div className=" team-image relative  h-[350px] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className=" w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/60 transition-colors duration-500 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100">
                  <div className="flex gap-3">
                    <Link
                      href={member.social.facebook}
                      className="bg-white text-dark w-[38px] h-[38px] rounded-full flex justify-center items-center hover:bg-prim hover:text-white transition-colors duration-300"
                    >
                      <Icon icon="ri:facebook-fill" width="18" height="18" />
                    </Link>
                    <Link
                      href={member.social.twitter}
                      className="bg-white text-dark w-[38px] h-[38px] rounded-full flex justify-center items-center hover:bg-prim hover:text-white transition-colors duration-300"
                    >
                      <Icon icon="ri:twitter-x-fill" width="18" height="18" />
                    </Link>
                    <Link
                      href={member.social.linkedin}
                      className="bg-white text-dark w-[38px] h-[38px] rounded-full flex justify-center items-center hover:bg-prim hover:text-white transition-colors duration-300"
                    >
                      <Icon icon="ri:linkedin-fill" width="18" height="18" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="p-5 text-center space-y-1">
                <h4 className="font-medium font-unbounded text-18 group-hover:text-prim transition-colors duration-300">
                  {member.name}
                </h4>
                <p className="text-pera-dark font-normal text-14">
                  {member.role}
                </p>
                <p className="text-pera-dark font-normal text-16 mt-3">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>

      
    </>
  );

}