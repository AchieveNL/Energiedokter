"use client";
import Link from "next/link";
import Footer from "../components/Footer";
import Iridescence from "../components/Iredescence";
import SectionTitle from "../components/SectionTitle";
import BrandList from "../components/BrandList";
import AboutSection from "../components/AboutSection";
import Diensten from "../components/Diensten";
import Reviews from "../components/Reviews";
import Faq from "../components/Faq";
import Projects from "../components/Projects";
import Hero from "../components/Hero";

export default function AboutPage() {
  return (
    <>
      <Hero
        sectionId={"about-us"}
        title="Wie wij zijn"
        span={
          <span className="font-black md:text-4xl text-2xl text-[#254055] flex flex-col gap-2 ">
            <span>
              Uw <span className="text-[#81C713]">partner</span> in
            </span>
            <span>duurzame energie</span>
          </span>
        }
        text="Bij de Energie Dokter helpen we bedrijven slimmer en groener met
        energie. Van energiediagnoses en advies tot het begeleiden van
        verduurzamingsprojecten: wij zorgen dat uw gebouw energiezuinig en
        toekomstbestendig wordt."
      />
      <BrandList />
      <AboutSection />
      <Diensten />

      {/* help */}
      <div
        className="bg-[url('/assets/HomeHeroBg.svg')] bg-cover md:p-7 p-3 rounded-tl-4xl rounded-br-4xl md:mx-10 mx-3 relative"
        style={{ fontFamily: "Poppins" }}
      >
        <div className="md:w-auto w-2/3 pb-3">
          <h1 className="text-[#0D2131] font-bold md:text-2xl pb-2 ">
            Last van energieverlies? De{" "}
            <span className="text-[#81C713]">Energie Dokter</span> helpt!
          </h1>
          <p className="text-[#254055] md:text-base text-sm ">
            De Energie Dokter schrijft het juiste behandelplan voor
          </p>
        </div>
        {/* links */}

        <div className="md:flex hidden md:gap-5 gap-2 mt-5 items-center">
          <Link
            href="/contact"
            className="md:border-2 border border-[#81C713] bg-[#81C713] text-white md:text-base text-sm flex justify-center items-center h-fit rounded-xl transition-all md:px-5 p-2 px-3 text-nowrap hover:bg-[#5a8613] hover:border-[#5a8613]"
          >
            Plan een consult
          </Link>
          <Link
            href="/diensten/Alle-diensten"
            className="text-[#254055] md:border-2 border border-[#254055] md:text-base text-sm flex justify-center items-center h-fit rounded-xl transition-all md:px-5 p-2 px-3 text-nowrap hover:bg-[#72a2c7] hover:border-[#72a2c7] hover:text-white"
          >
            Bekijk alle diensten
          </Link>
        </div>
        <img
          src="/assets/about/man.svg"
          className="absolute bottom-0 md:right-32 right-5 h-[110%]"
          alt=""
        />
        <div className="absolute right-6 md:top-2 bottom-0 md:text-[#254055] text-white text-center md:bg-white rounded-tl-2xl rounded-br-2xl h-fit px-3 md:py-3 ">
          <h1 className="font-bold md:text-base text-xs ">Rutger Jenner</h1>
          <p className="md:text-[8px] text-[6px] ">Oprichter en Directeur</p>
        </div>
      </div>
      {/* mobile links */}
      <div className="md:hidden justify-center flex md:gap-5 gap-2 mt-5 items-center">
        <Link
          href="/contact"
          className="md:border-2 border border-[#81C713] bg-[#81C713] text-white md:text-base text-sm flex justify-center items-center h-fit rounded-xl transition-all md:px-5 p-2 px-3 text-nowrap hover:bg-[#5a8613] hover:border-[#5a8613]"
        >
          Plan een consult
        </Link>
        <Link
          href="/diensten/Alle-diensten"
          className="text-[#254055] md:border-2 border border-[#254055] md:text-base text-sm flex justify-center items-center h-fit rounded-xl transition-all md:px-5 p-2 px-3 text-nowrap hover:bg-[#72a2c7] hover:border-[#72a2c7] hover:text-white"
        >
          Bekijk alle diensten
        </Link>
      </div>
      <div className="md:mt-20 mt-10"></div>
      <Reviews />
      <div className="bg-[url('/assets/about/faq-bg.svg')] bg-cover pb-1 mt-5 ">
        <Faq />
      </div>
      <Projects />

      <div className="md:mt-20 mt-10"></div>
      <Footer />
    </>
  );
}
