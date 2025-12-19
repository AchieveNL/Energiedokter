import Link from "next/link";
import SectionTitle from "../components/SectionTitle";
import BrandList from "../components/BrandList";
import Reviews from "../components/Reviews";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import DienstenSection from "../components/DienstenSection";

export default function Partners() {
  return (
    <>
      <div
        className="md:pt-44 pt-28 min-h-screen md:px-20 bg-[url('/assets/HomeHeroBg.svg')] bg-cover flex flex-col items-center gap-3 "
        style={{ fontFamily: "Poppins" }}
      >
        <div className="md:flex hidden text-center  ">
          <SectionTitle
            title="Partners"
            span={
              <span className="font-black text-4xl text-[#254055] flex flex-col gap-2 ">
                <span>Ons netwerk van </span>
                <span className="text-[#81C713]"> experts</span>
              </span>
            }
            align="center"
          />
        </div>
        <div className="block md:hidden text-center">
          <SectionTitle
            titleSize={{ fontSize: 14 }}
            title="Partners"
            span={
              <span className="font-black text-2xl text-[#254055]">
                Ons netwerk van <br />
                <span className="text-[#81C713]"> experts</span>
              </span>
            }
            align="center"
          />
        </div>
        <p className="text-[#4D4D4D] md:w-1/2 mt-3 md:text-base text-sm md:text-left text-center px-3">
          Met onze partners werken we aan energieoplossingen van begin tot eind,
          die passen bij iedere situatie — van huiseigenaar tot ondernemer.
        </p>
      </div>

      <BrandList />
      <div className="bg-[url('/assets/about/faq-bg.svg')] bg-cover py-10 mt-10 ">
        <Reviews />
      </div>
      <Projects />
      <DienstenSection />
      <Footer />
    </>
  );
}
