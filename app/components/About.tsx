import { title } from "process";
import SectionTitle from "./SectionTitle";

export default function About() {
  const aboutStatistiques = [
    { title: "150+", subtitle: <span>Gebouwen <br /> verduurzaamd</span> },
    { title: "60+", subtitle: <span>Gemiddeld <br /> energiebesparing</span> },
    { title: "10+", subtitle: <span>Jaar ervaring <br /> in verduurzamen</span> },
    { title: "12+", subtitle: <span>Gecertificeerde <br /> specialisten</span> },
  ];
  return (
    <div className="mt-20 md:px-20 lg:px-24 px-5">
      {/* First section */}
      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between md:gap-5 gap-10">
        <div className="w-1/2 mt-3">
          <SectionTitle
            title="Wie wij zijn"
            span={
              <>
                <span className="text-[#254055]">Over </span>
                <span className="text-[#81C713] ">ons</span>
              </>
            }
          />
        </div>

        {/* paragraphs */}
        <div
          className="text-[#4D4D4D] md:text-lg  flex flex-col gap-5"
          style={{ fontFamily: "Poppins" }}
        >
          <p>
            Wij helpen organisaties hun gebouwen toekomstbestendig te maken. Van
            energiediagnose tot uitvoering zorgen we dat techniek, financiën en
            duurzaamheid naadloos op elkaar aansluiten.
          </p>
          <p>
            We begrijpen dat gebouwtechniek nooit op zichzelf staat. Door ook
            gebruikers, processen en praktische belangen mee te nemen, vinden we
            oplossingen die écht werken. Met heldere communicatie, snelheid en
            de juiste experts aan tafel realiseren we duurzame resultaten waar
            gebouw én organisatie direct van profiteren.
          </p>
        </div>
      </div>
      {/* Second Section */}
      <div
        className="bg-[#F6F6F6] flex flex-col md:flex-row items-center justify-center py-2 mt-10 rounded-4xl"
        style={{ fontFamily: "Poppins" }}
      >
        {aboutStatistiques.map((stat, index) => (
          <div key={index} className={`flex flex-col items-center gap-2 px-20 py-5 ${stat.title !== '12+' ? 'md:border-r-4 border-r-0 md:border-b-0 border-b-4 border-white' : ''} `}>
            <span className="text-[#3C8101] text-3xl font-bold ">
              {stat.title}
            </span>
            <span className="text-[#4D4D4D] text-center">{stat.subtitle}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
