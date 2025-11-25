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
    if (pathname === "/pages/about-us") return "Over ons";
    if (pathname === "/pages/partners") return "Partners";
    if (pathname === "/pages/projects") return "Projecten";
    if (pathname === "/pages/blogs") return "Blogs";
    if (pathname === "/pages/faq") return "FAQ";
    if (pathname === "/pages/contact") return "Contact";
    for (let i = 1; i <= 8; i++) {
      if (pathname === `/pages/diensten/${i}`) return "Diensten";
    }
    if (pathname === "/pages/diensten/diensten") return "Diensten";
    return "";
  };

  const active = getActiveLink();
  useEffect(()=>{setIsMenuOpen(false)},[pathname])
  return (
    <nav className="fixed w-full backdrop-blur-lg z-50">
      <div className="flex p-4 px-4 md:px-10 justify-between md:justify-around items-start">
        <img src="/assets/logo.svg" className="w-[200px] md:w-[300px] mt-1" alt="" />
        
        {/* Hamburger Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 mt-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-gray-800 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-gray-800 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-gray-800 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex bg-[#FFFFFF78] items-center gap-3 rounded-2xl px-3 py-1">
          <NavLink href="/" text="Home" active={active} />
          <NavLink href="/pages/about-us" text="Over ons" active={active} />
          <NavLinkDropdown
            text="Diensten"
            active={active}
            items={[
              {
                href: "/pages/diensten/1",
                text: "Energielabels woningbouw bestaand",
              },
              {
                href: "/pages/diensten/2",
                text: "Energielabels woningbouw nieuwbouw (BENG)",
              },
              {
                href: "/pages/diensten/3",
                text: "Energielabels utiliteit bestaand",
              },
              {
                href: "/pages/diensten/4",
                text: "Energielabels nieuwbouw (BENG)",
              },
              { href: "/pages/diensten/5", text: "Maatwerkadvies" },
              { href: "/pages/diensten/6", text: "Informatieplicht" },
              { href: "/pages/diensten/7", text: "WKO beheer" },
              { href: "/pages/diensten/8", text: "Trainingen" },
            ]}
          />
          <NavLink href="/pages/partners" text="Partners" active={active} />
          <NavLink href="/pages/projects" text="Projecten" active={active} />
          <NavLink href="/pages/blogs" text="Blogs" active={active} />
          <NavLink href="/pages/faq" text="FAQ" active={active} />
          <NavLink href="/pages/contact" text="Contact" active={active} />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#FFFFFF78] flex flex-col gap-2 px-4 py-3 mx-4 mb-4 rounded-2xl">
          <NavLink href="/" text="Home" active={active} />
          <NavLink href="/pages/about-us" text="Over Ons" active={active} />
          <NavLinkDropdown
            text="Diensten"
            active={active}
            items={[
              {
                href: "/pages/diensten/1",
                text: "Energielabels woningbouw bestaand",
              },
              {
                href: "/pages/diensten/2",
                text: "Energielabels woningbouw nieuwbouw (BENG)",
              },
              {
                href: "/pages/diensten/3",
                text: "Energielabels utiliteit bestaand",
              },
              {
                href: "/pages/diensten/4",
                text: "Energielabels nieuwbouw (BENG)",
              },
              { href: "/pages/diensten/5", text: "Maatwerkadvies" },
              { href: "/pages/diensten/6", text: "Informatieplicht" },
              { href: "/pages/diensten/7", text: "WKO beheer" },
              { href: "/pages/diensten/8", text: "Trainingen" },
            ]}
          />
          <NavLink href="/pages/partners" text="Partners" active={active} />
          <NavLink href="/pages/projects" text="Projecten" active={active} />
          <NavLink href="/pages/blogs" text="Blogs" active={active} />
          <NavLink href="/pages/faq" text="FAQ" active={active} />
          <NavLink href="/pages/contact" text="Contact" active={active} />
        </div>
      </div>
    </nav>
  );
}