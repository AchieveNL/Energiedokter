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
  displayBtns=true,
}: {
  span: React.ReactNode;
  title: string;
  text: string;
  mobileSectionId?: any;
  desktopSectionId?: any;
  animationData?: any;
  heroStyle?: string;
  whiteBoxVisible?: boolean;
  displayBtns?:boolean
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
        className="relative w-full md:block hidden pointer-events-none"
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
      {/* <div className="md:block hidden">
        <div
          className="bg-white p-4 -mt-px"
          style={{ display: whiteBoxVisible ? "block" : "none" }}
        ></div>
      </div> */}

      <div className="md:absolute md:pt-36 md:ml-10">
        <div className="md:block hidden">
          <SectionTitle title={title} span={span} align="start" />
        </div>
        <div className="block md:hidden text-center mt-24 w-fit m-auto">
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
        <div style={{display:displayBtns?"flex":"none"}} className="flex md:justify-start justify-center md:gap-5 gap-2 md:mt-10 mt-5 md:mb-0">
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
        <div className="w-full md:hidden block pointer-events-none mt-10">
          <Lottie
            lottieRef={lottieMobileRef}
            animationData={animationData}
            loop
            autoplay
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        {/* <div className="bg-white p-3 w-full md:hidden block -mt-px"></div> */}
      </div>
    </div>
  );
}
