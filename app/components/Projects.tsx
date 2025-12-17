"use client";

import SectionTitle from "./SectionTitle";
import AnimatedLink from "./AnimatedLink";
import CarouselSlider from "./CarouselSlider";
import { cards } from "../data/projects";

export default function Projects({
  linkVisible = true,
}: {
  linkVisible?: boolean;
}) {
  return (
    <div
      className="mt-20 flex flex-col items-center overflow-hidden"
      style={{ fontFamily: "Poppins" }}
    >
      <SectionTitle
        title="Projecten"
        span={
          <div className="md:text-4xl text-2xl font-extrabold text-center mb-5 ">
            <span className="text-[#254055]">
              Projecten waar we <br />
              <span className="text-[#81C713]"> trots </span>
              op zijn
            </span>
          </div>
        }
      />
      <CarouselSlider cards={cards} />

      <div
        style={!linkVisible ? { display: "none" } : { display: "block" }}
        className="w-fit m-auto md:scale-100 scale-80"
      >
        <AnimatedLink
          text="Bekijk alle projecten"
          bg="#63A0AC"
          arrowColor="#417A85"
          arrowBg="white"
          textColor="white"
          borderColor="transparent"
          shimmerColor="transparent"
          fillBg="#266d78b4"
          href="/projects"
          textSize="18px"
        />
        <span className="bg-[#266d78b4]"></span>
      </div>
    </div>
  );
}
