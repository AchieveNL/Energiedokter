import Link from "next/link";
import React from "react";

export default function ServicesCTA({
  title,
  text,
  img,
  reverse = false,
}: {
  title: React.ReactNode;
  text: React.ReactNode;
  img: string;
  reverse?: boolean;
}) {
  return (
    <div
      className="md:mt-20 mt-10 lg:px-20 px-5 flex md:gap-20 justify-center items-center"
      style={{
        fontFamily: "Poppins",
        flexDirection: reverse ? "row-reverse" : "row",
      }}
    >
      <div className="flex flex-col gap-5 md:w-1/2">
        {title}
        {text}
        <Link
          href="/contact"
          className="bg-[#81C713] text-white font-semibold text-sm py-2 px-4 rounded-lg w-fit mb-5 hover:bg-[#518103] transition-all "
        >
          Advies aanvragen
        </Link>
      </div>
      <img
        src={img}
        className="w-[20%] h-fit drop-shadow-[-15px_-15px_0px_#254055] md:block hidden"
      />
    </div>
  );
}


