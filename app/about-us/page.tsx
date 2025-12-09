import Link from "next/link";
import Footer from "../components/Footer";
import Iridescence from "../components/Iredescence";
import SectionTitle from "../components/SectionTitle";
import BrandList from "../components/BrandList";
import AboutSection from "../components/AboutSection";
import Diensten from "../components/Diensten";

export default function AboutPage() {
  return (
    <>
      <div
        className="md:pt-44 pt-28 min-h-screen md:px-20 bg-[url('/assets/HomeHeroBg.svg')] bg-cover"
        style={{ fontFamily: "Poppins" }}
      >
        {/* <div className="absolute inset-0 -z-10 blur-lg">
          <Iridescence
            colorBalance={0}
            speed={0.3}
            amplitude={0}
            mouseReact={false}
          />
        </div> */}
        <div className="md:block hidden">
          <SectionTitle
            title="Wie wij zijn"
            span={
              <span className="font-black text-4xl text-[#254055] ">
                Uw <span className="text-[#81C713]">partner</span> in <br />{" "}
                duurzame energie
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
                Uw <span className="text-[#81C713]">partner</span> in duurzame
                energie
              </span>
            }
            align="center"
          />
        </div>
        <p className="text-[#4D4D4D] md:w-1/2 mt-3 md:text-base text-sm md:text-left text-center px-3">
          Bij de Energie Dokter helpen we bedrijven slimmer en groener met
          energie. Van energiediagnoses en advies tot het begeleiden van
          verduurzamingsprojecten: wij zorgen dat uw gebouw energiezuinig en
          toekomstbestendig wordt.
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
        <div className="md:flex hidden gap-5 mt-10">
          <Link
            href="#"
            className="border-2 border-[#81C713] bg-[#81C713] text-white text-sm p-3 px-5 rounded-xl hover:bg-[#72ab16] hover:border-[#72ab16] transition-all"
          >
            Plan een consult
          </Link>
          <Link
            href="#"
            className="border-2 text-[#254055] text-sm p-3 px-5 rounded-xl hover:bg-[#254055] hover:text-white transition-all"
          >
            Bekijk alle diensten{" "}
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
      <div className="md:hidden flex justify-center gap-3 mt-5">
        <Link
          href="/contact"
          className="border-2 border-[#81C713] bg-[#81C713] text-white text-sm p-2 px-3 rounded-xl hover:bg-[#72ab16] hover:border-[#72ab16] transition-all"
        >
          Plan een consult
        </Link>
        <Link
          href="/diensten/Alle-diensten"
          className="border-2 text-[#254055] text-sm p-2 px-3 rounded-xl hover:bg-[#254055] hover:text-white transition-all"
        >
          Bekijk alle diensten
        </Link>
      </div>

      <div className="mt-40"></div>
      <Footer />
    </>
  );
}
