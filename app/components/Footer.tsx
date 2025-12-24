"use client";

import Link from "next/link";
import { useRef, useEffect, useState } from "react";

export default function Footer() {
  const bgImageRef = useRef<HTMLImageElement>(null);
  const mobileBgImageRef = useRef<HTMLImageElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const [bgHeight, setBgHeight] = useState(0);
  const [divHeight, setDivHeight] = useState(0);
  const [mobileBgHeight, setMobileBgHeight] = useState(0);

  useEffect(() => {
    const logImageHeight = () => {
      if (bgImageRef.current) {
        setBgHeight(bgImageRef.current.offsetHeight);
      }
      if (divRef.current) {
        setDivHeight(divRef.current.offsetHeight);
      }
      if (mobileBgImageRef.current) {
        setMobileBgHeight(mobileBgImageRef.current.offsetHeight);
      }
    };

    // Log height when image loads
    const img = bgImageRef.current;
    if (img) {
      if (img.complete) {
        logImageHeight();
      } else {
        img.addEventListener("load", logImageHeight);
      }
    }

    const divSection = divRef.current;
    if (divSection) {
      divSection.addEventListener("load", logImageHeight);
    }

    const mobileBg = mobileBgImageRef.current;
    if (mobileBg) {
      mobileBg.addEventListener("load", logImageHeight);
    }

    // Log height on window resize
    window.addEventListener("resize", logImageHeight);

    return () => {
      window.removeEventListener("resize", logImageHeight);
      if (img) {
        img.removeEventListener("load", logImageHeight);
      }
      if (divSection) {
        divSection.removeEventListener("load", logImageHeight);
      }
      if (mobileBg) {
        mobileBg.removeEventListener("load", logImageHeight);
      }
    };
  }, []);

  return (
    <>
      <img
        src="/assets/footer/bg-head.svg"
        className="w-full md:mb-0 -mb-px"
        alt=""
      />
      <div className="bg-[#254055] p-px -mb-px "></div>
      <div
        className="mt-0 bg-[#254055] md:pt-20 relative -z-20 "
        style={{ fontFamily: "Poppins" }}
      >
        {/* desktop light */}
        <img
          src="/assets/footer/spotlight.svg"
          className="md:block absolute hidden w-2/3 top-0 right-1/2 translate-x-1/2"
          alt=""
        />
        <img
          src="/assets/footer/light.svg"
          className="md:block absolute hidden w-2/3 top-0 right-1/2 translate-x-1/2 flicker-light"
          alt=""
        />
        {/* mobile light */}
        <img
          src="/assets/footer/mobile-spotlight.svg"
          className="md:hidden block absolute top-0 right-1/2 translate-x-1/2"
          alt=""
        />
        <img
          src="/assets/footer/mobile-light.svg"
          className="md:hidden block absolute top-0 right-1/2 translate-x-1/2 flicker-light"
          alt=""
        />
        {/* body */}
        <div
          ref={divRef}
          className="flex md:flex-row flex-col text-[#FEEEF3] justify-center md:items-start items-center md:gap-10 gap-5 z-10 absolute right-1/2 md:translate-x-[57%] translate-x-1/2 min-[768px]:mt-20 mt-15 min-[1536px]:mt-28 min-[1900px]:mt-44 min-[2300px]:mt-60 min-[2600px]:mt-70 md:w-2/3 scale-[1] min-[1500px]:scale-[1.1] min-[1900px]:scale-[1.3] min-[2300px]:scale-[1.5]"
        >
          <div className="flex flex-col items-center md:gap-5 gap-2">
            <Link
              href="/"
              className="md:text-3xl text-xl flex flex-col items-center font-bold text-white"
            >
              Energie Dokter
              <span className="md:text-xs text-[8px] font-normal ">
                sustainable energy consultancy
              </span>
            </Link>
            <div className="flex md:gap-5 gap-3 justify-center">
              <Link href="#">
                <img
                  src="/assets/footer/linkedin.svg"
                  className="md:size-13 size-10"
                />
              </Link>
              <Link href="#">
                <img
                  src="/assets/footer/phone.svg"
                  className="md:size-13 size-10"
                />
              </Link>
              <Link href="#">
                <img
                  src="/assets/footer/mail.svg"
                  className="md:size-13 size-10"
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-col md:items-start items-center md:gap-2 gap-1 md:text-sm text-xs ">
            <Link href="/" className="md:text-2xl text-lg">
              Home
            </Link>
            <Link href="/about-us">Over Ons</Link>
            <Link href="/blogs">Blog</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="flex flex-col md:items-start items-center gap-2 md:text-sm text-xs md:text-left text-center ">
            <Link
              href="/diensten/Alle-diensten"
              className="md:text-2xl text-lg"
            >
              Diensten
            </Link>
            <Link href="/diensten/1">
              Energielabels bestaande woningen en utiliteit
            </Link>
            <Link href="/diensten/2">
              Energielabels nieuwbouw woningen en utiliteit
            </Link>
            <Link href="/diensten/3">Informatieplicht</Link>
            <Link href="/diensten/4">GCAS</Link>
            <Link href="/diensten/5">WKO-Beheer</Link>
            <Link href="/diensten/6">Trainingen</Link>
          </div>
        </div>

        {/* bg */}
        <img
          ref={bgImageRef}
          src="/assets/footer/bg.svg"
          className={`w-full absolute md:block hidden top-0 bg-[#254055] -z-10 `}
          alt=""
        />
        <img
          ref={mobileBgImageRef}
          src="/assets/footer/mobile-bg.svg"
          className={`w-full md:hidden absolute bg-[#254055] -z-10`}
          // style={{ top: divHeight }}
          alt=""
        />

        {/* last footer */}
        <div
          className="bg-[#27313C] absolute top-0 w-full text-[#F6F6F6] md:flex hidden items-center justify-between px-10 py-5 "
          style={{ marginTop: bgHeight - 1 }}
        >
          <div className="flex gap-5">
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline">
              Terms Of Service
            </Link>
          </div>
          <div>
            Developed by{" "}
            <Link href="http://achieve.nl" className="hover:underline">
              Achieve.nl
            </Link>
          </div>
        </div>

        {/* last footer mobile */}
        <div
          className="bg-[#27313C] absolute top-0 w-full text-[#F6F6F6] md:hidden flex items-center p-4 justify-between px-2 text-xs "
          style={{ marginTop: mobileBgHeight - 1 }}
        >
          <div className="flex gap-2">
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline">
              Terms Of Service
            </Link>
          </div>
          <div>
            Developed by{" "}
            <Link href="http://achieve.nl" className="hover:underline">
              Achieve.nl
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
