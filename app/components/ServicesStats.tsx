export default function ServicesStats({ text }: { text: string }) {
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
      title: "60%",
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
    <div className="flex flex-col items-center md:mt-0 mt-15">
      <div
        style={{ fontFamily: "Poppins" }}
        className="flex lg:flex-row lg:items-center flex-col md:mx-24 px-5 lg:gap-10 gap-3 "
      >
        <h1 className="text-[#254055] font-extrabold md:text-3xl text-2xl text-nowrap pt-2 ">
          <span className="text-[#81C713]">Waarom</span> <br /> Energie Dokter?
        </h1>
        <p className="text-[#4D4D4D] text-sm ">{text}</p>
      </div>
      <div
        className="bg-[#F6F6F6] grid grid-cols-2 xl:grid-cols-4 items-center justify-center py-2 mt-10 rounded-4xl md:mx-0 mx-2 md:px-0 px-4  gap-x-7 md:gap-x-0 w-fit m-auto"
        style={{ fontFamily: "Poppins" }}
      >
        {aboutStatistiques.map((stat, index) => (
          <div
            key={index}
            className={`grid items-center gap-2 md:px-20 py-5 ${
              stat.title !== "12+"
                ? "md:border-r-4 border-r-0 md:border-b-0 border-b-4 border-white"
                : ""
            } `}
          >
            <span className="text-[#3C8101] text-3xl font-bold text-center">
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
