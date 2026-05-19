import HeroSlider from "../components/HeroSlider";
import Services from "../components/Services";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import FeaturedProjects from "../components/FeaturedProjects";
import Process from "../components/Process";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <Services />
      <Process />
      <FeaturedProjects />
      <Stats />
      <Testimonials />
      <CTA />
    </>
  );
}
