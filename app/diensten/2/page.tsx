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

export default function Service2() {
  return (
    <>
      <Hero
        desktopSectionId="section1"
        title="Diensten"
        span={
          <span className="font-black md:text-4xl text-2xl text-[#254055] flex flex-col gap-3 ">
            <span> Energielabels nieuwbouw </span>
            <span>woningen en utiliteit</span>
          </span>
        }
        text="Behaal een officieel BENG-energielabel voor uw nieuwbouwproject en garandeer dat het ontwerp energiezuinig en toekomstbestendig is. Wij begeleiden u vanaf de ontwerpfase tot registratie bij de RVO."
      />

      <div
        id="section1"
        style={{ fontFamily: "Poppins" }}
        className="md:mx-24 px-5 flex flex-col md:gap-4 gap-2 md:pt-20 pt-10"
      >
        <h1 className="md:text-3xl text-2xl font-extrabold text-[#254055] ">
          Wat is een <span className="text-[#81C713] ">energielabel?</span>
        </h1>
        <p className="text-sm text-[#4D4D4D] ">
          Bij nieuwbouwwoningen wordt het energielabel berekend op basis van de
          BENG-eisen (Bijna Energie Neutraal Gebouw). Deze normen bepalen
          hoeveel energie een woning maximaal mag verbruiken voor verwarming,
          koeling, ventilatie en warm water.
        </p>
        <p className="text-sm text-[#4D4D4D] ">
          Onze gecertificeerde energieadviseurs bij Energie Dokter voeren een
          EP-berekening uit volgens de NTA 8800-norm om vast te stellen of het
          ontwerp voldoet aan de drie BENG-indicatoren:
        </p>
        <div className="flex flex-col items-center gap-2 w-fit m-auto md:mt-5 mt-2">
          <p className="font-semibold text-[#4D4D4D] text-sm bg-[#C773131A] p-2 px-4 rounded-xl w-full ">
            BENG 1 - Energiebehoefte van het gebouw (hoe goed het ontwerp warmte
            vasthoudt)
          </p>
          <p className="font-semibold text-[#4D4D4D] text-sm bg-[#BBC7131A] p-2 px-4 rounded-xl w-full ">
            BENG 2 - Primair fossiel energiegebruik (hoeveel fossiele energie
            nodig is)
          </p>
          <p className="font-semibold text-[#4D4D4D] text-sm bg-[#90C2421A] p-2 px-4 rounded-xl w-full ">
            BENG 3 - Aandeel hernieuwbare energie (hoeveel duurzame bronnen
            worden gebruikt)
          </p>
        </div>
        <p className="text-sm text-[#4D4D4D] md:mt-5 mt-3 ">
          Na oplevering registreren wij het definitieve energielabel bij de RVO,
          zodat uw nieuwbouwproject volledig voldoet aan de wettelijke vereisten
          en direct energiezuinig, toekomstbestendig en compliant is.
        </p>
      </div>

      <ServiceOverview
        roundedBl={false}
        roundedBr={true}
        imgStyle={{ width: "100%" }}
        reverse={true}
        title={
          <h1 className="md:text-3xl text-2xl font-extrabold text-[#254055] flex flex-col mt-2">
            <span>
              Geen <span className="text-[#81C713]">inzicht</span> in uw
              energieverbruik?
            </span>
            <span> Dat kost meer dan u denkt</span>
          </h1>
        }
        img="/assets/services/img2.svg"
        spans={
          <>
            <p>
              Zonder geldig energielabel loopt u niet alleen het risico op een
              boete — u verliest elke maand geld door onzichtbaar
              energieverlies. Veel gebouwen verspillen warmte, draaien op
              verouderde installaties of voldoen niet aan de nieuwste eisen. Het
              gevolg: hogere kosten, minder comfort en een pand dat aan waarde
              verliest bij verkoop of verhuur. Zonder duidelijk energielabel
              blijft besparen giswerk, en dat tikt ongemerkt aan.
            </p>
            <p>
              Onze aanpak is persoonlijk, snel en helder — jij weet precies waar
              je aan toe bent.
            </p>
            <Link
              href="/contact"
              className="bg-[#81C713] text-white font-semibold text-sm py-2 px-4 rounded-lg w-fit mb-5"
            >
              Advies aanvragen
            </Link>
          </>
        }
      />

      <div className="md:mt-10 mt-5 p-1"></div>
      <ServicesCTA
        title={
          <div>
            <h1 className="text-[#254055] font-extrabold md:text-3xl text-2xl ">
              Toekomstbestendig <span className="text-[#81C713] ">bouwen </span>
              begint hier
            </h1>
            <p className="text-sm text-[#4D4D4D] ">
              Een goed energielabel geeft zekerheid, trots en rust bij
              oplevering
            </p>
          </div>
        }
        text={
          <>
            <p className="text-sm text-[#4D4D4D] ">
              Stel u een woning voor die klaar is voor de toekomst —
              energiezuinig, comfortabel en volledig volgens de BENG-eisen. Met
              een goed energielabel weet u precies waar u staat: uw nieuwbouw
              voldoet aan de regelgeving, verbruikt minder energie en behoudt
              zijn waarde. Geen onzekerheid of uitstel meer, maar zekerheid bij
              oplevering en trots op het resultaat. Wij zorgen voor een helder
              traject en een snelle oplevering, zodat u zonder zorgen kunt
              bouwen aan duurzaam woongenot.
            </p>
          </>
        }
        img="/assets/blogs/section-img2.svg"
      />

      <div className="md:mt-20 mt-15"></div>

      <StepPlan />
      <Contact />
      <div className="md:mt-31 mt-10"></div>
      <ServicesStats text="Bij Energie Dokter begeleiden we uw project vanaf het ontwerptraject en voeren we de EP-berekening uit volgens de BENG-eisen. Onze adviseurs geven praktisch advies over installaties en isolatie, zorgen voor de officiële registratie bij de RVO en houden het proces transparant en overzichtelijk. Zo bent u verzekerd van een compliant, energiezuinig en toekomstbestendig nieuwbouwproject dat voldoet aan alle wettelijke eisen." />
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
