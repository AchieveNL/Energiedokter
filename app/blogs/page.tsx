import Blog from "../components/Blog";
import DienstenSection from "../components/DienstenSection";
import Footer from "../components/Footer";
import GridView from "../components/GridView";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import { cards } from "../data/blogs";

export default function BlogsPage() {
  return (
    <>
      <Hero
        title="Blog"
        span={
          <span className="font-black md:text-4xl text-2xl text-[#254055] flex flex-col gap-2 ">
            <span>
              Onze <span className="text-[#81C713]">uitgelichte</span>
            </span>
            <span>blog content</span>
          </span>
        }
        text="Blijf op de hoogte van de nieuwste ontwikkelingen en laat u inspireren door onze inzichten en projecten op het gebied van energie en duurzaamheid."
      />
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
      <div className="md:hidden block ">
        <Blog linkVisible={false} />
      </div>
      <DienstenSection/>
      <Footer/>
    </>
  );
}
