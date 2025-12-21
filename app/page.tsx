import Image from "next/image";
import Nav from "./components/Nav";
import HomeHero from "./components/HomeHero";
import BrandList from "./components/BrandList";
import About from "./components/About";
import Diensten from "./components/Diensten";
import StepPlan from "./components/StepPlan";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <HomeHero />
      <BrandList />
      <About />
      <div className="md:hidden block py-6"></div>
      <Diensten />
      <StepPlan />
      <Contact />
      <div className="md:py-10 py-7 "></div>
      <Faq />
      <div className="py-3 "></div>
      <Blog />
      <Footer />
    </>
  );
}
