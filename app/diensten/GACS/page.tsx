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
import AnimatedBg from "@/app/components/AnimatedBg";

export default function Service4() {
  return (
    <>
      <Hero
        animationData={animationData}
        desktopSectionId="section1"
        title="Diensten"
        span={
          <span className="font-black md:text-4xl text-2xl text-[#254055] flex flex-col gap-3 ">
            <span> GACS </span>
          </span>
        }
        text="Met GACS (Gebouw Automatisering en Controle Systemen) optimaliseren wij de prestaties van uw gebouw. Zo krijgt u grip op energieverbruik, comfort en wettelijke verplichtingen — volledig inzichtelijk, volledig onder controle."
      />
      <div id="section1" className="py-2"></div>
      <div className="px-5 min-[768px]:px-20 min-[1280px]:px-24 min-[1700px]:px-50 min-[2000px]:px-80">
        <ServiceOverview
          title={
            <h1 className="md:text-3xl text-2xl font-extrabold text-[#254055] flex flex-col ">
              <span>
                Wat is<span className="text-[#81C713]"> GACS? </span>
              </span>
            </h1>
          }
          img="/assets/services/img3.webp"
          spans={
            <>
              <p>
                Gebouw Automatisering en Controle Systemen (GACS) zijn slimme
                systemen die het functioneren van een gebouw monitoren,
                aansturen en optimaliseren. Denk aan het automatisch regelen van
                verwarming, koeling, ventilatie, verlichting en de
                binnenmilieukwaliteit
              </p>
              <p>
                Met GACS kun je als gebouweigenaar of -beheerder kosten
                besparen, het comfort verbeteren, energieverbruik verlagen en je
                vastgoed toekomstbestendig maken. Bovendien speelt GACS een
                belangrijke rol in het behalen van duurzaamheidsdoelstellingen.
              </p>
              <p>
                De noodzaak groeit: vanaf 2026 moeten gebouwen voldoen aan de
                Europese EPBD-eisen, waaronder verplichte monitoring en de Smart
                Readiness Indicator (SRI). GACS is daarmee niet alleen een
                slimme keuze, maar in veel gevallen ook een wettelijke
                verplichting.
              </p>
            </>
          }
        />
        <div className="md:mt-10 mt-5 p-1"></div>

        <ServicesCTA
          reverse={true}
          title={
            <div>
              <h1 className="text-[#254055] font-extrabold md:text-3xl text-2xl flex flex-col  ">
                <span className="flex gap-1">
                  De grootste{" "}
                  <span className="text-[#81C713] ">valkuilen </span>{" "}
                  <span className="xl:block hidden">zonder</span>
                </span>
                <span className="flex gap-1">
                  <span className="xl:hidden block">zonder</span>
                  <span>goed GACS-beheer</span>
                </span>
              </h1>
            </div>
          }
          text={
            <>
              <p className="text-sm text-[#4D4D4D] ">
                Veel organisaties zien dat hun gebouwtechniek niet optimaal
                functioneert, maar hebben geen compleet inzicht in wat er
                misgaat. Zonder een goed ingericht GACS ontstaan er problemen
                zoals een te hoog energieverbruik, slechte luchtkwaliteit of
                comfortklachten.
              </p>
              <p className="text-sm text-[#4D4D4D] ">
                Daarnaast blijkt vaak dat systemen niet goed op elkaar zijn
                afgestemd, data niet wordt gemonitord of instellingen jarenlang
                niet zijn geoptimaliseerd. Dit leidt tot onnodige kosten,
                inefficiënte installaties en risico's rondom niet voldoen aan
                wet- en regelgeving, zoals de EPBD-verplichtingen.
              </p>
            </>
          }
          img="/assets/blogs/section-img4.png"
        />
      </div>
      <div className="mt-20"></div>

      <div
        style={{ fontFamily: "Poppins" }}
        className="flex flex-col md:gap-5 gap-3 items-center relative"
      >
        <h1 className="md:text-3xl text-2xl font-extrabold text-[#254055] text-center md:mx-0 mx-2 ">
          Dit is wat u wél wilt:{" "}
          <span className="text-[#81C713] ">
            grip<span className="text-[#254055]">,</span> comfort{" "}
          </span>
          en <span className="text-[#81C713]"> zekerheid</span>
        </h1>
        <p className="text-[#4D4D4D] text-sm md:w-1/2 px-5 text-center">
          Met een goed ingericht en optimaal beheerd GACS krijg je volledige
          grip op de prestaties van je gebouw. Je profiteert van lagere
          energiekosten, een gezond en comfortabel binnenklimaat en een
          toekomstbestendig pand dat voldoet aan de Europese eisen.
        </p>
        <p className="text-[#4D4D4D] text-sm md:w-1/2 px-5 text-center">
          GACS biedt real-time inzicht in gedrag, verbruik en
          binnenmilieukwaliteit, waardoor je direct kunt bijsturen en
          verbeteringen kunt doorvoeren. Het resultaat is een slimmer gebouw dat
          duurzaam presteert en bijdraagt aan waardestijging van het vastgoed.
        </p>
        <Link
          href="/contact"
          className="bg-[#81C713] text-white font-semibold text-sm py-2 px-4 rounded-lg mt-5 w-fit  hover:bg-[#518103] transition-all"
        >
          Advies aanvragen
        </Link>
        <img
          src="/assets/services/icon1.svg"
          className="md:w-32 w-20 absolute bottom-0 left-0 -z-10"
        />
        <img
          src="/assets/services/icon2.svg"
          className="md:w-20 w-10 absolute top-0 right-0 -z-10"
        />
      </div>

      <div className="md:mt-20 mt-15"></div>

      <StepPlan activeBtn="GACS" />
      <Contact />
      <div className="md:mt-31 mt-10"></div>
      <ServicesStats text="Energie Dokter combineert technische expertise met een integrale blik op wetgeving, gebouwbeheer en duurzaamheid. Wij fungeren als spin in het web tussen gebouweigenaar, beheerder en technici, waardoor we niet alleen technische optimalisaties realiseren, maar ook organisatorische afstemming en blijvende prestaties." />
      <div className="md:py-10 py-7"></div>

      <Faq />
      <Projects />
      <div className="bg-cover py-10 mt-10 relative ">
        <div className="inset-0 absolute -z-10">
          <AnimatedBg />
        </div>
        <Reviews />
      </div>
      <ContactSection />
      <Footer />
    </>
  );
}
