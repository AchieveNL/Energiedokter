import React from "react";

export default function ServiceOverview({
  title,
  img,
  spans,
  reverse = false,
  rounded = true,
  imgStyle,
}: {
  title: React.ReactNode;
  img: string;
  spans: React.ReactNode;
  reverse?: boolean;
  rounded?: boolean;
  imgStyle?: {};
}) {
  return (
    <div
      style={{
        fontFamily: "Poppins",
        flexDirection: reverse ? "row-reverse" : "row",
        justifyContent: reverse ? "flex-end" : "flex-start",
      }}
      className="flex md:mt-20 mt-10 md:mx-24 w-fit md:bg-transparent"
    >
      <div className="text-sm text-[#4D4D4D] bg-[#FAFAFA] flex flex-col gap-5 pt-3 px-5 md:pr-20 md:pb-0 pb-5">
        {title}
        {spans}
      </div>
      <img
        src={img}
        alt=""
        className="w-1/2 md:block hidden bg-[#596E3633]="
        style={imgStyle}
        // style={
        //   reverse
        //     ? { borderTopLeftRadius: "45px" }
        //     : rounded
        //     ? { borderTopRightRadius: "45px" }
        //     : { borderTopRightRadius: "45px" }
        // }
      />
    </div>
  );
}
