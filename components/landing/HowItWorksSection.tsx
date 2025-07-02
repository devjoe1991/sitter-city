import { Search, CalendarCheck, Coffee } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <Search className="h-10 w-10 text-primary" />,
      title: '1. Tell Us Your Location',
      description:
        'Enter your hotel or residence and the hours you need. Find elite nannies available for your stay.',
    },
    {
      icon: <CalendarCheck className="h-10 w-10 text-primary" />,
      title: '2. Book from Anywhere',
      description:
        'Select your preferred nanny and book instantly via our secure platform—even before you land in London.',
    },
    {
      icon: <Coffee className="h-10 w-10 text-primary" />,
      title: '3. Enjoy Your Trip',
      description:
        'Focus on your work or enjoy the city, knowing your children are in safe, professional hands right at your hotel.',
    },
  ];

  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="container max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Childcare in 3 Simple Steps
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Designed for the modern, traveling family.
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