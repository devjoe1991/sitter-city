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
            Your Trusted Nanny,
            <br />
            Right at Your Hotel
          </h1>
          <p className="max-w-2xl text-lg text-slate-200">
            For international professionals and traveling families. We provide elite,
            vetted nannies directly to your hotel or residence in London.
          </p>
          <div className="mt-4">
            <Link href="/search">
              <Button size="lg">Arrange Your Childcare</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 