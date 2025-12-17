import Link from "next/link";

export default function DienstenSection() {
  return (
    <div
      style={{ fontFamily: "Poppins" }}
      className="md:my-20 my-10 bg-[url('/assets/HomeHeroBg.svg')] bg-cover flex flex-col gap-3 md:items-center items-start py-10 md:px-10 px-5 md:mx-20 mx-5 rounded-tl-[4rem] rounded-br-[4rem]"
    >
      <h3 className="text-[#6B9D1C] font-bold md:block hidden">
        Maak een afspraak met de Energie Dokter
      </h3>
      <p className="text-[#0D2131] font-bold md:text-2xl md:text-center">
        Heeft uw gebouw last van energielekken of verminderde efficiëntie?
        <br />
        <span className="md:block hidden">
          De
          <span className="text-[#81C713] "> Energie Dokter</span> schrijft het
          juiste behandelplan voor!
        </span>
        <span className="md:hidden block font-normal">
          De Energie Dokter schrijft het juiste behandelplan voor
        </span>
      </p>
      <div className="flex md:gap-5 gap-2 mt-5 items-center">
        <Link
          href="/contact"
          className="md:border-2 border border-[#81C713] bg-[#81C713] text-white md:text-base text-sm flex justify-center items-center h-fit rounded-xl transition-all md:px-5 p-2 px-3 text-nowrap hover:bg-[#5a8613] hover:border-[#5a8613]"
        >
          Plan een consult
        </Link>
        <Link
          href="/diensten/Alle-diensten"
          className="text-[#254055] md:border-2 border border-[#254055] md:text-base text-sm flex justify-center items-center h-fit rounded-xl transition-all md:px-5 p-2 px-3 text-nowrap hover:bg-[#72a2c7] hover:border-[#72a2c7] hover:text-white"
        >
          Bekijk alle diensten
        </Link>
      </div>
    </div>
  );
}
