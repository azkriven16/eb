import About from "@/components/bio";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Works from "@/components/works";

export default function Home() {
  return (
    <>
      <Hero />
      <Works />
      <About />
      <Contact />
    </>
  );
}
