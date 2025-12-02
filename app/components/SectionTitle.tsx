import React from "react";

export default function SectionTitle({
  title,
  span,
}: {
  title: string;
  span: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-3 w-fit">
      <div className="bg-[#F6F6F6] flex items-center gap-3 w-fit rounded-xl">
        <img src="/assets/sectionLogo.svg" className="w-6 my-2 ml-2" alt="" />
        <div className="mr-5 mt-1 text-nowrap" style={{ fontFamily: "Poppins" }}>
            {title}
        </div>
      </div>
      <h1 style={{fontFamily:"Poppins"}} >{span}</h1>
    </div>
  );
}
