import Link from "next/link";

export default function Contact() {
  return (
    <>
      <div
        style={{ fontFamily: "Poppins" }}
        className="relative mt-20 bg-[url('/assets/HomeHeroBg.svg')] bg-cover bg-center md:mx-24 mx-1 md:px-7 px-3 md:pt-3 pb-5 md:rounded-tl-[4rem] md:rounded-br-[4rem] rounded-tl-4xl rounded-br-4xl flex md:flex-row flex-col-reverse justify-between overflow-x-clip "
      >
        {/* left section */}
        <div className="md:w-3/4 w-[70%] md:block hidden">
          <h1 className="md:text-[26px] text- font-bold text-[#0D2131] md:mt-5 mt-5  ">
            Last van energieverlies? De
            <span className="text-[#81C713] "> Energie Dokter</span> helpt!
          </h1>
          <span className="text-[#254055] md:text-lg md:block hidden ">
            De Energie Dokter schrijft het juiste behandelplan voor
          </span>
          <div className="text-[#254055] flex flex-col md:mt-5 mt-3 md:text-[16px] text-[11px] gap-1 md:w-full w-[90%] ">
            <span>
              <span className="font-semibold">Energiescan -</span> brengt
              verspilling en verbeterpunten helder in kaart
            </span>
            <span>
              <span className="font-semibold">Duidelijk rapport - </span>
              met meetresultaten, adviezen en prioriteiten
            </span>
            <span>
              <span className="font-semibold">Snelinzicht - </span>
              binnen enkele werkdagen weet u waar u aan toe bent
            </span>
            <span>
              <span className="font-semibold">Persoonlijke begeleiding - </span>
              onze experts helpen bij elke stap
            </span>
            <span>
              <span className="font-semibold">Transparant & voordelig - </span>
              eerlijke investering, vaak (deels) subsidiabel
            </span>
          </div>

          <p className="text-[#254055] md:mt-5 mt-3 md:text-[16px] text-[11px] w-[90%] ">
            Klaar om uw gebouw energiezuiniger te maken?
          </p>
          <div className="md:flex hidden md:gap-5 gap-2 mt-10 md:text-sm text-xs">
            <Link
              href="/contact"
              className="bg-[#6B9D1C] text-white rounded-xl p-3 md:px-5 px-3 hover:bg-[#3b560f] hover:cursor-pointer transition-colors duration-300 "
            >
              Plan een consult
            </Link>
            <Link
              href="/diensten/Alle-diensten"
              className="border-3 border-[#254055] text-[#254055] rounded-xl p-3 md:px-5 px-3 hover:bg-[#254055] hover:text-white transition-colors duration-300 cursor-pointer "
            >
              Bekijk alle diensten
            </Link>
          </div>
        </div>

        {/* mobile left section */}
        <div className="w-[70%] md:hidden block">
          <h1 className="font-bold text-[#0D2131] mt-5  ">
            Last van energieverlies? De
            <span className="text-[#81C713] "> Energie Dokter</span> helpt!
          </h1>

          <ul className="list-disc list-inside text-[#254055] flex flex-col mt-3 text-sm w-[90%]">
            <li className="font-semibold">Energiescan</li>
            <li className="font-semibold">Duidelijk rapport</li>
            <li className="font-semibold">Snel inzicht</li>
            <li className="font-semibold">Persoonlijke begeleiding</li>
            <li className="font-semibold">Transparant & voordelig</li>
          </ul>

          <p className="text-[#254055] mt-3 text-sm w-[90%] ">
            Klaar om uw gebouw energiezuiniger te maken?
          </p>
        </div>
        {/* right section mobile */}
        <div>
          <img
            src="/assets/man.png"
            className="absolute bottom-0 right-3 h-[105%] md:hidden block"
            alt=""
          />
        </div>
        <div className="absolute text-center text-sm text-white right-5 md:hidden block">
          <h1 className="font-bold ">Rutger Jenner</h1>
          <p className="text-[8px] ">Oprichter en Directeur</p>
        </div>
        {/* right section desktop */}
        <div>
          <img
            src="/assets/man.svg"
            className="absolute bottom-0 right-10 h-[115%] md:block hidden"
            alt=""
          />
        </div>
        <div className="absolute text-center right-5 md:block hidden bg-white p-3 rounded-tl-2xl rounded-br-2xl">
          <h1 className="font-bold ">Rutger Jenner</h1>
          <p className="text-[8px] ">Oprichter en Directeur</p>
        </div>
      </div>

      <div className="md:hidden flex justify-center gap-2 text-sm mt-5">
        <Link
          href="/contact"
          className="bg-[#6B9D1C] text-white py-3 px-5 rounded-xl hover:bg-[#3b560f] transition-colors duration-300 "
        >
          Plan een consult
        </Link>
        <Link
          href="/diensten/Alle-diensten"
          className="border-3 border-[#254055] text-[#254055] rounded-xl hover:bg-[#254055] hover:text-white transition-colors duration-300 flex justify-center items-center px-5 "
        >
          Bekijk alle diensten
        </Link>
      </div>
    </>
  );
}
