import Commitment from "./components/home/Commitment";
import Companies from "./components/home/Companies";
import Hero from "./components/home/Hero";
import Projects from "./components/home/Projects";
import Solution from "./components/home/Solution";
import Testimonials from "./components/home/Testimonials";
/* import WhyChooseUs from "./components/home/WhyChooseUs"; */



export default function Home() {

  return (
    <>
    <main>
      <Hero />
      <Solution />
      <Commitment />
      <Projects />
      <Testimonials />
      {/* <WhyChooseUs /> */}
      <Companies />
    </main>
    </>
  );
}