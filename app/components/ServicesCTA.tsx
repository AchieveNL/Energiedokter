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
      className="md:mt-20 mt-10 flex min-[768px]:gap-10 min-[1226px]:gap-20 min-[1500px]:gap-40 justify-center"
      style={{
        fontFamily: "Poppins",
        flexDirection: reverse ? "row-reverse" : "row",
      }}
    >
      <div className="flex flex-col gap-5">
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
        className="md:w-[35%] xl:w-[20%] h-fit drop-shadow-[-15px_-15px_0px_#254055] mt-5 md:block hidden"
      />
    </div>
  );
}


