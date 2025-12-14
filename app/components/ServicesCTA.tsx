import React from "react";

export default function ServicesCTA({
  title,
  text,
  img
}: {
  title: React.ReactNode;
  text: React.ReactNode;
  img:string;
}) {
  return (
    <div
      className="md:mt-20 mt-10 md:px-24 px-5 flex md:gap-32"
      style={{ fontFamily: "Poppins" }}
    >
      <div className="flex flex-col gap-5 md:w-1/2">
        {title}
        {text}
      </div>
      <img
        src={img}
        className="w-[20%] drop-shadow-[-15px_-15px_0px_#254055] md:block hidden"
      />
    </div>
  );
}
