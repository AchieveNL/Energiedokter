import BrandList from "@/app/components/BrandList";
import Diensten from "@/app/components/Diensten";
import DienstenSection from "@/app/components/DienstenSection";
import Faq from "@/app/components/Faq";
import Footer from "@/app/components/Footer";
import Projects from "@/app/components/Projects";
import Reviews from "@/app/components/Reviews";
import SectionTitle from "@/app/components/SectionTitle";
import Link from "next/link";

export default function DienstenPage() {
  return (
    <>
      <div
        className="md:pt-44 pt-28 min-h-screen md:px-20 bg-[url('/assets/HomeHeroBg.svg')] bg-cover"
        style={{ fontFamily: "Poppins" }}
      >
        <div className="md:block hidden">
          <SectionTitle
            title="Diensten"
            span={
              <span className="font-black text-4xl text-[#254055] ">
                Onze
                <span className="text-[#81C713]"> kerndiensten</span>
                <br />
                voor duurzaam wonen
              </span>
            }
            align="start"
          />
        </div>
        <div className="block md:hidden text-center">
          <SectionTitle
            titleSize={{ fontSize: 14 }}
            title="Wie wij zijn"
            span={
              <span className="font-black text-2xl text-[#254055]">
                Onze
                <span className="text-[#81C713]"> kerndiensten</span>
                voor duurzaam wonen
              </span>
            }
            align="center"
          />
        </div>
        <p className="text-[#4D4D4D] md:w-1/2 mt-3 md:text-base text-sm md:text-left text-center px-3">
          Bij Energie Dokter maken we gebouwen toekomstbestendig. We analyseren,
          adviseren en begeleiden u stap voor stap bij verduurzaming, zodat elk
          pand slimmer, efficiënter en duurzamer presteert. Wij zorgen dat
          energie optimaal werkt — voor u én uw gebouw.
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
      <Diensten />
      <DienstenSection />
      <Reviews />
      <div className="bg-[url('/assets/about/faq-bg.svg')] bg-cover pb-1 mt-5 ">
        <Faq />
      </div>
      <Projects />
      <div className="mt-10"></div>
      <Footer />
    </>
  );
}
