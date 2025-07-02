import { Search, CalendarCheck, Coffee } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <Search className="h-10 w-10 text-primary" />,
      title: '1. Search for a Nanny',
      description:
        'Use our simple search to find elite, vetted nannies available for your required date and time.',
    },
    {
      icon: <CalendarCheck className="h-10 w-10 text-primary" />,
      title: '2. Book with Confidence',
      description:
        'Select your preferred nanny and send a booking request. All payments are handled securely on the platform.',
    },
    {
      icon: <Coffee className="h-10 w-10 text-primary" />,
      title: '3. Relax & Enjoy',
      description:
        'Your booking is confirmed! You can relax, knowing your children are in safe, professional hands.',
    },
  ];

  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="container max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Getting trusted childcare is as easy as one, two, three.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-background">
                {step.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
              <p className="text-foreground/80">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection; 