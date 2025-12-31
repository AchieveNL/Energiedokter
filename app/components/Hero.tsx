"use client";
import Link from "next/link";
import SectionTitle from "./SectionTitle";
import AnimatedBg from "./AnimatedBg";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useEffect, useRef, useState } from "react";
import animationData1 from "@/public/assets/animations/faq.json";

export default function Hero({
  span,
  title,
  text,
  mobileSectionId,
  desktopSectionId,
  animationData,
}: {
  span: React.ReactNode;
  title: string;
  text: string;
  mobileSectionId?: any;
  desktopSectionId?: any;
  animationData?: any;
}) {
  const scrollToSection = (id1: string, id2: string) => {
    const section1 = document.getElementById(id1);
    const section2 = document.getElementById(id2);
    section1?.scrollIntoView({ behavior: "smooth" });
    section2?.scrollIntoView({ behavior: "smooth" });
  };

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
      className="md:pt-44 pt-28 Jmin-h-screen md:px-20 flex flex-col gap-3 relative"
      style={{
        height: containerHeight > 0 ? `${containerHeight - 50}px` : "fit-content",
      }}
    >
      <div className="absolute inset-0 -z-10 md:h-screen h-">
        <AnimatedBg />
        <div
          ref={lottieRef}
          className="absolute w-full md:block hidden top-0 pointer-events-none md:mt-10"
        >
          <Lottie
            lottieRef={lottieDesktopRef}
            animationData={animationData || animationData1}
            loop
            autoplay
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
      <div className="md:block hidden">
        <SectionTitle title={title} span={span} align="start" />
      </div>
      <div className="block md:hidden text-center self-center">
        <SectionTitle
          titleSize={{ fontSize: 14 }}
          title={title}
          span={span}
          align="center"
        />
      </div>
      <p className="text-[#4D4D4D] md:w-1/2 mt-3 md:text-base text-sm md:text-left text-center px-3">
        {text}
      </p>
      <div className="flex md:justify-start justify-center md:gap-5 gap-2 md:mt-10 mt-5">
        <Link
          href="/contact"
          className="text-white bg-[#81C713] hover:bg-[#689e12] transition-all duration-200 md:py-2 md:pb-3 px-5 rounded-full flex items-center justify-center w-fit md:text-lg text-sm "
        >
          Plan een gesprek
        </Link>
        <Link
          onClick={() => scrollToSection(desktopSectionId, mobileSectionId)}
          href="#"
          className="text-[#4D4D4D] bg-white hover:bg-[#82c71350] transition-all duration-200 md:py-2 md:pb-3 p-3 px-8 rounded-full flex items-center justify-center w-fit md:text-lg text-sm "
        >
          Lees meer
        </Link>
      </div>
      <div
        // ref={lottieRef}
        className="w-full md:hidden block pointer-events-none"
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
  );
}
