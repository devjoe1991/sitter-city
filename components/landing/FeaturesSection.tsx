import { ShieldCheck, CalendarDays, Wallet } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
      title: 'Total Peace of Mind',
      description:
        "Trust is paramount, especially in a new city. Every nanny undergoes a rigorous vetting process so you can be confident in your choice.",
    },
    {
      icon: <CalendarDays className="h-10 w-10 text-primary" />,
      title: 'On-Demand & In-Advance',
      description:
        'Our platform makes it effortless to arrange childcare from anywhere, whether you are planning months ahead or need a nanny tomorrow.',
    },
    {
      icon: <Wallet className="h-10 w-10 text-primary" />,
      title: 'Secure & Cashless',
      description:
        "Don't worry about local currency. All payments are handled securely and seamlessly through the platform after your booking is complete.",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Peace of Mind for Your London Trip
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            A premium experience built on trust and convenience for professionals.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-muted">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
              <p className="text-foreground/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 