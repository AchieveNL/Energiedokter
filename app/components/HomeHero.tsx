"use client";
import AnimatedLink from "./AnimatedLink";
import AnimatedBg from "./AnimatedBg";

export default function HomeHero() {
  return (
    <div className="w-full h-screen">
      <div className="absolute inset-0 -z-10 h-screen overflow-hidden">
          <AnimatedBg />
      </div>
      <div className="m-auto md:pt-44 pt-40 flex flex-col items-center">
        <h1
          style={{ fontFamily: "Poppins" }}
          className="font-black text-[#254055] md:text-5xl text-3xl text-center mx-5 "
        >
          Tijd voor een check-up door de <br />
          <span className="text-[#81C713]">Energie Dokter</span>
        </h1>
        <div className="text-center mt-10">
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
