"use client";
import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const ImagesSlider = ({ images }: { images: string[] }) => {
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

  return (
    <div className="flex items-center justify-center pt-10">
      <div className="w-full">
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {images.map((card, index) => {
              const isActive = index === selectedIndex;

              return (
                <div
                  key={index}
                  className="embla__slide shrink-0"
                  style={{
                    flex: "0 0 8%",
                    minWidth: 0,
                  }}
                >
                  <img
                    src={card}
                    alt={"test"}
                    className={`
                      w-full aspect-square object-cover rounded-tl-4xl rounded-br-4xl border border-[#E3E3E3] transition-all duration-500 ease-out
                      ${isActive ? "scale-95" : "scale-90 opacity-90"}
                    `}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagesSlider;
