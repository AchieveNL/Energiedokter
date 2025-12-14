export default function ServicesStats() {
  const aboutStatistiques = [
    {
      title: "150+",
      subtitle: (
        <span>
          Gebouwen <br /> verduurzaamd
        </span>
      ),
    },
    {
      title: "60+",
      subtitle: (
        <span>
          Gemiddeld <br /> energiebesparing
        </span>
      ),
    },
    {
      title: "10+",
      subtitle: (
        <span>
          Jaar ervaring <br /> in verduurzamen
        </span>
      ),
    },
    {
      title: "12+",
      subtitle: (
        <span>
          Gecertificeerde <br /> specialisten
        </span>
      ),
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <div
        style={{ fontFamily: "Poppins" }}
        className="flex md:flex-row flex-col md:mx-24 px-5 md:gap-10 gap-3 "
      >
        <h1 className="text-[#254055] font-extrabold md:text-3xl text-nowrap pt-2 ">
          Waarom <br /> Energie Dokter?
        </h1>
        <p className="text-[#4D4D4D] text-sm ">
          Bij Energie Dokter combineren we kennis, ervaring en praktische
          oplossingen om uw energielabel snel en betrouwbaar te verzorgen. Onze
          gecertificeerde energieadviseurs geven deskundig advies op maat,
          passend bij uw woning, en bieden direct praktische tips om energie te
          besparen en het wooncomfort te verhogen. We werken persoonlijk en
          transparant, zodat u altijd precies weet wat er gebeurt en er geen
          verrassingen achteraf zijn. Met Energie Dokter haalt u dus niet alleen
          een officieel energielabel in huis, maar ook rust, zekerheid en extra
          waarde voor uw woning.
        </p>
      </div>
      <div
        className="bg-[#F6F6F6] flex flex-col md:flex-row items-center justify-center py-2 mt-10 rounded-4xl md:mx-0 mx-10 md:px-0 px-10 w-fit m-auto"
        style={{ fontFamily: "Poppins" }}
      >
        {aboutStatistiques.map((stat, index) => (
          <div
            key={index}
            className={`flex flex-col items-center gap-2 md:px-20 py-5 ${
              stat.title !== "12+"
                ? "md:border-r-4 border-r-0 md:border-b-0 border-b-4 border-white"
                : ""
            } `}
          >
            <span className="text-[#3C8101] text-3xl font-bold ">
              {stat.title}
            </span>
            <span className="text-[rgb(77,77,77)] text-center">
              {stat.subtitle}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
