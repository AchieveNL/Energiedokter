import Link from "next/link";

export default function DienstenSection() {
  return (
    <div
      style={{ fontFamily: "Poppins" }}
      className="bg-[url('/assets/HomeHeroBg.svg')] bg-cover flex flex-col gap-3 md:items-center items-start py-10 md:px-10 px-5 md:mx-20 mx-5 rounded-tl-[4rem] rounded-br-[4rem]"
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
        <span className="md:hidden block font-normal">De Energie Dokter schrijft het juiste behandelplan voor</span>
      </p>
      <div className="flex md:gap-5 gap-2 mt-5">
        <Link
          href="#"
          className="border-2 border-[#81C713] bg-[#81C713] text-white text-sm md:p-3 p-2 md:px-5 text-nowrap rounded-xl hover:bg-[#72ab16] hover:border-[#72ab16] transition-all"
        >
          Plan een consult
        </Link>
        <Link
          href="#"
          className="border-2 text-[#254055] text-sm md:p-3 p-2 md:px-5 text-nowrap rounded-xl hover:bg-[#254055] hover:text-white transition-all"
        >
          Bekijk alle diensten
        </Link>
      </div>
    </div>
  );
}
