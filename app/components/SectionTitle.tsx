import React from "react";

export default function SectionTitle({
  title,
  span,
  align,
  titleSize,
  titleVisible = true,
}: {
  title: string;
  span: React.ReactNode;
  align?: string;
  titleSize?: {};
  titleVisible?: boolean;
}) {
  return (
    <div
      className="flex flex-col md:gap-5 gap-3 w-fit"
      style={{ alignItems: align ? align : "center" }}
    >
      {titleVisible ? (
        <div
          className="bg-[#F6F6F6] flex items-center gap-3 w-fit rounded-xl"
          style={titleSize}
        >
          <img src="/assets/sectionLogo.svg" className="w-6 my-2 ml-2" alt="" />
          <div
            className="mr-5 mt-1 text-nowrap"
            style={{ fontFamily: "Poppins" }}
          >
            {title}
          </div>
        </div>
      ) : null}
      <h1 style={{ fontFamily: "Poppins" }}>{span}</h1>
    </div>
  );
}
