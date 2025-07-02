import { ShieldCheck, CalendarDays, Wallet } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
      title: 'Elite Vetting Process',
      description:
        'Peace of mind comes standard. Every nanny on our platform undergoes a rigorous multi-stage vetting process, including background checks and personal interviews.',
    },
    {
      icon: <CalendarDays className="h-10 w-10 text-primary" />,
      title: 'Seamless Booking',
      description:
        'Our modern, intuitive platform makes finding and booking the perfect nanny for your schedule effortless, whether for a last-minute need or a future date.',
    },
    {
      icon: <Wallet className="h-10 w-10 text-primary" />,
      title: 'Secure & Cashless',
      description:
        'Forget about last-minute cash withdrawals. All payments are handled securely and seamlessly through the platform after your booking is complete.',
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Why Sitter City?
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            A premium experience built on trust and convenience.
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