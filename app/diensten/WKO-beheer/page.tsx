"use client";
import Contact from "@/app/components/Contact";
import ContactSection from "@/app/components/ContactSection";
import Faq from "@/app/components/Faq";
import Footer from "@/app/components/Footer";
import Projects from "@/app/components/Projects";
import Reviews from "@/app/components/Reviews";
import SectionTitle from "@/app/components/SectionTitle";
import ServiceOverview from "@/app/components/ServiceOverview";
import ServicesCTA from "@/app/components/ServicesCTA";
import ServicesStats from "@/app/components/ServicesStats";
import StepPlan from "@/app/components/StepPlan";
import Link from "next/link";
import animationData from "@/public/assets/animations/faq.json";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useEffect, useRef } from "react";
import AnimatedBg from "@/app/components/AnimatedBg";

export default function Service5() {
  const scrollToSection = () => {
    const section1 = document.getElementById("section1");
    section1?.scrollIntoView({ behavior: "smooth" });
  };

  const lottieDesktopRef = useRef<LottieRefCurrentProps>(null);
  const lottieMobileRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    // Set speed to 1 for both animations
    if (lottieDesktopRef.current) {
      lottieDesktopRef.current.setSpeed(1);
    }
    if (lottieMobileRef.current) {
      lottieMobileRef.current.setSpeed(1);
    }
  }, []);

  return (
    <>
      <div
        className="flex flex-col items-center gap-3 relative "
        style={{ fontFamily: "Poppins" }}
      >
        <div className="absolute inset-0 -z-10 h-full">
          <AnimatedBg />
        </div>
        <div
          className="relative w-full lg:block hidden pointer-events-none"
          style={{ paddingTop: "130px" }}
        >
          <Lottie
            lottieRef={lottieDesktopRef}
            animationData={animationData}
            loop
            autoplay
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="lg:absolute pt-36 flex flex-col items-center">
          <div className="md:flex hidden text-center  ">
            <SectionTitle
              title="Diensten"
              span={
                <span className="font-black text-4xl text-[#254055] flex flex-col gap-2 ">
                  <span>WKO Beheer </span>
                </span>
              }
              align="center"
            />
          </div>
          <div className="block md:hidden text-center">
            <SectionTitle
              titleSize={{ fontSize: 14 }}
              title="Diensten"
              span={
                <span className="font-black text-2xl text-[#254055]">
                  WKO Beheer
                </span>
              }
              align="center"
            />
          </div>
          <p className="text-[#4D4D4D] md:w-1/2 mt-3 md:text-base text-sm text-center px-3">
            Haal het maximale rendement uit uw Warmte-Koudeopslag (WKO)-systeem.
            Wij zorgen voor professioneel beheer, monitoring en optimalisatie
            zodat uw installatie efficiënt, duurzaam en storingsvrij blijft
            werken.
          </p>
          <div className="flex md:justify-start justify-center md:gap-5 gap-2 mt-10">
            <Link
              href="#"
              className="text-white bg-[#81C713] hover:bg-[#689e12] transition-all duration-200 md:py-2 md:pb-3 px-5 rounded-full flex items-center justify-center w-fit md:text-lg text-sm "
            >
              Plan een gesprek
            </Link>
            <Link
              onClick={scrollToSection}
              href="#"
              className="text-[#4D4D4D] bg-white hover:bg-[#82c71350] transition-all duration-200 md:py-2 md:pb-3 p-3 px-8 rounded-full flex items-center justify-center w-fit md:text-lg text-sm "
            >
              Lees meer
            </Link>
          </div>
        </div>
        <div className="w-full lg:hidden block pointer-events-none mt-10">
          <Lottie
            lottieRef={lottieMobileRef}
            animationData={animationData}
            loop
            autoplay
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
      <div id="section1" className="py-2"></div>
      <ServiceOverview
        title={
          <h1 className="md:text-3xl text-2xl font-extrabold text-[#254055] flex flex-col ">
            <span>
              Wat is<span className="text-[#81C713]"> WKO-beheer? </span>
            </span>
          </h1>
        }
        img="/assets/services/img4.svg"
        spans={
          <>
            <p>
              Een bodemenergiesysteem, ook wel WKO-systeem (Warmte Koude Opslag)
              genoemd, is een duurzame installatie die warmte en koude opslaat
              in de bodem. Warmte die in de zomer wordt geoogst, kan in de
              winter worden gebruikt om een gebouw te verwarmen. Omgekeerd kan
              koude die in de winter is opgeslagen in de zomer worden ingezet
              voor koeling.
            </p>
            <p>
              Goed WKO-beheer is essentieel om het systeem efficiënt,
              betrouwbaar en toekomstbestendig te laten werken. Bij Energie
              Dokter zorgen we dat uw WKO optimaal presteert door monitoring,
              onderhoud en advies op maat te combineren. Zo blijft uw gebouw
              comfortabel en energiezuinig, terwijl u profiteert van maximale
              besparingen.
            </p>
          </>
        }
      />
      <div className="md:mt-20 mt-10"></div>
      <div
        style={{ fontFamily: "Poppins" }}
        className="flex flex-col md:gap-5 gap-3 items-center relative"
      >
        <h1 className="md:text-3xl text-2xl font-extrabold text-[#254055] text-center md:mx-0 mx-3 ">
          Risico's die uw installatie
          <span className="text-[#81C713] "> geld </span>kosten
        </h1>
        <p className="text-[#4D4D4D] text-sm md:w-2/3 lg:w-1/2 px-5 text-center">
          Een slecht beheerde WKO-installatie kan leiden tot verschillende
          problemen. Zo kan er onbalans in het systeem ontstaan, stijgen de
          energiekosten, ontstaan comfortklachten voor gebruikers en kunnen
          storingen en foutmeldingen vaker voorkomen. Daarnaast bestaat het
          risico op aanschrijvingen of boetes van omgevingsdiensten wanneer de
          voorwaarden van de waterwetvergunning worden overtreden.
        </p>
        <p className="text-[#4D4D4D] text-sm md:w-2/3 lg:w-1/2 px-5 text-center">
          Het opsporen van de oorzaak van deze problemen is vaak een
          multidisciplinaire taak, waarbij technische, organisatorische,
          juridische en financiële aspecten allemaal een rol spelen. Zonder
          professioneel beheer blijft het volledige potentieel van uw
          WKO-installatie onbenut.
        </p>
        <Link
          href="/contact"
          className="bg-[#81C713] text-white font-semibold text-sm py-2 px-4 rounded-lg mt-2 w-fit  hover:bg-[#518103] transition-all"
        >
          Advies aanvragen
        </Link>
        <img
          src="/assets/services/icon4.svg"
          className="md:w-32 w-20 absolute top-0 left-0 -z-10"
        />
        <img
          src="/assets/services/icon3.svg"
          className="md:w-20 w-10 absolute bottom-0 right-0 -z-10"
        />
      </div>
      <div className="mt-20"></div>

      <ServicesCTA
        reverse={true}
        title={
          <div>
            <h1 className="text-[#254055] font-extrabold md:text-3xl text-2xl  flex flex-col  ">
              <span className="">
                Haal <span className="text-[#81C713] ">maximaal </span>
                rendement
              </span>
              <span className="text-nowrap">uit uw WKO-installatie</span>
            </h1>
          </div>
        }
        text={
          <>
            <p className="text-sm text-[#4D4D4D] ">
              Met professioneel WKO-beheer haalt u juist het maximale uit uw
              installatie. Uw systeem werkt efficiënter, energiekosten blijven
              laag, het binnenklimaat is stabiel en comfortabel en de levensduur
              van de installatie wordt verlengd. Door periodieke analyses,
              optimalisaties en real-time monitoring zien we precies waar
              verbeteringen mogelijk zijn, zodat u gericht kunt investeren en
              kunt genieten van optimale prestaties, rust en zekerheid.
            </p>
            <p className="text-sm text-[#4D4D4D] ">
              Onze aanpak is persoonlijk, snel en helder, zodat u altijd weet
              waar u aan toe bent.
            </p>
          </>
        }
        img="/assets/blogs/section-img5.png"
      />

      <div className="mt-20"></div>
      <div className="md:mt-20 mt-15"></div>

      <StepPlan activeBtn="WKO-beheer" />
      <Contact />
      <div className="md:mt-31 mt-10"></div>
      <ServicesStats text="Bij Energie Dokter combineren we technische kennis, ervaring en praktische oplossingen. Onze gecertificeerde adviseurs voeren grondige analyses uit, stellen een maatwerkplan op en monitoren uw WKO-installatie continu. Zo bent u verzekerd van optimale prestaties, inzicht in besparingsmogelijkheden en betrouwbare ondersteuning bij onderhoud en aanpassingen. Met Energie Dokter haalt u niet alleen een goed beheerde WKO-installatie in huis, maar ook rust, zekerheid en duurzame waarde voor uw gebouw." />
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
