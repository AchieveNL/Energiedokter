// "use client";

// import Lottie, { LottieRefCurrentProps } from "lottie-react";
// import Link from "next/link";
// import { useRef, useEffect, useState } from "react";
// import animationData from "@/public/assets/animations/footer.json";

// export default function Footer() {
//   const bgImageRef = useRef<HTMLImageElement>(null);
//   const mobileBgImageRef = useRef<HTMLImageElement>(null);
//   const divRef = useRef<HTMLDivElement>(null);
//   const [bgHeight, setBgHeight] = useState(0);
//   const [divHeight, setDivHeight] = useState(0);
//   const [mobileBgHeight, setMobileBgHeight] = useState(0);

//   const lottieDesktopRef = useRef<LottieRefCurrentProps>(null);
//   useEffect(() => {
//     // Set speed to 1 for both animations
//     if (lottieDesktopRef.current) {
//       lottieDesktopRef.current.setSpeed(1);
//     }
//   }, []);

//   useEffect(() => {
//     const logImageHeight = () => {
//       if (bgImageRef.current) {
//         setBgHeight(bgImageRef.current.offsetHeight);
//       }
//       if (divRef.current) {
//         setDivHeight(divRef.current.offsetHeight);
//       }
//       if (mobileBgImageRef.current) {
//         setMobileBgHeight(mobileBgImageRef.current.offsetHeight);
//       }
//     };

//     // Log height when image loads
//     const img = bgImageRef.current;
//     if (img) {
//       if (img.complete) {
//         logImageHeight();
//       } else {
//         img.addEventListener("load", logImageHeight);
//       }
//     }

//     const divSection = divRef.current;
//     if (divSection) {
//       divSection.addEventListener("load", logImageHeight);
//     }

//     const mobileBg = mobileBgImageRef.current;
//     if (mobileBg) {
//       mobileBg.addEventListener("load", logImageHeight);
//     }

//     // Log height on window resize
//     window.addEventListener("resize", logImageHeight);

//     return () => {
//       window.removeEventListener("resize", logImageHeight);
//       if (img) {
//         img.removeEventListener("load", logImageHeight);
//       }
//       if (divSection) {
//         divSection.removeEventListener("load", logImageHeight);
//       }
//       if (mobileBg) {
//         mobileBg.removeEventListener("load", logImageHeight);
//       }
//     };
//   }, []);

//   return (
//     <>
//       <div className="relative">
//         <div className="absolute w-full">
//           <Lottie
//             lottieRef={lottieDesktopRef}
//             animationData={animationData}
//             loop
//             autoplay
//             style={{ width: "100%", height: "auto" }}
//           />
//         </div>

//         <div
//           ref={divRef}
//           className="flex lg:flex-row flex-col text-[#FEEEF3] justify-center lg:items-start items-center md:gap-10 lg:gap-4 xl:gap-12 2xl:gap-15 gap-5 z-10 absolute right-1/2 lg:translate-x-[57%] translate-x-1/2 min-[768px]:mt-64 min-[1024px]:mt-50 min-[1025px]:mt-60 mt-15 min-[1536px]:mt-70 min-[1900px]:mt-90 min-[2300px]:mt-100 min-[2600px]:mt-120 md:w-2/3 scale-[1] min-[768px]:scale-[1.5] min-[1024px]:scale-[1.1] min-[1536px]:scale-[1.3] min-[2300px]:scale-[1.5]"
//         >
//           <div className="flex flex-col items-center md:gap-5 gap-2">
//             <Link
//               href="/"
//               className="md:text-3xl text-xl flex flex-col items-center font-bold text-white"
//             >
//               Energie Dokter
//               <span className="md:text-xs text-[8px] font-normal ">
//                 sustainable energy consultancy
//               </span>
//             </Link>
//             <div className="flex md:gap-5 gap-3 justify-center">
//               <Link href="#">
//                 <img
//                   src="/assets/footer/linkedin.svg"
//                   className="md:size-13 size-10"
//                 />
//               </Link>
//               <Link href="#">
//                 <img
//                   src="/assets/footer/phone.svg"
//                   className="md:size-13 size-10"
//                 />
//               </Link>
//               <Link href="#">
//                 <img
//                   src="/assets/footer/mail.svg"
//                   className="md:size-13 size-10"
//                 />
//               </Link>
//             </div>
//           </div>
//           <div className="flex flex-col md:items-start items-center md:gap-2 gap-1 md:text-sm text-xs ">
//             <Link href="/" className="md:text-2xl text-lg">
//               Home
//             </Link>
//             <Link href="/about-us">Over Ons</Link>
//             <Link href="/blogs">Blog</Link>
//             <Link href="/faq">FAQ</Link>
//             <Link href="/contact">Contact</Link>
//           </div>
//           <div className="flex flex-col lg:items-start items-center gap-2 md:text-sm text-xs md:text-left text-center ">
//             <Link
//               href="/diensten/Alle-diensten"
//               className="md:text-2xl text-lg"
//             >
//               Diensten
//             </Link>
//             <Link href="/diensten/1">
//               Energielabels bestaande woningen en utiliteit
//             </Link>
//             <Link href="/diensten/2">
//               Energielabels nieuwbouw woningen en utiliteit
//             </Link>
//             <Link href="/diensten/3">Informatieplicht</Link>
//             <Link href="/diensten/4">GCAS</Link>
//             <Link href="/diensten/5">WKO-Beheer</Link>
//             <Link href="/diensten/6">Trainingen</Link>
//           </div>
//         </div>

//         {/* last footer */}
//         <div
//           className="bg-[#27313C] absolute top-0 w-full text-[#F6F6F6] lg:flex hidden items-center justify-between px-10 py-5 "
//           style={{ marginTop: bgHeight -1 }}
//         >
//           <div className="flex gap-5">
//             <Link href="#" className="hover:underline">
//               Privacy Policy
//             </Link>
//             <Link href="#" className="hover:underline">
//               Terms Of Service
//             </Link>
//           </div>
//           <div>
//             Developed by{" "}
//             <Link href="http://achieve.nl" className="hover:underline">
//               Achieve.nl
//             </Link>
//           </div>
//         </div>

//         {/* last footer mobile */}
//         {/* <div
//           className="bg-[#27313C] absolute top-0 w-full text-[#F6F6F6] lg:hidden flex items-center p-4 justify-between px-2 text-xs "
//           style={{ marginTop: mobileBgHeight - 1 }}
//         >
//           <div className="flex gap-2">
//             <Link href="#" className="hover:underline">
//               Privacy Policy
//             </Link>
//             <Link href="#" className="hover:underline">
//               Terms Of Service
//             </Link>
//           </div>
//           <div>
//             Developed by{" "}
//             <Link href="http://achieve.nl" className="hover:underline">
//               Achieve.nl
//             </Link>
//           </div>
//         </div> */}
//       </div>
//     </>
//   );
// }

"use client";

import Lottie, { LottieRefCurrentProps } from "lottie-react";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import animationData from "@/public/assets/animations/footer.json";

export default function Footer() {
  const lottieContainerRef = useRef<HTMLDivElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const [lottieHeight, setLottieHeight] = useState(0);

  const lottieDesktopRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    // Set speed to 1 for animation
    if (lottieDesktopRef.current) {
      lottieDesktopRef.current.setSpeed(1);
    }
  }, []);

  useEffect(() => {
    const updateHeight = () => {
      if (lottieContainerRef.current) {
        setLottieHeight(lottieContainerRef.current.offsetHeight);
      }
    };

    // Update height initially
    updateHeight();

    // Update height on window resize
    window.addEventListener("resize", updateHeight);

    // Use ResizeObserver to detect when Lottie animation loads/resizes
    const resizeObserver = new ResizeObserver(() => {
      updateHeight();
    });

    if (lottieContainerRef.current) {
      resizeObserver.observe(lottieContainerRef.current);
    }

    return () => {
      window.removeEventListener("resize", updateHeight);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <>
      <div className="relative">
        <div ref={lottieContainerRef} className="absolute w-full">
          <Lottie
            lottieRef={lottieDesktopRef}
            animationData={animationData}
            loop
            autoplay
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        <div
          ref={divRef}
          className="flex lg:flex-row flex-col text-[#FEEEF3] justify-center lg:items-start items-center md:gap-10 lg:gap-4 xl:gap-12 2xl:gap-15 gap-5 z-10 absolute right-1/2 lg:translate-x-[57%] translate-x-1/2 min-[768px]:mt-64 min-[1024px]:mt-50 min-[1025px]:mt-60 mt-15 min-[1536px]:mt-70 min-[1900px]:mt-90 min-[2300px]:mt-100 min-[2600px]:mt-120 md:w-2/3 scale-[1] min-[768px]:scale-[1.5] min-[1024px]:scale-[1.1] min-[1536px]:scale-[1.3] min-[2300px]:scale-[1.5]"
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
                  alt="LinkedIn"
                />
              </Link>
              <Link href="#">
                <img
                  src="/assets/footer/phone.svg"
                  className="md:size-13 size-10"
                  alt="Phone"
                />
              </Link>
              <Link href="#">
                <img
                  src="/assets/footer/mail.svg"
                  className="md:size-13 size-10"
                  alt="Mail"
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
          <div className="flex flex-col lg:items-start items-center gap-2 md:text-sm text-xs md:text-left text-center ">
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

        {/* Last footer - Desktop */}
        <div
          className="bg-[#27313C] absolute top-0 w-full text-[#F6F6F6] lg:flex hidden items-center justify-between px-10 py-5"
          style={{ marginTop: lottieHeight - 5 }}
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

        {/* Last footer - Mobile */}
        <div
          className="bg-[#27313C] absolute top-0 w-full text-[#F6F6F6] lg:hidden flex items-center p-4 justify-between px-2 text-xs"
          style={{ marginTop: lottieHeight - 1 }}
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
