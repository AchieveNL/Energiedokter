import Blog from "@/app/components/Blog";
import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Hero";
import ImagesSlider from "@/app/components/ImagesSlider";
import Projects from "@/app/components/Projects";
import { projectPage } from "@/app/data/projectPage";
import animationData from "@/public/assets/animations/projecten.json";


export default async function BlogDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <>
      <Hero
        heroStyle="90px"
        animationData={animationData}
        displayBtns={false}
        desktopSectionId="section1"
        title="Projecten"
        span={
          <span className="font-black md:text-4xl text-2xl text-[#254055] flex flex-col gap-2 ">
            {projectPage[Number(id) - 1].title}
          </span>
        }
        text=""
      />
      <div id="section1"></div>
      <ImagesSlider images={projectPage[Number(id) - 1].imgs} />

      <div className="mx-5 md:mx-10 lg:mx-24 xl:mx-40 m-auto">
        <div
          className="flex flex-col md:gap-10 gap-5 text-[#4D4D4D] mt-10 w-full"
          style={{ fontFamily: "Poppins" }}
        >
          {projectPage[Number(id) - 1].sections.map((section, index) => (
            <div key={index}>
              <h1 className="text-[#254055] font-bold md:text-2xl text-xl">
                {section.title}
              </h1>
              {section.subtitle && (
                <p className="text-sm">{section.subtitle}</p>
              )}

              {/* Handle both string and array */}
              {Array.isArray(section.text) ? (
                section.text.map((text, textIndex) => (
                  <p key={textIndex} className="text-sm mt-4">
                    {text}
                  </p>
                ))
              ) : (
                <p className="text-sm mt-4">{section.text}</p>
              )}
            </div>
          ))}
        </div>

        <div
          className="md:mt-20 mt-10 flex md:gap-32 w-full"
          style={{ fontFamily: "Poppins" }}
        >
          <div className="flex flex-col gap-5 md:w-1/2">
            <div>
              <h1 className="text-[#254055] font-bold md:text-3xl text-2xl ">
                {projectPage[Number(id) - 1].section.title}
              </h1>
              <p className="text-sm text-[#4D4D4D] ">
                {projectPage[Number(id) - 1].section.subtitle}
              </p>
            </div>
            {id != "2" ? (
              projectPage[Number(id) - 1].section.paragraphs.map(
                (paragraph, index) => (
                  <p key={index} className="text-sm text-[#4D4D4D] ">
                    {paragraph}
                  </p>
                ),
              )
            ) : (
              <div>
                {projectPage[Number(id) - 1].section.paragraphs.map(
                  (paragraph, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="bg-[#4D4D4D] size-1 rounded-full"></div>
                      <p className="text-sm text-[#4D4D4D] ">{paragraph}</p>
                    </div>
                  ),
                )}
              </div>
            )}
          </div>
          <img
            src={projectPage[Number(id) - 1].section.img}
            className="w-[20%] drop-shadow-[-15px_-15px_0px_#254055] md:block hidden"
          />
        </div>
      </div>

      <div className="md:mt-20 mt-15"></div>
      <Projects />
      <div className="py-7"></div>
      <Footer />
    </>
  );
}
