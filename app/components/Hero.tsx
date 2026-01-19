"use client";
import Link from "next/link";
import SectionTitle from "./SectionTitle";
import AnimatedBg from "./AnimatedBg";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useEffect, useRef } from "react";
import animationData1 from "@/public/assets/animations/faq.json";

export default function Hero({
  span,
  title,
  text,
  mobileSectionId,
  desktopSectionId,
  animationData,
  heroStyle = "130px",
  whiteBoxVisible = true,
  displayBtns = true,
}: {
  span: React.ReactNode;
  title: string;
  text: string;
  mobileSectionId?: any;
  desktopSectionId?: any;
  animationData?: any;
  heroStyle?: string;
  whiteBoxVisible?: boolean;
  displayBtns?: boolean;
}) {
  const scrollToSection = (id1: string, id2: string) => {
    const section1 = document.getElementById(id1);
    const section2 = document.getElementById(id2);
    section1?.scrollIntoView({ behavior: "smooth" });
    section2?.scrollIntoView({ behavior: "smooth" });
  };

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
    <div className="flex flex-col md:gap-0 gap-3 relative">
      <div className="absolute inset-0 -z-10 h-full">
        <AnimatedBg />
      </div>

      <div
        className="relative w-full lg:block hidden pointer-events-none"
        style={{ paddingTop: heroStyle }}
      >
        <Lottie
          lottieRef={lottieDesktopRef}
          animationData={animationData || animationData1}
          loop
          autoplay
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      <div className="lg:absolute lg:pt-36 lg:ml-10">
        <div className="lg:block hidden">
          <SectionTitle title={title} span={span} align="start" />
        </div>
        <div className="block lg:hidden text-center mt-24 w-fit m-auto">
          <SectionTitle
            titleSize={{ fontSize: 14 }}
            title={title}
            span={span}
            align="center"
          />
        </div>
        <p className="text-[#4D4D4D] md:w-1/2 m-auto lg:m-3 lg:ml-0 mt-3 lg:text-base text-sm lg:text-left text-center px-3">
          {text}
        </p>
        <div
          style={{ display: displayBtns ? "flex" : "none" }}
          className="flex lg:justify-start justify-center lg:gap-5 gap-2 lg:mt-10 mt-5 lg:mb-0"
        >
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
        <div className="w-full lg:hidden block pointer-events-none mt-10">
          <Lottie
            lottieRef={lottieMobileRef}
            animationData={animationData}
            loop
            autoplay
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}
