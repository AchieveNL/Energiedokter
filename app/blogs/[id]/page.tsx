import Blog from "@/app/components/Blog";
import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Hero";
import ImagesSlider from "@/app/components/ImagesSlider";
import { cards } from "@/app/data/blogs";

const images = [
  "/assets/blogs/img7.svg",
  "/assets/blogs/img8.svg",
  "/assets/blogs/img9.svg",
  "/assets/blogs/img7.svg",
  "/assets/blogs/img8.svg",
  "/assets/blogs/img9.svg",
];

export default async function BlogDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <>
      <Hero
        title="Blog"
        span={
          <span className="font-black md:text-4xl text-2xl text-[#254055] flex flex-col gap-2 ">
            Lorem Ipsum dolor sit amet
          </span>
        }
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. At rem distinctio corrupti veniam magni dolor quibusdam, iste quidem nam dolorum non eligendi? Qui deserunt nobis rerum repudiandae, molestias pariatur harum."
      />
      <ImagesSlider images={images} />
      <div
        className="flex flex-col gap-5 text-[#4D4D4D] md:px-24 px-5 mt-10 "
        style={{ fontFamily: "Poppins" }}
      >
        <div>
          <h1 className="text-[#254055] font-bold text-xl ">Lorem ipsum</h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, officia veniam, eveniet nihil iure eaque similique.
          </p>
        </div>
        <p className="text-sm">
          Et iure sint id minus itaque et harum commodi id dolore facilis sit
          libero omnis. Et recusandae magnam ea voluptates accusantium eos quasi
          Quis. Sed soluta dolores 33 possimus perspiciatis in minus doloremque
          ea exercitationem voluptatum et galisum exercitationem est voluptas
          alias et saepe dolor. Vel explicabo iste a enim quam id laboriosam
          omnis ut totam quidem.
        </p>
        <p className="text-sm">
          Aut quisquam dicta sit quia voluptatum ut natus consequatur sed nihil
          dicta sed delectus esse ad nemo consequatur et magni natus.
        </p>
      </div>
      
      <div
        className="md:mt-20 mt-10 md:px-24 px-5 flex md:gap-32"
        style={{ fontFamily: "Poppins" }}
      >
        <div className="flex flex-col gap-5 md:w-1/2">
          <div>
            <h1 className="text-[#254055] font-bold text-2xl ">
              Lorem ipsum <span className="text-[#81C713] ">dolor</span> sit
              amet
            </h1>
            <p className="text-sm text-[#4D4D4D] ">
              Laat jouw woning energiezuiniger, comfortabeler en waardevoller
              worden
            </p>
          </div>
          <p className="text-sm text-[#4D4D4D] ">
            Lorem ipsum dolor sit amet. Sed repudiandae ipsum ut consequatur
            maiores et molestiae quod sed molestiae mollitia aut molestiae
            consequuntur sed saepe modi. Qui eveniet voluptates qui quia
            accusantium rem similique dignissimos id obcaecati exercitationem ut
            eaque harum non rerum quia sed enim aspernatur.
          </p>
          <p className="text-sm text-[#4D4D4D] ">
            Ut cupiditate consequatur est veniam provident est consequatur ipsum
            non dolorum delectus ab aspernatur placeat. Aut quia accusamus et
            consequuntur dolore et accusantium provident non iste omnis et
            laborum nihil et odit incidunt rem accusamus asperiores.
          </p>
        </div>
        {/* <img src="/assets/blogs/section-img.svg" className="w-[20%]" /> */}
        <img
          src="/assets/blogs/section-img.svg"
          className="w-[20%] drop-shadow-[-15px_-15px_0px_#254055] md:block hidden"
        />
      </div>

      <Blog titleVisible={false} />
      <Footer />
    </>
  );
}
