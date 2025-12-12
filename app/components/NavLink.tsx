import Link from "next/link";

export default function NavLink({
  href,
  text,
  active,
}: {
  href: string;
  text?: string;
  active?: string;
}) {
  return (
    <>
    <div
        className={`bg-[#4D4D4D80] h-[0.1] ml-1 ${text!=="Partners"?'hidden':'block md:hidden'}`}
      ></div>
      <Link
        style={{ fontFamily: "Poppins" }}
        className={`${
          active !== text ? "hover:bg-[#82c71324]" : ""
        } md:p-2 p-1 md:px-3 rounded-2xl transition-all duration-200 md:text-black text-[#4D4D4D] md:text-lg
      ${active === text ? "md:bg-[#81C713] md:text-white text-[#81C713]" : ""}`}
        href={href}
      >
        {text}
      </Link>
      <div
        className={`bg-[#4D4D4D80] h-[0.1] ml-1 ${text==="Contact"?'hidden':'block md:hidden'}`}
      ></div>
    </>
  );
}
