"use client";
import { useEffect, useRef, useState } from "react";
import AnimatedLink from "./AnimatedLink";
import AnimatedBg from "./AnimatedBg";
import Lottie from "lottie-react";
import animationData from "@/public/assets/animations/home.json";
import type { LottieRefCurrentProps } from "lottie-react";

export default function HomeHero() {
  const lottieRef = useRef<HTMLDivElement>(null);
  const lottieDesktopRef = useRef<LottieRefCurrentProps>(null);
  const lottieMobileRef = useRef<LottieRefCurrentProps>(null);
  const [containerHeight, setContainerHeight] = useState<number>(0);

  useEffect(() => {
    const calculateHeight = () => {
      if (lottieRef.current) {
        const lottieHeight = lottieRef.current.offsetHeight;
        setContainerHeight(lottieHeight);
      }
    };

    // Initial calculation
    calculateHeight();

    // Recalculate on window resize
    window.addEventListener("resize", calculateHeight);

    // Small delay to ensure Lottie has rendered
    const timer = setTimeout(calculateHeight, 100);

    return () => {
      window.removeEventListener("resize", calculateHeight);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    // Set speed to 0.5 (half speed) for both animations
    if (lottieDesktopRef.current) {
      lottieDesktopRef.current.setSpeed(1);
    }
    if (lottieMobileRef.current) {
      lottieMobileRef.current.setSpeed(1);
    }
  }, []);

  return (
    <div
      className="w-full"
      style={{
        height: containerHeight > 0 ? `${containerHeight - 70}px` : "100vh",
      }}
    >
      <div className="absolute inset-0 -z-10 md:h-[90vh] h-[94vh]">
        <AnimatedBg />
        <div
          ref={lottieRef}
          className="absolute w-full md:block hidden -top-10 pointer-events-none"
        >
          <Lottie
            lottieRef={lottieDesktopRef}
            animationData={animationData}
            loop
            autoplay
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        {/* mobile view */}
        <div
          // ref={lottieRef}
          className="absolute w-full md:hidden block -bottom-12 pointer-events-none"
        >
          <Lottie
            lottieRef={lottieMobileRef}
            animationData={animationData}
            loop
            autoplay
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>

      <div className="m-auto md:pt-32 pt-32 flex flex-col items-center">
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
      </div>
    </div>
  );
}
