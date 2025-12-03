"use client";
import Link from "next/link";
import NavLink from "./NavLink";
import { usePathname } from "next/navigation";
import NavLinkDropdown from "./NavLinkDropDown";
import { useEffect, useState } from "react";

export default function Nav() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Map pathnames to nav link text
  const getActiveLink = () => {
    if (pathname === "/") return "Home";
    if (pathname === "/about-us") return "Over ons";
    if (pathname === "/partners") return "Partners";
    if (pathname === "/projects") return "Projecten";
    if (pathname === "/blogs") return "Blogs";
    if (pathname === "/faq") return "FAQ";
    if (pathname === "/contact") return "Contact";
    for (let i = 1; i <= 8; i++) {
      if (pathname === `/diensten/${i}`) return "Diensten";
    }
    if (pathname === "/diensten/Alle-diensten") return "Diensten";
    return "";
  };

  const active = getActiveLink();
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);
  return (
    <nav className="fixed w-full backdrop-blur-lg z-50">
      <div className="flex p-4 px-4 md:px-10 justify-between md:justify-around items-start">
        <Link href="/">
          <img
            src="/assets/logo.svg"
            className="w-[200px] md:w-[300px] mt-1"
            alt=""
          />
        </Link>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 mt-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-gray-800 transition-transform ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-gray-800 transition-opacity ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-gray-800 transition-transform ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex bg-[#FFFFFF78] items-center gap-3 rounded-2xl px-3 py-1">
          <NavLink href="/" text="Home" active={active} />
          <NavLink href="/about-us" text="Over ons" active={active} />
          <NavLinkDropdown
            text="Diensten"
            active={active}
            items={[
              {
                href: "/diensten/Alle-diensten",
                text: "Alle diensten",
              },
              {
                href: "/diensten/1",
                text: "Energielabels bestaande woningen en utiliteit",
              },
              {
                href: "/diensten/2",
                text: "Energielabels nieuwbouw woningen en utiliteit",
              },
              { href: "/diensten/3", text: "Informatieplicht" },
              { href: "/diensten/4", text: "GACS" },
              { href: "/diensten/5", text: "WKO beheer" },
              { href: "/diensten/6", text: "Trainingen" },
            ]}
          />
          <NavLink href="/partners" text="Partners" active={active} />
          <NavLink href="/projects" text="Projecten" active={active} />
          <NavLink href="/blogs" text="Blogs" active={active} />
          <NavLink href="/faq" text="FAQ" active={active} />
          <NavLink href="/contact" text="Contact" active={active} />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#FFFFFF78] flex flex-col gap-2 px-4 py-3 mx-4 mb-4 rounded-2xl">
          <NavLink href="/" text="Home" active={active} />
          <NavLink href="/about-us" text="Over ons" active={active} />
          <NavLinkDropdown
            text="Diensten"
            active={active}
            items={[
              {
                href: "/diensten/Alle-diensten",
                text: "Alle diensten",
              },
              {
                href: "/diensten/1",
                text: "Energielabels bestaande woningen en utiliteit",
              },
              {
                href: "/diensten/2",
                text: "Energielabels nieuwbouw woningen en utiliteit",
              },
              { href: "/diensten/3", text: "Informatieplicht" },
              { href: "/diensten/4", text: "GACS" },
              { href: "/diensten/5", text: "WKO beheer" },
              { href: "/diensten/6", text: "Trainingen" },
            ]}
          />
          <NavLink href="/partners" text="Partners" active={active} />
          <NavLink href="/projects" text="Projecten" active={active} />
          <NavLink href="/blogs" text="Blogs" active={active} />
          <NavLink href="/faq" text="FAQ" active={active} />
          <NavLink href="/contact" text="Contact" active={active} />
        </div>
      </div>
    </nav>
  );
}
