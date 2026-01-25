"use client";
import Link from "next/link";
import SectionTitle from "../components/SectionTitle";
import BrandList from "../components/BrandList";
import Reviews from "../components/Reviews";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import DienstenSection from "../components/DienstenSection";
import AnimatedBg from "../components/AnimatedBg";
import animationData from "@/public/assets/animations/partners.json";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useEffect, useRef } from "react";

export default function Partners() {
  const lottieDesktopRef = useRef<LottieRefCurrentProps>(null);
  const lottieMobileRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    // Set speed to 1 for both animations
    if (lottieDesktopRef.current) {
      lottieDesktopRef.current.setSpeed(1);
    }
    if (lottieMobileRef.current) {
      lottieMobileRef.current.setSpeed(1);
    }
  }, []);

  const scrollToSection = (id1: string) => {
    const section1 = document.getElementById(id1);
    section1?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div
        className="flex flex-col items-center gap-3 relative md:mb-10 mb-5 "
        style={{ fontFamily: "Poppins" }}
      >
        <div className="absolute inset-0 -z-10 h-full">
          <AnimatedBg />
        </div>
        <div
          className="relative w-full xl:block hidden pointer-events-none"
          style={{ paddingTop: "130px" }}
        >
          <Lottie
            lottieRef={lottieDesktopRef}
            animationData={animationData}
            loop
            autoplay
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="xl:absolute pt-36 md:w-2/3 lg:w-1/2 flex flex-col items-center">
          <div className="lg:flex hidden text-center  ">
            <SectionTitle
              title="Partners"
              span={
                <span className="font-black text-4xl text-[#254055]">
                  <span>Ons netwerk van </span>
                  <span className="text-[#81C713]"> experts</span>
                </span>
              }
              align="center"
            />
          </div>
          <div className="block lg:hidden text-center">
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
          <p className="text-[#4D4D4D] mt-3 md:text-base text-sm text-center px-3">
            Met onze partners werken we aan energieoplossingen van begin tot
            eind, die passen bij iedere situatie — van huiseigenaar tot
            ondernemer.
          </p>
          <div className="flex lg:hidden lg:justify-start justify-center md:gap-5 gap-2 md:mt-10 mt-5 md:mb-0">
            <Link
              href="/contact"
              className="text-white bg-[#81C713] hover:bg-[#689e12] transition-all duration-200 md:py-2 md:pb-3 px-5 rounded-full flex items-center justify-center w-fit md:text-lg text-sm "
            >
              Plan een gesprek
            </Link>
            <Link
              onClick={() => scrollToSection("partners")}
              href="#"
              className="text-[#4D4D4D] bg-white hover:bg-[#82c71350] transition-all duration-200 md:py-2 md:pb-3 p-3 px-8 rounded-full flex items-center justify-center w-fit md:text-lg text-sm "
            >
              Lees meer
            </Link>
          </div>
        </div>
        <div className="w-full xl:hidden block pointer-events-none mt-10">
          <Lottie
            lottieRef={lottieMobileRef}
            animationData={animationData}
            loop
            autoplay
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>

      <BrandList />
      <div id="partners"></div>
      <div className="bg-cover py-10 mt-10 relative ">
        <div className="inset-0 absolute -z-10">
          <AnimatedBg/>
        </div>
        <Reviews />
      </div>
      <Projects />
      <DienstenSection />
      <Footer />
    </>
  );
}
