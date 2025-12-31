// import { useState, useRef, useEffect } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// export default function NavLinkDropdown({
//   text,
//   active,
//   items,
//   onclick,
// }: {
//   text: string;
//   active?: string;
//   items: { href: string; text: string; onclick?: () => void }[];
//   onclick?: () => void;
// }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);
//   const pathname = usePathname();

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     function handleClickOutside(event: MouseEvent) {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node)
//       ) {
//         setIsOpen(false);
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   useEffect(() => {
//     const isTouchScreen =
//       "ontouchstart" in window || navigator.maxTouchPoints > 0;
//     // navigator.msMaxTouchPoints > 0;

//     if (!isTouchScreen) {
//       // Desktop hover
//       function handleHover(event: MouseEvent) {
//         if (
//           dropdownRef.current &&
//           dropdownRef.current.contains(event.target as Node)
//         ) {
//           setIsOpen(true);
//         } else {
//           setIsOpen(false);
//         }
//       }

//       document.addEventListener("mouseover", handleHover);
//       return () => document.removeEventListener("mouseover", handleHover);
//     }
//   }, []);

//   return (
//     <div ref={dropdownRef} className="relative">
//       <button
//         onClick={() => {
//           onclick && onclick();
//           setIsOpen(!isOpen);
//         }}
//         style={{ fontFamily: "Poppins" }}
//         className={`flex items-center gap-1 w-full ${
//           active !== text ? "hover:bg-[#82c71324]" : ""
//         } md:p-2 md:px-4 p-1 rounded-2xl transition-all duration-200 md:text-lg
//       ${active === text ? "md:bg-[#81C713] md:text-white text-[#81C713]" : "md:text-black text-[#4D4D4D]"}`}
//       >
//         {text}
//         <svg
//           className={`w-4 h-4 transition-transform duration-200 ${
//             isOpen ? "rotate-180" : ""
//           }`}
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M19 9l-7 7-7-7"
//           />
//         </svg>
//       </button>

//       {isOpen && (
//         <div className="md:absolute top-full left-0 min-w-[200px] bg-white rounded-2xl md:shadow-lg md:border border-gray-100 md:p-4 p-0 z-50 md:w-max wrap-break-word overflow-auto md:block flex flex-col gap-1">
//           {items.map((item, index) => (
//             <div key={index}>
//               <Link
//                 href={item.href}
//                 onClick={() => {
//                   setIsOpen(false);
//                 }}
//                 style={{ fontFamily: "Poppins" }}
//                 className={`font-medium text-[14px] md:text-[16px] text-[#4D4D4D] md:py-2 py-0.5 mx-3 pl-1 block transition-all duration-200 hover:text-[#81C713]
//               ${
//                 Number(index + 0).toString() === pathname.split("/")[2] ||
//                 (item.text === "Alle diensten" &&
//                   pathname === "/diensten/Alle-diensten")
//                   ? "text-[#81C713]"
//                   : ""
//               }
//               `}
//               >
//                 {item.text}
//               </Link>
//               {item.text !== "Trainingen" && (
//                 <div className="bg-[#4d4d4d5b] py-[0.1px] mx-3.5 md:block hidden "></div>
//               )}
//             </div>
//           ))}

//         </div>

//       )}
//     </div>
//   );
// }

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinkDropdown({
  text,
  active,
  items,
  onclick,
}: {
  text: string;
  active?: string;
  items: { href: string; text: string; onclick?: () => void }[];
  onclick?: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isHoveringRef = useRef(false);
  const pathname = usePathname();

  // Detect if device is mobile/touch
  useEffect(() => {
    const checkMobile = () => {
      const isTouchDevice =
        "ontouchstart" in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth < 768; // md breakpoint
      setIsMobile(isTouchDevice || isSmallScreen);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Close dropdown when clicking outside (mobile only)
  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isMobile) {
      document.addEventListener("touchstart", handleClickOutside);
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("touchstart", handleClickOutside);
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isMobile]);

  // Desktop hover behavior
  useEffect(() => {
    const element = dropdownRef.current;

    if (!isMobile && element) {
      const handleMouseEnter = () => {
        isHoveringRef.current = true;
        setIsOpen(true);
      };

      const handleMouseLeave = () => {
        isHoveringRef.current = false;
        setIsOpen(false);
      };

      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      };
    } else if (isMobile) {
      // Reset hover state and close dropdown when switching to mobile
      isHoveringRef.current = false;
      setIsOpen(false);
    }
  }, [isMobile]);

  const handleClick = (e: React.MouseEvent) => {
    // Only handle clicks on mobile
    if (isMobile) {
      e.preventDefault();
      e.stopPropagation();
      onclick && onclick();
      setIsOpen(!isOpen);
    }
  };

  const handleItemClick = (item: (typeof items)[0], e: React.MouseEvent) => {
    // Only prevent default if there's a custom onclick handler
    if (item.onclick) {
      e.preventDefault();
      item.onclick();
    }
    setIsOpen(false);
    isHoveringRef.current = false;
  };

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={handleClick}
        style={{ fontFamily: "Poppins" }}
        className={`flex items-center gap-1 w-full ${
          active !== text ? "hover:bg-[#82c71324]" : ""
        } md:p-2 md:px-4 p-1 rounded-2xl transition-all duration-200 md:text-lg
      ${
        active === text
          ? "md:bg-[#81C713] md:text-white text-[#81C713]"
          : "md:text-black text-[#4D4D4D]"
      }`}
      >
        {text}
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="md:absolute top-full left-0 min-w-[200px] bg-white rounded-2xl md:shadow-lg md:border border-gray-100 md:p-4 p-0 z-50 md:w-max wrap-break-word overflow-auto md:block flex flex-col gap-1">
          {items.map((item, index) => (
            <div key={index}>
              <Link
                href={item.href}
                onClick={(e) => handleItemClick(item, e)}
                style={{ fontFamily: "Poppins" }}
                className={`font-medium text-[14px] md:text-[16px] text-[#4D4D4D] md:py-2 py-0.5 mx-3 pl-1 block transition-all duration-200 hover:text-[#81C713]
              ${
                Number(index + 0).toString() === pathname.split("/")[2] ||
                (item.text === "Alle diensten" &&
                  pathname === "/diensten/Alle-diensten")
                  ? "text-[#81C713]"
                  : ""
              }
              `}
              >
                {item.text}
              </Link>
              {item.text !== "Trainingen" && (
                <div className="bg-[#4d4d4d5b] py-[0.1px] mx-3.5 md:block hidden"></div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
