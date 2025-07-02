import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, CalendarCheck, Coffee } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: 'Search for a Nanny',
      description:
        'Enter your hotel or residence and the hours you need. Find elite nannies available for your stay.',
      bgColor: 'bg-secondary', // Mint cream
    },
    {
      icon: <CalendarCheck className="h-8 w-8 text-primary" />,
      title: 'Book from Anywhere',
      description:
        'Select your preferred nanny and book instantly via our secure platform—even before you land in London.',
      bgColor: 'bg-blue-100', // A light blue accent
    },
    {
      icon: <Coffee className="h-8 w-8 text-primary" />,
      title: 'Enjoy Your Trip',
      description:
        'Focus on your work or enjoy the city, knowing your children are in safe, professional hands right at your hotel.',
      bgColor: 'bg-yellow-100', // A light yellow accent
    },
  ];

  return (
    <section className="bg-muted/50 py-16 md:py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Getting Started is Easy
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <Card key={step.title} className={`${step.bgColor} border-0 shadow-lg`}>
              <CardHeader>
                <div className="mb-4">{step.icon}</div>
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection; 