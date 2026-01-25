import Link from "next/link";
import SectionTitle from "../components/SectionTitle";
import BrandList from "../components/BrandList";
import GridView from "../components/GridView";
import Projects from "../components/Projects";
import Reviews from "../components/Reviews";
import Faq from "../components/Faq";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import { cards } from "../data/projects";
import animationData from "@/public/assets/animations/projecten.json";
import AnimatedBg from "../components/AnimatedBg";

export default function ProjectsPage() {
  return (
    <>
      <Hero
        animationData={animationData}
        desktopSectionId="projects2"
        mobileSectionId="projects1"
        title="Projecten"
        text="Elk project dat we uitvoeren is een kans om innovatie te combineren
          met praktische oplossingen. Van analyse tot uitvoering zorgen we voor
          slimme, duurzame resultaten die waarde toevoegen — technisch,
          financieel én duurzaam."
        span={
          <span className="font-black md:text-4xl text-2xl text-[#254055] flex flex-col">
            <span className="flex gap-2">
              <span className="text-[#81C713]">Innovatie</span> in elk
              <span className="md:block hidden">project</span>
            </span>
            <span className="md:hidden block">project</span>
          </span>
        }
      />
      <BrandList />
      <div id="projects1">
        <Projects linkVisible={false} />
      </div>
      <div className="bg-cover py-10 mt-10 relative ">
        <div className="inset-0 absolute -z-10">
          <AnimatedBg />
        </div>
        <Reviews />
      </div>
      <div className="md:mt-20 mt-10">
        <Faq />
      </div>
      <ContactSection />
      <Footer />
    </>
  );
}
