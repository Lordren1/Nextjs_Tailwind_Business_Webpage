import Companies from "@/app/components/home/Companies";
import HeroSub from "@/app/components/sharedComponents/HeroSub";
import Team from "@/app/components/team/Team";





export default function TeamPage() {
const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "SwifteCharge Team" },
  ];

  return (
    <>
      <HeroSub 
        title=" SwiftCharge Team "
        description="Empowering businesses through technology, innovation, and strategic solutions that drive measurable growth."
        breadcrumbLinks={breadcrumbLinks}
      />
    
      <Team limit={4} />
      <Companies />
    </>
  );
}