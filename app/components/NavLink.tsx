import Link from "next/link";
import { act } from "react";

export default function NavLink({
  href,
  text,
  active,
  onclick,
}: {
  href: string;
  text?: string;
  active?: string;
  onclick?: () => void;
}) {
  return (
    <Link
      onClick={onclick}
      style={{ fontFamily: "Poppins" }}
      className={`${
        active !== text ? "hover:bg-[#82c71324]" : ""
      } p-2 px-4 rounded-2xl transition-all duration-200 text-lg
      ${active === text ? "bg-[#81C713] text-white" : "bg-transparent"}`}
      href={href}
    >
      {text}
    </Link>
  );
}
