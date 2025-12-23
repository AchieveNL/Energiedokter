import DienstenSection from "../components/DienstenSection";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import  animationData  from "@/public/assets/animaions/faq.json";
export default function FaqPage() {
  return (
    <>
      <Hero
      animationData={animationData}
        desktopSectionId="faq1"
        title="FAQ"
        span={
          <span className="font-black md:text-4xl text-2xl text-[#254055] flex flex-col gap-2 ">
            <span>Alles wat je moet</span>
            <span className="text-[#81C713]">weten</span>
          </span>
        }
        text="Heeft u vragen? Op deze pagina beantwoorden we de meest voorkomende vragen over onze aanpak, diensten en projecten."
      />
      <div id="faq1" className="md:pt-20 pt-10">
        <Faq />
      </div>
      <DienstenSection />
      <Footer />
    </>
  );
}
