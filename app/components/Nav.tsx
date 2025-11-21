"use client";
import Link from "next/link";
import NavLink from "./NavLink";
import { useState } from "react";

export default function Nav() {
  const [active, setActive] = useState("");
  const toggleActive = (text: string) => {
    setActive(text);
  };
  return (
    <nav className="flex p-4 pt-6 px-10 justify-around bg-transparent fixed w-full">
      <img src="/assets/logo.svg" className="w-[300px] mt-1" alt="" />
      <div className="bg-[#FFFFFF78] flex items-center gap-3 rounded-2xl px-3 py-1 self-start">
        <NavLink
          href="#"
          text="Home"
          active={active}
          onclick={() => toggleActive("Home")}
        />
        <NavLink
          href="#"
          text="Over Ons"
          active={active}
          onclick={() => toggleActive("Over Ons")}
        />
        <NavLink
          href="#"
          text="Deinsten"
          active={active}
          onclick={() => toggleActive("Deinsten")}
        />
        <NavLink
          href="#"
          text="Partners"
          active={active}
          onclick={() => toggleActive("Partners")}
        />
        <NavLink
          href="#"
          text="Projecten"
          active={active}
          onclick={() => toggleActive("Projecten")}
        />
        <NavLink
          href="#"
          text="Blogs"
          active={active}
          onclick={() => toggleActive("Blogs")}
        />
        <NavLink
          href="#"
          text="FAQ"
          active={active}
          onclick={() => toggleActive("FAQ")}
        />
        <NavLink
          href="#"
          text="Contact"
          active={active}
          onclick={() => toggleActive("Contact")}
        />
      </div>
    </nav>
  );
}
