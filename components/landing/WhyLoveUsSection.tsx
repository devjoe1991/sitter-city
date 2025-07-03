import { ShieldCheck, Star, Clock, Users } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: 'Elite, Vetted Nannies',
    description: 'Every nanny undergoes a rigorous multi-stage vetting process, including background checks and reference verification.',
  },
  {
    icon: <Star className="h-8 w-8 text-primary" />,
    title: '5-Star Hotel Specialists',
    description: 'Our nannies are experienced in providing exceptional care within luxury hotel environments, ensuring a seamless experience.',
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: 'On-Demand Availability',
    description: 'Need last-minute childcare? Book a trusted nanny instantly for spontaneous trips or unexpected schedule changes.',
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Peace of Mind',
    description: 'We provide comprehensive profiles, parent reviews, and real-time updates so you can relax and enjoy your time.',
  },
];

const WhyLoveUsSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why busy families love Sitter City
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We provide the trust, quality, and flexibility that professionals and travelers depend on.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="mt-2 text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyLoveUsSection; 