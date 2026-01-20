import Blog from "@/app/components/Blog";
import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Hero";
import ImagesSlider from "@/app/components/ImagesSlider";
import { blogPage } from "@/app/data/blogPage";
import animationData from "@/public/assets/animations/blog.json";

export default async function BlogDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <>
      <Hero
        animationData={animationData}
        displayBtns={false}
        desktopSectionId="section1"
        title="Blog"
        span={
          <span className="font-black md:text-4xl text-2xl text-[#254055] flex flex-col gap-2 ">
            {blogPage[Number(id) - 1].title}
          </span>
        }
        text=""
        // text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. At rem distinctio corrupti veniam magni dolor quibusdam, iste quidem nam dolorum non eligendi? Qui deserunt nobis rerum repudiandae, molestias pariatur harum."
      />
      <div id="section1"></div>
      <ImagesSlider images={blogPage[Number(id) - 1].imgs} />
      <div className="mx-5 md:mx-10 lg:mx-24 xl:mx-40">
        <div
          className="flex flex-col md:gap-10 gap-5 text-[#4D4D4D] mt-10 "
          style={{ fontFamily: "Poppins" }}
        >
          {blogPage[Number(id) - 1].sections.map((section, index) => (
            <div key={index}>
              <h1 className="text-[#254055] font-bold text-xl ">
                {section.title}
              </h1>
              <p className="text-sm">{section.text}</p>
            </div>
          ))}
        </div>

        <div
          className="md:mt-20 mt-10 flex md:gap-10 lg:gap-20"
          style={{ fontFamily: "Poppins" }}
        >
          <div className="flex flex-col gap-5 md:w-1/2">
            <div>
              <h1 className="text-[#254055] font-bold text-2xl ">
                {blogPage[Number(id) - 1].section.title}
              </h1>
              <p className="text-sm text-[#4D4D4D] ">
                {blogPage[Number(id) - 1].section.subtitle}
              </p>
            </div>
            {blogPage[Number(id) - 1].section.paragraphs.map(
              (paragraph, index) => (
                <p key={index} className="text-sm text-[#4D4D4D] ">
                  {paragraph}
                </p>
              ),
            )}
          </div>
          <img
            src={blogPage[Number(id) - 1].section.img}
            className="lg:w-[30%] md:w-[40%] xl:w-[20%] mt-5 h-full object-contain drop-shadow-[-15px_-15px_0px_#254055] md:block hidden"
          />
        </div>
      </div>

      <div className="md:mt-20 mt-15"></div>
      <Blog />
      <Footer />
    </>
  );
}
