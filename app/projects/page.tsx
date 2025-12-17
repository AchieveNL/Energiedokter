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
import { useRef } from "react";

export default function ProjectsPage() {
  return (
    <>
      <Hero
        title="Projecten"
        text="Elk project dat we uitvoeren is een kans om innovatie te combineren
          met praktische oplossingen. Van analyse tot uitvoering zorgen we voor
          slimme, duurzame resultaten die waarde toevoegen — technisch,
          financieel én duurzaam."
        span={
          <span className="font-black md:text-4xl text-2xl text-[#254055] flex flex-col gap-3 ">
            <span>
              <span className="text-[#81C713]">Innovatie</span> in elk
            </span>
            <span>project</span>
          </span>
        }
      />
      <BrandList />
      <div>
        <GridView
          sectionTitle={
            <SectionTitle
              title="Projecten"
              span={
                <div className="text-[#254055] md:text-4xl text-2xl font-extrabold text-center ">
                  Projecten waar we <br />
                  <span className="text-[#81C713] ">trots</span> op zijn
                </div>
              }
            />
          }
          cards={cards}
        />
      </div>
      <div className="md:hidden block p-5">
        <Projects linkVisible={false} />
      </div>
      <div className="bg-[url('/assets/about/faq-bg.svg')] bg-cover py-10 mt-24 ">
        <Reviews />
      </div>
      <Faq />
      <ContactSection />
      <Footer />
    </>
  );
}
