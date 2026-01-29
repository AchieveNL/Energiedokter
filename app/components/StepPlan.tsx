"use client";
import { useRef, useState, useEffect } from "react";
import Plan from "./Plan";
import { planSteps } from "../data/planSteps";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "@/public/assets/animations/turbine.json";

export default function StepPlan({
  activeBtn = "Onze aanpak",
}: {
  activeBtn?: string;
}) {
  const LottieRef = useRef<LottieRefCurrentProps>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [active, setActive] = useState(activeBtn);
  const [minHeight, setMinHeight] = useState(0);

  useEffect(() => {
    // Calculate animation height based on its aspect ratio
    const animationWidth = animationData.w;
    const animationHeight = animationData.h;
    const aspectRatio = animationHeight / animationWidth;
    
    const updateMinHeight = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const calculatedHeight = containerWidth * aspectRatio;
        setMinHeight(calculatedHeight);
      }
    };

    updateMinHeight();
    window.addEventListener('resize', updateMinHeight);
    
    return () => window.removeEventListener('resize', updateMinHeight);
  }, []);

  const toggleActive = (e: React.MouseEvent<HTMLButtonElement>) => {
    setActive(e.currentTarget.innerText);
  };

  const NavLink = ({ text }: { text: string }) => (
    <button
      onClick={toggleActive}
      className={`md:text-[16px] text-xs font-semibold md:py-4 py-3 md:px-7 px-5 md:rounded-2xl rounded-xl hover:cursor-pointer transition-all duration-300 text-nowrap relative overflow-hidden ${
        active === text
          ? "bg-[#81C713] text-white"
          : "text-[#254055] bg-white hover:bg-[#82c71324]"
      }`}
    >
      <span className="relative z-10">{text}</span>
    </button>
  );

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden bg-[linear-gradient(to_top,#FFFFFF,#F2F2CA80,#E5F0BFBF,#D0F0E7BF)] md:pt-10 pt-5 px-5 min-[768px]:px-20 min-[1280px]:px-24 min-[1700px]:px-50 min-[2000px]:px-80"
      style={{ fontFamily: "Poppins", minHeight: `${minHeight}px` }}
    >
      {/* Layer 2: Lottie Animation */}
      <div className="absolute bottom-0 left-0 right-0 w-full flex items-end z-10">
        <Lottie
          lottieRef={LottieRef}
          animationData={animationData}
          loop
          autoplay
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      {/* Layer 3: Content (Nav + Plan) */}
      <div className="relative z-20">
        <nav className="flex flex-wrap items-center xl:justify-center gap-2 md:gap-5">
          <NavLink text="Onze aanpak" />
          <NavLink text="Energielabels" />
          <NavLink text="GACS" />
          <NavLink text="Informatieplicht" />
          <NavLink text="WKO-beheer" />
          <NavLink text="Trainingen" />
        </nav>
        <Plan active={active} />
      </div>
    </div>
  );
}