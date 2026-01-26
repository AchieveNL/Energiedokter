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
import StepPlan from "@/app/components/StepPlan";
import Link from "next/link";
import animationData from "@/public/assets/animations/trainingen.json";
import AnimatedBg from "@/app/components/AnimatedBg";

export default function Service6() {
  return (
    <>
      <Hero
        heroStyle="50px"
        animationData={animationData}
        desktopSectionId="section1"
        title="Diensten"
        span={
          <span className="font-black md:text-4xl text-2xl text-[#254055] flex flex-col gap-3 ">
            <span> Trainingen </span>
          </span>
        }
        text="Vergroot uw kennis over energieprestaties, regelgeving en duurzaamheid met onze praktijkgerichte trainingen. Energie Dokter biedt heldere opleidingen voor professionals die up-to-date willen blijven in een veranderende energiemarkt."
      />
      <div id="section1" className="py-2"></div>
      <div className="px-5 min-[768px]:px-20 min-[1280px]:px-24 min-[1700px]:px-50 min-[2000px]:px-80">
        <ServiceOverview
          title={
            <h1 className="md:text-3xl text-2xl font-extrabold text-[#254055] flex flex-col ">
              <span>
                Wat zijn onze
                <span className="text-[#81C713]"> trainingen? </span>
              </span>
            </h1>
          }
          img="/assets/services/img5.webp"
          spans={
            <>
              <p>
                Bij Energie Dokter bieden we praktijkgerichte trainingen op het
                gebied van energieadvies, duurzaam bouwen en energielabels. Ze
                zijn geschikt voor professionals, bedrijven en particulieren die
                hun kennis willen vergroten en direct toepasbare vaardigheden
                willen ontwikkelen.
              </p>
              <p>
                Onze trainingen zijn alles behalve droge ‘zendverhalen’. Door
                goed in te schatten wat een groep nodig heeft, houden we de
                aandacht vast en creëren we een levendige, dynamische sfeer. We
                combineren theorie met praktijk en zorgen dat deelnemers actief
                meedoen, oefenen en meteen toepassen wat ze leren.
              </p>
              <p>
                Onze aanpak is persoonlijk, snel en helder — jij weet precies
                waar je aan toe bent.
              </p>
            </>
          }
        />
      </div>

      <div className="md:mt-20 mt-10 p-1"></div>

      <div
        style={{ fontFamily: "Poppins" }}
        className="flex flex-col md:gap-5 gap-3 items-center relative"
      >
        <h1 className="md:text-3xl text-2xl font-extrabold text-[#254055] text-center ">
          De gevolgen van
          <span className="text-[#81C713]"> onvoldoende </span>
          kennis
        </h1>
        <p className="text-[#4D4D4D] text-sm md:w-2/3 lg:w-1/2 px-5 text-center">
          Zonder de juiste kennis en vaardigheden lopen medewerkers en
          opdrachtgevers het risico verkeerde keuzes te maken bij het beheer van
          gebouwen. Energiebesparende maatregelen worden over het hoofd gezien,
          processen verlopen inefficiënt en fouten leiden tot hogere kosten en
          verspilling van tijd. Het gebrek aan training beperkt het potentieel
          van uw team en kan de duurzaamheidsdoelen van uw organisatie of
          project ernstig in gevaar brengen. Zo blijft waardevolle kennis
          onbenut en blijft energie-efficiëntie een uitdaging.
        </p>
        <Link
          href="/contact"
          className="bg-[#81C713] text-white font-semibold text-sm py-2 px-4 rounded-lg mt-5 w-fit hover:bg-[#518103] transition-all "
        >
          Advies aanvragen
        </Link>
        <img
          src="/assets/services/icon6.svg"
          className="md:w-60 w-40 absolute md:top-0 bottom-0 md:translate-y-1 -translate-y-1/2 left-0 -z-10"
        />
        <img
          src="/assets/services/icon7.svg"
          className="md:w-28 w-20 absolute md:top-0 top-10 md:right-10 right-5 -z-10"
        />
      </div>
      <div className="md:mt-25 mt-20"></div>
      <div className="px-5 min-[768px]:px-20 min-[1280px]:px-24 min-[1700px]:px-50 min-[2000px]:px-80">
        <ServicesCTA
          reverse={true}
          title={
            <div>
              <h1 className="text-[#254055] font-extrabold md:text-3xl text-2xl flex flex-col  ">
                <span className="flex gap-1">
                  Zo haalt uw team het
                  <span className="text-[#81C713] xl:block hidden">
                    maximale
                  </span>
                </span>
                <span className="text-nowrap">
                  <span className="text-[#81C713] xl:hidden block">
                    maximale <span className="text-[#254055]">uit</span>
                  </span>
                  <span className="xl:inline hidden">uit </span>energiebeheer
                </span>
              </h1>
            </div>
          }
          text={
            <>
              <p className="text-sm text-[#4D4D4D] ">
                Met de juiste training beschikken uw medewerkers en
                opdrachtgevers over de kennis en vaardigheden om gebouwen
                energiezuinig en duurzaam te beheren. Ze herkennen
                energiebesparende maatregelen, optimaliseren processen en nemen
                geïnformeerde beslissingen. Dit leidt tot lagere kosten, hogere
                efficiëntie en een duurzaam resultaat dat direct waarde toevoegt
                aan uw organisatie of project. Goed opgeleide teams werken met
                vertrouwen, voorkomen fouten en zorgen dat uw energie- en
                duurzaamheidsdoelen daadwerkelijk worden bereikt.
              </p>
            </>
          }
          img="/assets/blogs/section-img5.png"
        />
      </div>

      <div className="md:mt-20 mt-15"></div>

      <StepPlan activeBtn="Trainingen" />
      <Contact />
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
