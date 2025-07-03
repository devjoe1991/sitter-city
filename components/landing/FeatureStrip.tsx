import { Calendar, Shield, Search } from 'lucide-react';

const features = [
  {
    icon: <Calendar className="h-8 w-8 text-pink-500" />,
    title: 'Availability & Pricing',
    description: 'The only directory to showcase care services with confirmed availability and detailed pricing.',
  },
  {
    icon: <Shield className="h-8 w-8 text-pink-500" />,
    title: 'Quality Assured',
    description: 'Every care home or home care service listed on Sitter City is regulated.',
  },
  {
    icon: <Search className="h-8 w-8 text-pink-500" />,
    title: 'The Whole Market',
    description: 'Search the whole market including every registered care home and home care service in London.',
  },
];

const FeatureStrip = () => {
  return (
    <section className="bg-pink-50 py-12">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="flex items-start gap-4">
              <div className="flex-shrink-0">{feature.icon}</div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureStrip; 