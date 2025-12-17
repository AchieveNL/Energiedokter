"use client";
import SectionTitle from "./SectionTitle";
import { services } from "../data/services";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import React, { useCallback, useEffect } from "react";

export default function Diensten() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
      containScroll: "trimSnaps",
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const Card = ({
    title,
    icon,
    text,
    href,
  }: {
    title: string;
    icon: string;
    text: string;
    href: string;
  }) => {
    const navigate = useRouter();
    const handleClick = () => {
      navigate.push("/diensten/" + href);
    };

    const handleReadMore = (e: React.MouseEvent) => {
      e.stopPropagation();
      navigate.push("/diensten/" + href);
    };

    return (
      <button
        onClick={handleClick}
        className="bg-[#F6F6F6] flex flex-col md:gap-5 gap-2 items-center justify-between rounded-tl-[3rem] rounded-br-[3rem] md:px-8 px-4 py-4 hover:bg-[#F0F8E2] hover:-translate-y-1 transition-all duration-300 hover:cursor-pointer w-full h-full"
      >
        <div className="flex justify-between w-full gap-3 ">
          <img
            src={`/assets/icons/service${icon}.svg`}
            className="size-10"
            alt=""
          />
          <h1 className="font-semibold md:max-w-2/3 text-right md:text-[17px]">
            {title}
          </h1>
        </div>
        <p className="text-sm text-[#4D4D4D] text-left ">{text}</p>
        <span
          onClick={handleReadMore}
          className="self-start text-[#4B7939] text-sm hover:underline cursor-pointer"
        >
          Lees meer
        </span>
      </button>
    );
  };

  return (
    <div
      style={{ fontFamily: "Poppins" }}
      className="flex flex-col items-center md:my-20 my-10"
    >
      <SectionTitle
        title="Diensten"
        span={
          <div className="text-[#254055] md:text-4xl text-2xl font-extrabold text-center ">
            Onze <span className="text-[#81C713] ">kerndiensten</span> voor
            <br /> duurzaam wonen
          </div>
        }
      />
      <p className="text-[#4D4D4D] text-center mt-5 md:w-2/3 mx-5 ">
        Wij bieden complete energieke oplossingen die volledig zijn afgestemd op
        uw situatie — of u nu huiseigenaar, verhuurder of ondernemer bent. Van
        analyse tot uitvoering begeleiden wij u naar een comfortabel,
        energiezuinig en toekomstbestendig gebouw
      </p>
      <div className="md:grid hidden md:grid-cols-3 grid-cols-1 gap-y-10 md:gap-x-15 md:px-24 px-5 mt-10">
        {services.map((service, index) => (
          <Card
            href={service.href}
            key={index}
            title={service.title}
            icon={service.icon}
            text={service.text}
          />
        ))}
      </div>

      {/* mobile carousel - FIX APPLIED */}
      <div className="md:hidden w-full mt-10 ">
        <div className="relative">
          {/* Embla viewport with proper overflow handling */}
          <div className="overflow-hidden" ref={emblaRef}>
            {/* Embla container with flex and proper spacing */}
            <div className="flex -mx-2">
              {services.map((service, index) => (
                <div key={index} className="flex-[0_0_85%] min-w-0 px-2">
                  <Card
                    href={service.href}
                    title={service.title}
                    icon={service.icon}
                    text={service.text}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Carousel dots */}
          <div className="flex justify-center gap-1 mt-6">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`
                  h-2 rounded-xs transition-all duration-300
                  ${
                    index === selectedIndex
                      ? "w-5 bg-[#8DD1BA]"
                      : "w-3 bg-[#D0D0D0] hover:bg-gray-400"
                  }
                `}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
