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
    if (pathname.startsWith("/blogs/")) return "Blogs";
    return "";
  };

  const active = getActiveLink();
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);
  return (
    <nav className="fixed w-full backdrop-blur-lg z-50">
      <div className="flex p-4 px-4 md:px-10 justify-between lg:justify-around items-start">
        <Link href="/">
          <img
            src="/assets/logo.svg"
            className="w-[200px] md:w-[300px] mt-1"
            alt=""
          />
        </Link>

        {/* Hamburger Menu Button */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2 mt-1 relative z-60"
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
        <div className="hidden lg:flex bg-[#FFFFFF78] items-center gap-3 rounded-2xl px-3 py-1">
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

      {/* Backdrop Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-[#65616180] backdrop-blur-sm transition-opacity duration-300 h-screen ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden flex overflow-hidden transition-all duration-300 ease-in-out min-h-screen w-2/3 fixed right-0 top-0 z-55 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="bg-[#ffffff] flex flex-col w-full px-2 relative pt-15 gap-1">
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

          {/* footer social  */}
          <div className="flex flex-col items-center gap-5 absolute bottom-5 right-1/2 translate-x-1/2 w-full">
            <Link
              href="/"
              className="md:text-3xl text-xl flex flex-col items-center font-bold text-[#6C6C6A]"
            >
              <img src="/assets/logo.svg" />
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
        </div>
      </div>
    </nav>
  );
}
