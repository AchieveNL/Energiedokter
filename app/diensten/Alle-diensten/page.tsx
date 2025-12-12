import BrandList from "@/app/components/BrandList";
import Diensten from "@/app/components/Diensten";
import DienstenSection from "@/app/components/DienstenSection";
import Faq from "@/app/components/Faq";
import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Hero";
import Projects from "@/app/components/Projects";
import Reviews from "@/app/components/Reviews";
import SectionTitle from "@/app/components/SectionTitle";
import Link from "next/link";

export default function DienstenPage() {
  return (
    <>
      <Hero
        title="Diensten"
        span={
          <span className="font-black md:text-4xl text-2xl text-[#254055] flex flex-col gap-2">
            <span>
              Onze
              <span className="text-[#81C713]"> kerndiensten</span>
            </span>
            voor duurzaam wonen
          </span>
        }
        text="Bij Energie Dokter maken we gebouwen toekomstbestendig. We analyseren,
          adviseren en begeleiden u stap voor stap bij verduurzaming, zodat elk
          pand slimmer, efficiënter en duurzamer presteert. Wij zorgen dat
          energie optimaal werkt — voor u én uw gebouw."
      />
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
