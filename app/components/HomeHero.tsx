"use client";
import { useEffect, useRef } from "react";
import AnimatedLink from "./AnimatedLink";
import AnimatedBg from "./AnimatedBg";
import Lottie from "lottie-react";
import animationData from "@/public/assets/animations/home.json";
import type { LottieRefCurrentProps } from "lottie-react";
import BrandList from "./BrandList";

export default function HomeHero() {
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
    <div className="w-full relative min-h-fit">
      <div className="absolute inset-0 -z-10 h-full">
        <AnimatedBg />
      </div>

      {/* Desktop Lottie - hidden on tablet and mobile */}
      <div className="absolute w-full xl:block hidden bottom-0 pointer-events-none">
        <Lottie
          lottieRef={lottieDesktopRef}
          animationData={animationData}
          loop
          autoplay
          style={{ width: "100%", height: "auto" }}
        />
        <BrandList />
      </div>

      {/* Content Container - adjusted for tablets */}
      <div className="m-auto xl:pt-50 md:pt-34 pt-24 pb-8 flex flex-col items-center relative w-full px-4">
        <h1
          style={{ fontFamily: "Poppins" }}
          className="font-black text-[#254055] xl:text-5xl md:text-4xl sm:text-3xl text-2xl text-center"
        >
          Tijd voor een check-up door de <br className="sm:block hidden" />
          <span className="text-[#81C713]">Energie Dokter</span>
        </h1>

        <div className="text-center mt-5 max-w-3xl">
          <p
            className="text-[#4D4D4D] md:text-base text-sm"
            style={{ fontFamily: "Poppins" }}
          >
            Ontdek hoe uw pand beter kan presteren — technisch, financieel én
            duurzaam. Wij maken inzichtelijk waar de kansen liggen en begeleiden
            u stap voor stap naar een toekomstbestendig gebouw.
          </p>
          <span className="bg-[#8dd1ba53]"></span>
        </div>

        <div className="mt-6 md:mt-8">
          <AnimatedLink
            text="Plan vandaag nog een consult met Rutger"
            bg="white"
            arrowColor="white"
            arrowBg="#63A0AC"
            textColor="black"
            borderColor="#63A0AC"
            shimmerColor="white"
            fillBg="#8dd1ba53"
            href="/contact"
          />
        </div>

        <p
          className="text-[#254055] font-semibold mt-5 text-center md:text-base text-sm max-w-2xl"
          style={{ fontFamily: "Poppins" }}
        >
          Geen verplichtingen, wel inzicht in de mogelijkheden voor uw gebouw
        </p>
      </div>

      {/* Mobile/Tablet Lottie - shown on tablets and mobile */}
      <div className="w-full xl:hidden block pointer-events-none relative">
        <Lottie
          lottieRef={lottieMobileRef}
          animationData={animationData}
          loop
          autoplay
          style={{ width: "100%", height: "auto" }}
        />
        <div className="py-3 bg-white"></div>
        <BrandList />
      </div>
    </div>
  );
}
