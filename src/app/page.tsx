import Hero from "@/components/Hero";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="bg-black">
        <div className="relative w-full aspect-[21/9] sm:aspect-[16/9] md:aspect-[14/7] lg:aspect-[12/5] overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/singature.mp4"
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            poster="/hex-grid.png"
          />
        </div>
      </section>
      <Skills />
    </main>
  );
}
