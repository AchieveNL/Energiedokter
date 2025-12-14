import React from "react";

export default function ServiceOverview({
  title,
  img,
  spans,
}: {
  title: React.ReactNode;
  img: string;
  spans: React.ReactNode;
}) {
  return (
    <div
      style={{ fontFamily: "Poppins" }}
      className="flex md:mt-20 mt-5 md:mx-24 mx-5 md:gap-20 "
    >
      <div className="text-sm text-[#4D4D4D] flex flex-col gap-5 md:w-1/2">
        {title}
        {spans}
      </div>
      <img
        src={img}
        alt=""
        className="w-[30%] md:block hidden"
      />
    </div>
  );
}
