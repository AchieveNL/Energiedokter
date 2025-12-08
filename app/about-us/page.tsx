import Link from "next/link";
import Footer from "../components/Footer";
import Iridescence from "../components/Iredescence";
import SectionTitle from "../components/SectionTitle";
import BrandList from "../components/BrandList";
import AboutSection from "../components/AboutSection";

export default function AboutPage() {
  return (
    <>
      <div
        className="md:pt-44 pt-28 min-h-screen md:px-20"
        style={{ fontFamily: "Poppins" }}
      >
        <div className="absolute inset-0 -z-10 blur-lg">
          <Iridescence
            colorBalance={0}
            speed={0.3}
            amplitude={0}
            mouseReact={false}
          />
        </div>
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
      <div className="mt-40"></div>
      <Footer />
    </>
  );
}
