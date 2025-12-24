"use client";
export default function AboutSection() {
  const Statics = ({
    number,
    text,
    style,
  }: {
    style: {};
    number: string;
    text: string;
  }) => (
    <div className="flex flex-col" style={style}>
      <span className="md:text-3xl text-2xl text-[#3C8101] font-bold">
        {number}
      </span>
      <span className="text-[#4D4D4D] md:text-base text-sm ">{text}</span>
    </div>
  );
  return (
    <div
      id="about-us"
      style={{ fontFamily: "Poppins" }}
      className="md:pt-32 pt-10 flex md:flex-row flex-col gap-10 md:mx-20 mx-5"
    >
      {/* left section */}
      <div className="md:w-1/2 h-fit bg-[#F6F6F6] rounded-4xl md:p-7 p-4 md:pb-10 pb-7 flex flex-col md:gap-5 gap-3">
        <h1 className="text-[#254055] md:text-3xl text-2xl font-extrabold ">
          Wie zijn wij?
        </h1>
        <p className="text-[#4D4D4D] md:text-base text-sm ">
          Energie Dokter is uw betrouwbare partner op het gebied van
          energieadvies en duurzaam bouwen. Met praktische oplossingen en
          persoonlijk advies helpen wij u sneller, slimmer en energiezuiniger te
          werken.
        </p>
        <div className="flex flex-wrap justify-center">
          <div
            className="md:block hidden "
            style={{ width: "30.33%", textAlign: "center", marginTop: 20 }}
          >
            <Statics style={{}} number="150+" text="Gebouwen verduurzaamd" />
          </div>
          <div
            className="block md:hidden "
            style={{ width: "30.33%", textAlign: "left", marginTop: 20 }}
          >
            <Statics style={{}} number="150+" text="Gebouwen verduurzaamd" />
          </div>
          <div
            className="md:w-1/4 2xl:w-[20%] p-7"
            style={{
              width:
                typeof window !== "undefined" && window.innerWidth >= 2000
                  ? "12%"
                  : undefined,
            }}
          >
            <img src="/favicon.svg" className="w-full" />
          </div>
          <Statics
            number="12+"
            text="Gecertificeerde specialisten"
            style={{ width: "33.33%" }}
          />
          <Statics
            number="60%"
            text="Gemiddelde energiebesparing"
            style={{ textAlign: "center" }}
          />
        </div>
      </div>

      {/* right section */}
      <div className="md:w-1/2 flex flex-col gap-5">
        <div className="w-full relative flex items-center">
          <img
            src="/assets/about/img1.svg"
            className="size-10 rounded-full absolute left-0"
          />
          <img
            src="/assets/about/img2.svg"
            className="size-10 rounded-full absolute left-7 z-10"
          />
          <img
            src="/assets/about/img3.svg"
            className="size-10 rounded-full absolute left-14 z-20"
          />
          {/* <Plus className="bg-black rounded-full absolute z-30 left-21 size-10 text-white p-2" /> */}
          <span className="text-[#4D4D4D] ml-30 text-sm ">
            Trusted by 150+ Happy Customers
          </span>
        </div>
        <div className="flex gap-5 items-center">
          <span className="text-[#3C8101] font-bold text-2xl ">150+</span>
          <span className="text-[#4D4D4D] text-sm ">Reviews</span>
        </div>

        <div className="bg-[#F0F8E2] rounded-4xl md:p-7 p-4 md:px-10 flex flex-col gap-5 md:mt-0 mt-7">
          <h1 className="text-[#254055] md:text-3xl text-2xl font-extrabold ">
            Waarom Energie Dokter de
            <span className="text-[#81C713]"> juiste</span> partner is
          </h1>
          <span className="text-[#4D4D4D] md:text-base text-sm ">
            Energie Dokter combineert brede technische kennis met een helder
            overzicht. We kennen de details, maar focussen op het totaalplaatje
            — van losse vragen tot complete verduurzamingsplannen.
          </span>
          <span className="text-[#4D4D4D] md:text-base text-sm ">
            We volgen wet- en regelgeving op de voet en vertalen theorie direct
            naar praktische, haalbare oplossingen. Als sparringpartner werken we
            samen met uw bestaande partijen aan keuzes die écht werken.
          </span>
          <span className="text-[#4D4D4D] md:text-base text-sm ">
            Kortom: wij verbinden techniek, beleid en praktijk tot één duidelijk
            en uitvoerbaar plan.
          </span>
        </div>
      </div>
    </div>
  );
}
