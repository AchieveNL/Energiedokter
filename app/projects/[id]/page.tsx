import Blog from "@/app/components/Blog";
import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Hero";
import ImagesSlider from "@/app/components/ImagesSlider";
import { projectPage } from "@/app/data/projectPage";

export default async function BlogDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <>
      <Hero
        displayBtns={false}
        desktopSectionId="section1"
        title="Blog"
        span={
          <span className="font-black md:text-4xl text-2xl text-[#254055] flex flex-col gap-2 ">
            {projectPage[Number(id) - 1].title}
          </span>
        }
        text=""
        // text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. At rem distinctio corrupti veniam magni dolor quibusdam, iste quidem nam dolorum non eligendi? Qui deserunt nobis rerum repudiandae, molestias pariatur harum."
      />
      <div id="section1"></div>
      <ImagesSlider images={projectPage[Number(id) - 1].imgs} />
      <div
        className="flex flex-col md:gap-10 gap-5 text-[#4D4D4D] md:px-24 px-5 mt-10 "
        style={{ fontFamily: "Poppins" }}
      >
        {projectPage[Number(id) - 1].sections.map((section, index) => (
          <div key={index}>
            <h1 className="text-[#254055] font-bold text-xl ">
              {section.title}
            </h1>
            <p className="text-sm">{section.text}</p>
          </div>
        ))}
      </div>

      <div
        className="md:mt-20 mt-10 md:px-24 px-5 flex md:gap-32"
        style={{ fontFamily: "Poppins" }}
      >
        <div className="flex flex-col gap-5 md:w-1/2">
          <div>
            <h1 className="text-[#254055] font-bold text-2xl ">
              {projectPage[Number(id) - 1].section.title}
            </h1>
            <p className="text-sm text-[#4D4D4D] ">
              {projectPage[Number(id) - 1].section.subtitle}
            </p>
          </div>
          {projectPage[Number(id) - 1].section.paragraphs.map(
            (paragraph, index) => (
              <p key={index} className="text-sm text-[#4D4D4D] ">
                {paragraph}
              </p>
            )
          )}
        </div>
        <img
          src={projectPage[Number(id) - 1].section.img}
          className="w-[20%] drop-shadow-[-15px_-15px_0px_#254055] md:block hidden"
        />
      </div>
      <div className="md:mt-20 mt-15"></div>
      <Blog titleVisible={false} />
      <Footer />
    </>
  );
}
