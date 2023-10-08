import About from "@/components/bio";
import Certs from "@/components/certs";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Works from "@/components/works";

export default function Home() {
  return (
    <>
      <Hero />
      <Works />
      <About />
      <Certs />
      <Contact />
    </>
  );
}
