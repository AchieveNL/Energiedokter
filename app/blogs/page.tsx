import Blog from "../components/Blog";
import DienstenSection from "../components/DienstenSection";
import Footer from "../components/Footer";
import GridView from "../components/GridView";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import { cards } from "../data/blogs";
import animationData from "@/public/assets/animations/blog.json";

export default function BlogsPage() {
  return (
    <>
      <Hero
        animationData={animationData}
        desktopSectionId="blogs1"
        mobileSectionId="blogs2"
        title="Blog"
        span={
          <span className="font-black md:text-4xl text-2xl text-[#254055] flex md:flex-row flex-col gap-2 ">
            <span>
              Onze <span className="text-[#81C713]">uitgelichte</span>
            </span>
            <span>blog content</span>
          </span>
        }
        text="Blijf op de hoogte van de nieuwste ontwikkelingen en laat u inspireren door onze inzichten en projecten op het gebied van energie en duurzaamheid."
      />
      {/* <div id="blogs1">
        <GridView
          sectionTitle={
            <SectionTitle
              title="Blog"
              span={
                <div className="text-[#254055] md:text-4xl text-2xl font-extrabold text-center ">
                  Onze
                  <span className="text-[#81C713] "> uitgelichte</span>
                  <br /> blog content
                </div>
              }
            />
          }
          cards={cards}
        />
      </div> */}

      <div id="blogs1">
        <Blog linkVisible={false} />
      </div>
      <DienstenSection />
      <Footer />
    </>
  );
}
