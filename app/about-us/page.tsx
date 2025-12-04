import Iridescence from "../components/Iredescence";

export default function AboutPage() {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10 blur-lg">
        <Iridescence
          colorBalance={0}
          speed={0.3}
          amplitude={0}
          mouseReact={false}
        />
      </div>
      <h1 className="mt-60 text-4xl text-center">Over Ons</h1>
    </div>
  );
}
