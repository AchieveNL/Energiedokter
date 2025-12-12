import SectionTitle from "./SectionTitle";

export default function ContactSection() {
  const TextInput = ({
    label,
    placeholder,
  }: {
    label: string;
    placeholder: string;
  }) => (
    <div className="flex flex-col gap-2 w-full mb-4">
      <label htmlFor="" className="text-[#4D4D4D] font-bold ">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="border-[#D0D0D0] outline-0 border-2 rounded-xl p-2 pl-4 w-full "
      />
    </div>
  );
  return (
    <div
      className="flex flex-col items-center md:my-32 my-20"
      style={{ fontFamily: "Poppins" }}
    >
      <SectionTitle
        title="Contact"
        span={
          <div className="text-[#254055] md:text-4xl text-2xl font-extrabold text-center mx-5 ">
            Klaar om te
            <span className="text-[#81C713] "> beginnen?</span>
            <br />
            Wij ook!
          </div>
        }
      />
      <p className="text-[#4D4D4D] text-center md:text-lg text-sm md:w-1/2 mt-5 md:mx-0 mx-5 ">
        Of je nu al een concreet plan hebt of nog in de brainstormfase zit: wij
        denken graag met je mee. Laat je gegevens achter en we nemen zo snel
        mogelijk contact met je op om samen te kijken naar de mogelijkheden
      </p>
      {/* Contact form */}
      <div className="md:mt-20 mt-10 w-full md:px-24 px-5">
        <div className="flex gap-10 justify-center md:text-base text-sm w-full border-2 border-[#E3E3E3] rounded-tl-[64px] rounded-br-[64px]">
          <img
            src="/assets/projects/contact.svg"
            className="h-full w-1/2 md:block hidden"
            alt=""
          />
          <div className="md:w-2/3 w-full pt-5 md:pr-5 md:px-0 px-7">
            <h1 className="text-[#81C713] font-bold text-lg mb-5 ">
              Stuur ons een bericht
            </h1>
            <TextInput
              label="Vul uw volledige naam in"
              placeholder="Lorem ipsum"
            />
            <TextInput
              label="Vul uw e-mailadres in"
              placeholder="Lorem ipsum"
            />
            <TextInput
              label="Vul uw telefoonnummer in"
              placeholder="Lorem ipsum"
            />
            <div className="flex flex-col gap-2 w-full mb-4">
              <label htmlFor="" className="text-[#4D4D4D] font-bold ">
                Bericht
              </label>
              <textarea
                rows={4}
                placeholder="Lorem ipsum"
                className=" border-[#D0D0D0] outline-0 border-2 rounded-xl p-2 pl-4 w-full "
              ></textarea>
              <div>
                <input type="radio" name="" id="" />
                <label htmlFor="" className="text-[#A1A1A1] ml-3">
                  Lorem ipsum
                </label>
              </div>
              <button className="text-[#F6F6F6] bg-[#81C713] w-fit p-2 px-4 rounded-lg mt- ">
                Verstuur
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
