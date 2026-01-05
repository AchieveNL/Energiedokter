import React from "react";

export default function ServiceOverview({
  title,
  img,
  spans,
  reverse = false,
  roundedBl = false,
  roundedTl = true,
  roundedBr = true,
  imgStyle,
  imgHeight = "350px",
}: {
  title: React.ReactNode;
  img: string;
  spans: React.ReactNode;
  reverse?: boolean;
  roundedBl?: boolean;
  roundedTl?: boolean;
  roundedBr?: boolean;
  imgStyle?: React.CSSProperties;
  imgHeight?: string;
}) {
  return (
    <div
      style={{
        fontFamily: "Poppins",
        flexDirection: reverse ? "row-reverse" : "row",
        justifyContent: reverse ? "flex-end" : "flex-start",
      }}
      className="flex min-[768px]:mt-20 mt-10 min-[768px]:mx-24 w-fit min-[1280px]:w-4/5 min-[1280px]:m-auto min-[1280px]:mt-10 min-[1536px]:w-3/4 min-[1700px]:w-4/6 min-[1900px]:w-3/5 min-[2200px]:w-1/2 "
    >
      <div
        style={{
          borderBottomLeftRadius: roundedBl ? "40px" : "0px",
          borderTopLeftRadius: roundedTl ? "40px" : "0px",
          borderBottomRightRadius: roundedBr ? "40px" : "0px",
        }}
        className="text-sm text-[#4D4D4D] bg-[#FAFAFA] flex flex-col gap-5 md:pt-8 pt-3 px-5 md:px-10 md:pb-5 pb-5"
      >
        {title}
        {spans}
      </div>
      <img
        src={img}
        alt=""
        className="md:block hidden"
        style={{
          height: imgHeight,
          width: "auto",
          objectFit: "cover",
          ...imgStyle,
        }}
      />
    </div>
  );
}