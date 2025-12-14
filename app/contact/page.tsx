import ContactSection from "../components/ContactSection";
import DienstenSection from "../components/DienstenSection";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Map from "../components/Map";

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Contact"
        span={
          <span className="font-black md:text-4xl text-2xl text-[#254055] flex flex-col gap-3 ">
            <span>Jouw stap naar</span>

            <span>
              <span className="text-[#81C713]"> duurzaam</span> energie
            </span>
          </span>
        }
        text="We staan klaar om u te helpen. Neem contact op en ontdek hoe we samen uw gebouw toekomstbestendig kunnen maken."
      />
      <ContactSection />
      <iframe
        src="https://www.google.com/maps?q=Leersum,Netherlands&z=14&output=embed"
        width="100%"
        height="400"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <DienstenSection />
      <Footer />
    </>
  );
}
