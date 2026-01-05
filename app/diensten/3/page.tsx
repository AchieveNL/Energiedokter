import AboutSection from "@/app/components/AboutSection";
import Contact from "@/app/components/Contact";
import ContactSection from "@/app/components/ContactSection";
import Faq from "@/app/components/Faq";
import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Hero";
import Projects from "@/app/components/Projects";
import Reviews from "@/app/components/Reviews";
import ServiceOverview from "@/app/components/ServiceOverview";
import ServicesCTA from "@/app/components/ServicesCTA";
import ServicesStats from "@/app/components/ServicesStats";
import StepPlan from "@/app/components/StepPlan";
import Link from "next/link";

export default function Service3() {
  return (
    <>
      <Hero
        desktopSectionId="section1"
        title="Diensten"
        span={
          <span className="font-black md:text-4xl text-2xl text-[#254055] flex flex-col gap-3 ">
            <span> Informatieplicht </span>
          </span>
        }
        text="Voldoe aan de wettelijke informatieplicht voor energiebesparing zonder gedoe. Wij helpen u met de juiste rapportage, begeleiding en registratie zodat u volledig compliant bent met de RVO-eisen."
      />
      <div id="section1" className="py-2"></div>
      <ServicesCTA
        reverse={true}
        title={
          <div>
            <h1 className="text-[#254055] font-extrabold md:text-3xl text-2xl ">
              De <span className="text-[#81C713] ">waarde </span>
              van informatieplicht
            </h1>
          </div>
        }
        text={
          <>
            <p className="text-sm text-[#4D4D4D] ">
              De informatieplicht energiebesparing verplicht bedrijven en
              vastgoedeigenaren om inzicht te geven in het energieverbruik van
              hun pand en de mogelijkheden om dit te verminderen. Dit geldt voor
              gebouwen van 50 m² of groter en is onderdeel van de wettelijke
              verplichtingen om energieverspilling tegen te gaan.
            </p>
            <p className="text-sm text-[#4D4D4D] ">
              Bij Energie Dokter ondersteunen we u volledig bij het in kaart
              brengen van de energieprestatie van uw gebouwen. Onze experts
              inventariseren het verbruik, analyseren technische installaties en
              adviseren over haalbare besparingsmaatregelen. Zo krijgt u een
              compleet overzicht dat voldoet aan de wettelijke eisen en
              tegelijkertijd praktisch bruikbaar is voor uw organisatie.
            </p>
          </>
        }
        img="/assets/blogs/section-img3.png"
      />

      <div className="md:mt-10 mt-5 p-1"></div>
      <ServiceOverview
        title={
          <h1 className="md:text-3xl text-2xl font-extrabold text-[#254055] flex flex-col ">
            <span className="flex gap-1">
              De <span className="text-[#81C713]">risico's </span>van het
              negeren <span className="md:block hidden">van</span>
            </span>
            <span className="flex gap-1">
              <span className="md:hidden block">van </span>
              <span> de informatieplicht</span>
            </span>
          </h1>
        }
        img="/assets/services/img6.webp"
        spans={
          <>
            <p>
              Wanneer de informatieplicht niet correct wordt nageleefd, mist u
              overzicht en grip op het energieverbruik van uw pand. Dit kan
              leiden tot onnodige kosten, omdat u geen inzicht heeft in waar
              energiebesparingen mogelijk zijn. Daarnaast loopt u het risico op
              boetes of andere sancties door niet-naleving van de wetgeving. Het
              gebrek aan duidelijke registratie kan ook uw imago aantasten:
              huurders, kopers of investeerders zien mogelijk een gebrek aan
              transparantie en duurzaamheid. Zonder een gestructureerde,
              persoonlijke en heldere aanpak blijft u onzeker over uw
              verplichtingen en blijft het volledige potentieel van uw gebouw
              onbenut.
            </p>
          </>
        }
      />

      <div className="md:mt-20 mt-15"></div>

      <div
        style={{ fontFamily: "Poppins" }}
        className="flex flex-col md:gap-5 gap-3 items-center relative"
      >
        <h1 className="md:text-3xl text-2xl font-extrabold text-[#254055] text-center ">
          Profiteer van een <span className="text-[#81C713] ">volledige </span>
          informatievoorziening
        </h1>
        <p className="text-[#4D4D4D] text-sm md:w-1/2 px-5 text-center">
          Door te voldoen aan de informatieplicht heeft u altijd helder inzicht
          in de energieprestaties van uw pand. Dit maakt het makkelijker om
          keuzes te maken voor verduurzaming, voorkomt boetes en misverstanden,
          en verhoogt de transparantie voor huurders, kopers of investeerders.
        </p>
        <p className="text-[#4D4D4D] text-sm md:w-1/2 px-5 text-center">
          Met de juiste informatie op het juiste moment bespaart u tijd,
          voorkomt u risicos en vergroot u de waarde en aantrekkelijkheid van uw
          gebouw.
        </p>
        <Link
          href="/contact"
          className="bg-[#81C713] text-white font-semibold text-sm py-2 px-4 rounded-lg mt-5 w-fit  hover:bg-[#518103] transition-all"
        >
          Advies aanvragen
        </Link>
        <img
          src="/assets/services/arrow1.svg"
          className="md:w-40 w-20 absolute bottom-10 left-0 -z-10"
        />
        <img
          src="/assets/services/arrow2.svg"
          className="md:w-40 w-20 absolute top-10 right-0 -z-10"
        />
      </div>

      <div className="md:mt-20 mt-15"></div>

      <StepPlan />
      <Contact />
      <div className="md:mt-31 mt-10"></div>
      <ServicesStats text="Bij Energie Dokter combineren we technische expertise met praktische uitvoerbaarheid. Wij zorgen dat uw informatieplicht volledig en correct wordt nageleefd, en vertalen complexe regelgeving naar overzichtelijke, bruikbare adviezen. Van opname en analyse tot rapportage en advies: onze adviseurs begeleiden u stap voor stap, zodat u precies weet wat nodig is en direct actie kunt ondernemen. Zo krijgt u niet alleen inzicht in uw energieverbruik, maar ook grip op kosten, duurzaamheid en toekomstbestendigheid van uw gebouwen." />
      <div className="md:py-10 py-7"></div>

      <Faq />
      <Projects />
      <div className="bg-[url('/assets/HomeHeroBg.svg')] bg-cover md:mt-20 mt-10 py-10 ">
        <Reviews />
      </div>
      <ContactSection />
      <Footer />
    </>
  );
}
