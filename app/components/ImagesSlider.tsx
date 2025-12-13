// "use client";
// import React, { useCallback, useEffect } from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";
// import Link from "next/link";



// const ImagesSlider = ({ images }: { images: string[] }) => {
//   const [emblaRef, emblaApi] = useEmblaCarousel(
//     {
//       loop: true,
//       align: "center",
//       skipSnaps: false,
//       containScroll: "trimSnaps",
//     },
//     [Autoplay({ delay: 5000, stopOnInteraction: false })]
//   );

//   const [selectedIndex, setSelectedIndex] = React.useState(0);

//   const onSelect = useCallback(() => {
//     if (!emblaApi) return;
//     setSelectedIndex(emblaApi.selectedScrollSnap());
//   }, [emblaApi]);

//   useEffect(() => {
//     if (!emblaApi) return;
//     onSelect();
//     emblaApi.on("select", onSelect);
//     return () => {
//       emblaApi.off("select", onSelect);
//     };
//   }, [emblaApi, onSelect]);

//   return (
//     <div className="flex items-center justify-center p-4">
//       <div className="w-full max-w-7xl">
//         <div className="embla overflow-hidden" ref={emblaRef}>
//           <div className="embla__container flex">
//             {images.map((card, index) => {
//               const isActive = index === selectedIndex;

//               return (
//                 <div
//                   key={index}
//                   className="embla__slide shrink-0 px-2 md:px-4"
//                   style={{
//                     flex: "0 0 85%",
//                     minWidth: 0,
//                   }}
//                 >
//                   <div
//                     className={`
//                       relative rounded-tl-4xl rounded-br-4xl bg-red-300 overflow-hidden transition-all duration-500 ease-out border border-[#E3E3E3]
//                       ${isActive ? "scale-95" : "scale-90 opacity-90"}
//                     `}
//                   >
//                     <div className="relative overflow-hidden shrink-0">
//                       <img
//                         src={card}
//                         alt={"test"}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       <style>{`

//         .embla__slide {
//           flex: 0 0 40% !important;
//         }
//         @media (min-width: 768px) {
//           .embla__slide {
//             flex: 0 0 33.333% !important;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ImagesSlider;

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
    <div className="flex items-center justify-center p-4">
      <div className="w-full max-w-7xl">
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {images.map((card, index) => {
              const isActive = index === selectedIndex;

              return (
                <div
                  key={index}
                  className="embla__slide shrink-0 px-2 md:px-4"
                  style={{
                    flex: "0 0 85%",
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

      <style>{`
        .embla__slide {
          flex: 0 0 40% !important;
        }
        @media (min-width: 768px) {
          .embla__slide {
            flex: 0 0 33.333% !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ImagesSlider;