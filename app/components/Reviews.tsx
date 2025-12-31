"use client";
import SectionTitle from "./SectionTitle";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import React, { useCallback, useEffect } from "react";
import { reviews } from "../data/reviews";
import { Star } from "lucide-react";

export default function Reviews({ bg = "white" }: { bg?: string }) {
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
    rate,
    text,
    name,
    role,
  }: {
    rate: string;
    name: string;
    text: string;
    role: string;
  }) => {
    return (
      <button
        style={{ backgroundColor: bg }}
        className="flex flex-col md:gap-3 gap-2 items-center justify-between rounded-tl-[3rem] rounded-br-[3rem] md:px-8 px-6 pt-6 pb-4 hover:bg-[#F0F8E2] hover:-translate-y-1 transition-all duration-300 hover:cursor-pointer w-full h-full"
      >
        <div className="flex flex-col gap-2">
          <div className="flex justify-between w-full gap-3 items-center">
          <div className="flex">
            <Star className="size-4" fill="#FFA800" stroke="0" />
            <Star className="size-4" fill="#FFA800" stroke="0" />
            <Star className="size-4" fill="#FFA800" stroke="0" />
            <Star className="size-4" fill="#FFA800" stroke="0" />
            <Star className="size-4" fill="#FFA800" stroke="0" />
          </div>
          <h1 className="font-semibold md:max-w-2/3 text-right md:text-[17px]">
            {rate} rating
          </h1>
        </div>

        <p className="md:text-lg text-sm text-[#4D4D4D] text-left self-start">
          {text}
        </p>
        </div>

        <div className="mt-4 self-start text-left text-[#4D4D4D] ">
          <h1 className="font-bold">{name}</h1>
          <span className="text-sm">{role}</span>
        </div>
      </button>
    );
  };

  return (
    <div
      style={{ fontFamily: "Poppins" }}
      className="flex flex-col items-center overflow-hidden"
    >
      <SectionTitle
        title="Reviews"
        span={
          <div className="text-[#254055] md:text-4xl text-2xl font-extrabold text-center mx-5 ">
            Onze <span className="text-[#81C713] ">klanten</span> aan het woord
          </div>
        }
      />

      <div className="md:mt-15 mt-10 px-5 ">
        <div className="relative">
          {/* Embla viewport with proper overflow handling */}
          <div className="overflow-hidden" ref={emblaRef}>
            {/* Embla container with flex and proper spacing */}
            <div className="flex -mx-2 justify-cente">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="md:flex-[0_0_33%] flex-[0_0_30%] min-w-0 px-2"
                >
                  <Card
                    rate={review.rate}
                    text={review.text}
                    name={review.name}
                    role={review.role}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Carousel dots */}
          <div className="flex justify-center gap-1 mt-6">
            {reviews.map((_, index) => (
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
