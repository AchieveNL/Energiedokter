import Link from "next/link";
import SectionTitle from "./SectionTitle";

export default function Hero({
  span,
  title,
  text,
}: {
  span: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div
      className="md:pt-44 pt-28 min-h-screen md:px-20 bg-[url('/assets/HomeHeroBg.svg')] bg-cover flex flex-col gap-3"
      style={{ fontFamily: "Poppins" }}
    >
      <div className="md:block hidden">
        <SectionTitle title={title} span={span} align="start" />
      </div>
      <div className="block md:hidden text-center self-center">
        <SectionTitle
          titleSize={{ fontSize: 14 }}
          title={title}
          span={span}
          align="center"
        />
      </div>
      <p className="text-[#4D4D4D] md:w-1/2 mt-3 md:text-base text-sm md:text-left text-center px-3">
        {text}
      </p>
      <div className="flex md:justify-start justify-center md:gap-5 gap-2 mt-10">
        <Link
          href="#"
          className="text-white bg-[#81C713] hover:bg-[#689e12] transition-all duration-200 md:py-2 md:pb-3 px-5 rounded-full flex items-center justify-center w-fit md:text-lg text-sm "
        >
          Plan een gesprek
        </Link>
        <Link
          href="#"
          className="text-[#4D4D4D] bg-white hover:bg-[#82c71350] transition-all duration-200 md:py-2 md:pb-3 p-3 px-8 rounded-full flex items-center justify-center w-fit md:text-lg text-sm "
        >
          Lees meer
        </Link>
      </div>
    </div>
  );
}
