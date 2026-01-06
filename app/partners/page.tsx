"use client";
import Link from "next/link";
import SectionTitle from "../components/SectionTitle";
import BrandList from "../components/BrandList";
import Reviews from "../components/Reviews";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import DienstenSection from "../components/DienstenSection";
import AnimatedBg from "../components/AnimatedBg";
import animationData from "@/public/assets/animations/faq.json";
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
  return (
    <>
      <div
        className="flex flex-col items-center gap-3 relative "
        style={{ fontFamily: "Poppins" }}
      >
        <div className="absolute inset-0 -z-10 h-full">
          <AnimatedBg />
        </div>
        <div
          className="relative w-full md:block hidden pointer-events-none"
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
        <div className="md:absolute pt-36 md:w-1/2 flex flex-col items-center">
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
          <p className="text-[#4D4D4D] mt-3 md:text-base text-sm text-center px-3">
            Met onze partners werken we aan energieoplossingen van begin tot
            eind, die passen bij iedere situatie — van huiseigenaar tot
            ondernemer.
          </p>
        </div>
        <div className="w-full md:hidden block pointer-events-none mt-10">
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
      <div className="bg-[url('/assets/about/faq-bg.svg')] bg-cover py-10 mt-10 ">
        <Reviews />
      </div>
      <Projects />
      <DienstenSection />
      <Footer />
    </>
  );
}
