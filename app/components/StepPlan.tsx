"use client";
import { useState } from "react";
import Plan from "./Plan";
import { planSteps } from "../data/planSteps";

export default function StepPlan({
  activeBtn = "Onze aanpak",
}: {
  activeBtn?: string;
}) {
  const [active, setActive] = useState(activeBtn);

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
      className="bg-[linear-gradient(to_top,#FFFFFF,#F2F2CA80,#E5F0BFBF,#D0F0E7BF)] md:py-10 py-5 px-5 min-[768px]:px-20 min-[1280px]:px-24 min-[1700px]:px-50 min-[2000px]:px-80"
      style={{ fontFamily: "Poppins" }}
    >
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
  );
}
