import Hero from "@/app/components/Hero";

export default function Service1() {
  return (
    <>
      <Hero
        title="Diensten"
        span={
          <span className="font-black md:text-4xl text-2xl text-[#254055] flex flex-col gap-3 ">
            <span> Energielabels bestaande</span>
            <span>woningen en utiliteit</span>
          </span>
        }
        text="Krijg inzicht in de energieprestatie van uw bestaande kantoor, school of winkel en voldoe aan de wettelijke energielabelplicht. Zo verlaagt u energiekosten en versterkt u het duurzame imago van uw gebouw."
      />
    </>
  );
}
