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
    <div className="w-full relative min-h-screen h-fit">
      <div className="absolute inset-0 -z-10 h-full">
        <AnimatedBg />
      </div>

      <div className="absolute w-full md:block hidden bottom-0 pointer-events-none">
        <Lottie
          lottieRef={lottieDesktopRef}
          animationData={animationData}
          loop
          autoplay
          style={{ width: "100%", height: "auto" }}
        />
        <BrandList />
      </div>

      <div className="m-auto md:pt-32 lg:pt-50 pt-32 flex flex-col items-center absolute top-0 md:right-1/2 md:translate-x-1/2 w-full">
        <h1
          style={{ fontFamily: "Poppins" }}
          className="font-black text-[#254055] md:text-5xl text-2xl text-center mx-5 "
        >
          Tijd voor een check-up door de <br className="md:block hidden" />
          <span className="text-[#81C713]">Energie Dokter</span>
        </h1>

        <div className="text-center mt-5">
          <p
            className="text-[#4D4D4D] px-5 md:w-2/3 m-auto"
            style={{ fontFamily: "Poppins" }}
          >
            Ontdek hoe uw pand beter kan presteren — technisch, financieel én
            duurzaam. Wij maken inzichtelijk waar de kansen liggen en begeleiden
            u stap voor stap naar een toekomstbestendig gebouw.
          </p>
          <span className="bg-[#8dd1ba53]"></span>
        </div>
        <div className="md:px-5">
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
          className="text-[#254055] font-semibold mt-5 text-center px-5"
          style={{ fontFamily: "Poppins" }}
        >
          Geen verplichtingen, wel inzicht in de mogelijkheden voor uw gebouw
        </p>
        
        {/* <div className="bg-white p-2 w-full -mt-px md:hidden block "></div> */}
      </div>
      <div className="w-full md:hidden block pointer-events-none absolute bottom-0 -z-10">
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
