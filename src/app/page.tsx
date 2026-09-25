'use client';

import { useEffect } from "react";
import Commitment from "./components/home/Commitment";
import Companies from "./components/home/Companies";
import Hero from "./components/home/Hero";
import Projects from "./components/home/Projects";
import Solution from "./components/home/Solution";
import Testimonials from "./components/home/Testimonials";
/* import WhyChooseUs from "./components/home/WhyChooseUs"; */
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Home() {

 useEffect(() => {
    const initAOS = async () => {
      await import('aos');
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);

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