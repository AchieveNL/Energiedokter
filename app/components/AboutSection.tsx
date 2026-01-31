"use client";

import { Plus } from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
  const Statics = ({
    number,
    text,
    style,
  }: {
    style: {};
    number: string;
    text: string;
  }) => (
    <div className="flex flex-col" style={style}>
      <span className="md:text-3xl text-2xl text-[#3C8101] font-bold">
        {number}
      </span>
      <span className="text-[#4D4D4D] md:text-base text-sm ">{text}</span>
    </div>
  );
  return (
    <div
      id="about-us"
      style={{ fontFamily: "Poppins" }}
      className="md:pt-20 lg:pt-28 pt-10 flex lg:flex-row flex-col md:gap-5 lg:gap-10 gap-1 md:mx-20 mx-5"
    >
      <div className="lg:hidden flex flex-col gap-3">
        <h1 className="text-xl text-[#254055] font-extrabold">
          Onze klanten <span className="text-[#81C713]">vertrouwen</span> ons
        </h1>
        <Link
          href="https://maps.app.goo.gl/odE4dC1eoqHBEMfD9"
          target="_blank"
          className="items-center gap-5 flex lg:hidden"
        >
          <div className="p-[2px] rounded-2xl bg-linear-to-b from-[#F2F2CA80] to-[#D0F0E7BF] w-15 h-15">
            <div className="w-full h-full rounded-2xl bg-white p-3 flex items-center justify-center">
              <img
                src="/assets/about/google.png"
                className="w-full h-full object-contain"
                alt=""
              />
            </div>
          </div>
          <div>
            <h1 className="text-[#4D4D4D]">Bekijk onze Google Reviews</h1>
            <img src="/assets/about/stars.png" className="w-24 mt-2" alt="" />
            <div className="text-transparent">-</div>
          </div>
        </Link>
      </div>

      {/* left section */}
      <div className="lg:w-1/2 h-fit bg-[#F6F6F6] rounded-4xl lg:p-7 p-4 lg:pb-10 pb-7 flex flex-col lg:gap-5 gap-3 md:mt-2 mt-5">
        <h1 className="text-[#254055] md:text-3xl text-2xl font-extrabold ">
          Wie zijn wij?
        </h1>
        <p className="text-[#4D4D4D] md:text-base text-sm">
          Energie Dokter is uw betrouwbare partner op het gebied van
          energieadvies en duurzaam bouwen. Met praktische oplossingen en
          persoonlijk advies helpen wij u sneller, slimmer en energiezuiniger te
          werken.
        </p>
        <div className="flex flex-wrap justify-center">
          <div
            className="lg:block hidden "
            style={{ width: "30.33%", textAlign: "center", marginTop: 20 }}
          >
            <Statics style={{}} number="150+" text="Gebouwen verduurzaamd" />
          </div>
          <div
            className="block lg:hidden "
            style={{ width: "30.33%", textAlign: "left", marginTop: 20 }}
          >
            <Statics style={{}} number="150+" text="Gebouwen verduurzaamd" />
          </div>
          <div
            className="md:w-1/5 lg:w-1/4 2xl:w-[20%] p-7"
            style={{
              width:
                typeof window !== "undefined" && window.innerWidth >= 2000
                  ? "12%"
                  : undefined,
            }}
          >
            <img src="/favicon.svg" className="w-full" />
          </div>
          <Statics
            number="12+"
            text="Gecertificeerde specialisten"
            style={{ width: "33.33%" }}
          />
          <Statics
            number="60%"
            text="Gemiddelde energiebesparing"
            style={{ textAlign: "center" }}
          />
        </div>
      </div>

      {/* right section */}
      <div className="lg:w-1/2 flex flex-col gap-5">
        <div className="lg:block hidden">
          <h1 className="text-3xl text-[#254055] font-extrabold">
            Onze klanten <span className="text-[#81C713]">vertrouwen</span> ons
          </h1>
        </div>
        <Link href="https://maps.app.goo.gl/odE4dC1eoqHBEMfD9" target="_blank" className="items-center gap-5 hidden lg:flex">
          <div className="p-[2px] rounded-2xl bg-linear-to-b from-[#F2F2CA80] to-[#D0F0E7BF] w-20 h-20">
            <div className="w-full h-full rounded-2xl bg-white p-4 flex items-center justify-center">
              <img
                src="/assets/about/google.png"
                className="w-full h-full object-contain"
                alt=""
              />
            </div>
          </div>
          <div>
            <h1 className="text-[#4D4D4D]">Bekijk onze Google Reviews</h1>
            <img src="/assets/about/stars.png" className="w-24 mt-2" alt="" />
            <div className="text-transparent">-</div>
          </div>
        </Link>

        <div className="bg-[#F0F8E2] rounded-4xl md:p-7 p-4 md:px-10 flex flex-col gap-5 md:mt-0 mt-7">
          <h1 className="text-[#254055] md:text-3xl text-2xl font-extrabold ">
            Waarom Energie Dokter de
            <span className="text-[#81C713]"> juiste</span> partner is
          </h1>
          <span className="text-[#4D4D4D] md:text-base text-sm ">
            Energie Dokter combineert brede technische kennis met een helder
            overzicht. We kennen de details, maar focussen op het totaalplaatje
            — van losse vragen tot complete verduurzamingsplannen.
          </span>
          <span className="text-[#4D4D4D] md:text-base text-sm ">
            We volgen wet- en regelgeving op de voet en vertalen theorie direct
            naar praktische, haalbare oplossingen. Als sparringpartner werken we
            samen met uw bestaande partijen aan keuzes die écht werken.
          </span>
          <span className="text-[#4D4D4D] md:text-base text-sm ">
            Kortom: wij verbinden techniek, beleid en praktijk tot één duidelijk
            en uitvoerbaar plan.
          </span>
        </div>
      </div>
    </div>
  );
}
