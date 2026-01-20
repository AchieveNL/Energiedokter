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
import animationData from "@/public/assets/animations/faq.json";

const data = [
  {
    bold: "Boetes en juridische risico's ",
    normal:
      "Zonder geldig energielabel riskeert u hoge boetes of andere juridische gevolgen",
  },
  {
    bold: "Hogere energiekosten",
    normal:
      "U heeft geen overzicht van waar uw gebouw energie verliest, waardoor kosten onnodig hoog blijven",
  },
  {
    bold: "Minder aantrekkelijk voor huurders of kopers",
    normal:
      "Een laag of ontbrekend energielabel kan uw pand minder aantrekkelijk maken",
  },
  {
    bold: "Beperkt inzicht in verbeteringen",
    normal:
      "Zonder label mist u concrete informatie om energie-efficiëntie te verbeteren",
  },
  {
    bold: "Waardedaling van het pand",
    normal:
      "Gebouwen zonder actueel energielabel kunnen in waarde dalen bij verkoop of verhuur",
  },
];

export default function Service1() {
  const Card = ({ bold, normal }: { bold: string; normal: string }) => {
    return (
      <div className="bg-linear-to-r from-[#f2f2ca] via-[#e5f0bf] to-[#d0f0ed] p-1 rounded-tl-3xl rounded-br-3xl h-full">
        <div className="pb-5 bg-white p-4 text-[#4D4D4D] flex flex-col h-full rounded-tl-3xl rounded-br-3xl">
          <span className="font-semibold">{bold}</span>
          <span>{normal}</span>
        </div>
      </div>
    );
  };

  return (
    <>
      <Hero
        animationData={animationData}
        desktopSectionId="section1"
        title="Diensten"
        span={
          <span className="font-black md:text-4xl text-2xl text-[#254055] flex lg:flex-row flex-col gap-3 ">
            <span> Energielabels bestaande</span>
            <span>woningen en utiliteit</span>
          </span>
        }
        text="Krijg inzicht in de energieprestatie van uw bestaande kantoor, school of winkel en voldoe aan de wettelijke energielabelplicht. Zo verlaagt u energiekosten en versterkt u het duurzame imago van uw gebouw."
      />

      <div id="section1" className="py-4"></div>
      <ServiceOverview
        imgStyle={{ borderBottomRightRadius: "40px" }}
        roundedTl={true}
        roundedBl={false}
        title={
          <h1 className="md:text-3xl text-2xl font-extrabold text-[#254055] ">
            Wat is een <span className="text-[#81C713]">energielabel?</span>
          </h1>
        }
        img="/assets/services/img1.svg"
        spans={
          <>
            <p>
              Een energielabel laat zien hoe energiezuinig uw bestaande woning
              of appartement is. Het geeft inzicht in het energieverbruik dat
              nodig is voor een comfortabel binnenklimaat en toont precies waar
              u kunt besparen. Het energielabel wordt bepaald op basis van
              bouwkundige en installatietechnische eigenschappen, zoals
              isolatie, ventilatie en verwarmingssystemen. Apparaten en
              AV-middelen zoals koffiemachines, koelkasten, televisies of
              laadpalen vallen hier niet onder.
            </p>
            <p>
              Bij Energie Dokter bekijken onze gecertificeerde energieadviseurs
              uw woning zorgvuldig en registreren we het officiële energielabel
              bij de RVO. Zo bent u verzekerd van een label, dat voldoet aan de
              wettelijke verplichtingen bij verkoop of verhuur.
            </p>
            <p>
              Onze aanpak is persoonlijk, snel en helder — jij weet precies waar
              je aan toe bent.
            </p>
          </>
        }
      />

      <div
        style={{ fontFamily: "Poppins" }}
        className="md:mx-24 mx-5 md:mt-20 mt-10 flex flex-col gap-2 items-center"
      >
        <h1 className="md:text-3xl text-2xl font-bold text-[#254055]">
          Energieverlies is{" "}
          <span className="text-[#81C713] ">winstverlies</span>, ontdek waar uw
          gebouw lekt.
        </h1>
        <p className="text-[#4D4D4D] text-sm">
          Een energielabel is niet alleen verplicht, het biedt ook praktische
          voordelen voor uzelf en toekomstige bewoners:
        </p>
        <div className="md:mt-10 mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
          {data.map((item, index) => (
            <Card key={index} bold={item.bold} normal={item.normal} />
          ))}
        </div>
        <p className="text-sm text-[#4D4D4D] md:mt-10 mt-5 ">
          Kortom: een energielabel is meer dan verplichting — het is een
          investering in inzicht, comfort en waarde van uw woning.
        </p>
        <Link
          href="/contact"
          className="bg-[#81C713] text-white font-semibold text-sm py-2 px-4 rounded-lg mt-5 hover:bg-[#518103] transition-all "
        >
          Advies aanvragen
        </Link>
      </div>

      <div className="py-5"></div>
      <ServicesCTA
        title={
          <div>
            <h1 className="text-[#254055] font-extrabold md:text-3xl text-2xl ">
              Grip op energie, <span className="text-[#81C713] ">waarde </span>
              voor uw pand
            </h1>
            <p className="text-sm text-[#4D4D4D] mt-1 ">
              Laat jouw woning energiezuiniger, comfortabeler en waardevoller
              worden
            </p>
          </div>
        }
        text={
          <>
            <p className="text-sm text-[#4D4D4D] ">
              Stel je voor: een huis dat minder energie verbruikt, altijd
              aangenaam aanvoelt en meer waard is op de markt. Geen zorgen meer
              over onverwacht hoge rekeningen of verouderde installaties, maar
              weten dat jouw woning voldoet aan de eisen van morgen. Met het
              juiste energielabel zet je die stap — naar een duurzame, zorgeloze
              en toekomstbestendige woning.
            </p>
          </>
        }
        img="/assets/blogs/section-img.png"
      />
      <div className="py-3"></div>

      <div className="md:mt-20 mt-10"></div>
      <StepPlan />
      <Contact />

      <div className="md:mt-31 mt-10"></div>
      <ServicesStats
        text="Bij Energie Dokter combineren we kennis, ervaring en praktische
          oplossingen om uw energielabel snel en betrouwbaar te verzorgen. Onze
          gecertificeerde energieadviseurs geven deskundig advies op maat,
          passend bij uw woning, en bieden direct praktische tips om energie te
          besparen en het wooncomfort te verhogen. We werken persoonlijk en
          transparant, zodat u altijd precies weet wat er gebeurt en er geen
          verrassingen achteraf zijn. Met Energie Dokter haalt u dus niet alleen
          een officieel energielabel in huis, maar ook rust, zekerheid en extra
          waarde voor uw woning."
      />
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
