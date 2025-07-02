import Link from 'next/link';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="text-center">
      <div className="flex flex-col items-center gap-6 pt-20 pb-16 md:py-28">
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          London's Most Trusted Nannies,
          <br />
          On Demand
        </h1>
        <p className="max-w-2xl text-lg text-foreground/80">
          Instantly connect with elite, professionally-vetted nannies for
          childcare you can rely on. Day or night.
        </p>
        <div className="mt-4">
          <Link href="/search">
            <Button size="lg">Find Your Nanny</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 