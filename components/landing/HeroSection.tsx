import SearchSection from './SearchSection';

const HeroSection = () => {
  return (
    <section className="relative bg-[#FFF0F5] py-32 md:py-40">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/hero-background.jpeg')" }}
      ></div>
      <div className="container relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl">
          London's Most Trusted Nannies,
          <br />
          On Demand
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          Elite, vetted nannies for busy professionals and traveling families staying in London hotels. Book instantly with confidence.
        </p>
        <SearchSection />
      </div>
    </section>
  );
};

export default HeroSection; 