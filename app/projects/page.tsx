import Link from "next/link";
import SectionTitle from "../components/SectionTitle";
import BrandList from "../components/BrandList";
import GridView from "../components/GridView";
import Projects from "../components/Projects";
import Reviews from "../components/Reviews";
import Faq from "../components/Faq";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function ProjectsPage() {
  return (
    <>
      <div
        className="md:pt-44 pt-28 min-h-screen md:px-20 bg-[url('/assets/HomeHeroBg.svg')] bg-cover"
        style={{ fontFamily: "Poppins" }}
      >
        <div className="md:block hidden">
          <SectionTitle
            title="Projecten"
            span={
              <span className="font-black text-4xl text-[#254055] ">
                <span className="text-[#81C713]">Innovatie</span> in elk <br />
                project
              </span>
            }
            align="start"
          />
        </div>
        <div className="block md:hidden text-center w-fit m-auto">
          <SectionTitle
            titleSize={{ fontSize: 14 }}
            title="Projecten"
            span={
              <span className="font-black text-2xl text-[#254055]">
                <span className="text-[#81C713]">Innovatie</span> in elk <br />
                project
              </span>
            }
            align="center"
          />
        </div>
        <p className="text-[#4D4D4D] md:w-1/2 mt-3 md:text-base text-sm md:text-left text-center px-3">
          Elk project dat we uitvoeren is een kans om innovatie te combineren
          met praktische oplossingen. Van analyse tot uitvoering zorgen we voor
          slimme, duurzame resultaten die waarde toevoegen — technisch,
          financieel én duurzaam.
        </p>
        <div className="flex md:justify-start justify-center md:gap-5 gap-2 mt-10">
          <Link
            href="#"
            className="text-white bg-[#81C713] hover:bg-[#689e12] transition-all duration-200 md:py-2 md:pb-3 px-5 rounded-full flex items-center justify-center w-fit md:text-lg text-sm "
          >
            Plan een gesprek
          </Link>
          <Link
            href="#"
            className="text-[#4D4D4D] bg-white hover:bg-[#82c71350] transition-all duration-200 md:py-2 md:pb-3 p-3 px-8 rounded-full flex items-center justify-center w-fit md:text-lg text-sm "
          >
            Lees meer
          </Link>
        </div>
      </div>
      <BrandList />
      <GridView />
      <div className="md:hidden block ">
        <Projects linkVisible={false} />
      </div>
      <div className="bg-[url('/assets/about/faq-bg.svg')] bg-cover py-10 mt-24 ">
        <Reviews />
      </div>
      <Faq />
      <ContactSection />
      <Footer/>
    </>
  );
}
