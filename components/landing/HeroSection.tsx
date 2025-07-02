import Link from 'next/link';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative h-[600px] w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/hero-background.jpeg)' }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            London's Most Trusted Nannies,
            <br />
            On Demand
          </h1>
          <p className="max-w-2xl text-lg text-slate-200">
            Instantly connect with elite, professionally-vetted nannies for
            childcare you can rely on. Day or night.
          </p>
          <div className="mt-4">
            <Link href="/search">
              <Button size="lg">Find Your Nanny</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 