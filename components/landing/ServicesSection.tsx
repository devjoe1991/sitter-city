import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const categories = [
  { title: 'Hotel Childcare', href: '#' },
  { title: 'Emergency Care', href: '#' },
  { title: 'Event Babysitting', href: '#' },
];

const services = [
  {
    title: 'Book urgent childcare',
    description: 'Need childcare urgently? Submit a free care request via Sitter City and get immediate responses from local nannies who can support your childcare needs today.',
    buttonText: 'Arrange urgent care',
    bgColor: 'bg-orange-100',
    textColor: 'text-orange-900',
  },
  {
    title: 'Free Expert Support',
    description: 'Sitter City\'s team of Care Experts offer a completely free support service, to help you find, book and understand childcare.',
    buttonText: 'Contact a Care Expert',
    bgColor: 'bg-blue-100',
    textColor: 'text-blue-900',
  },
  {
    title: 'Free personalised shortlist',
    description: 'Need a little extra help? Get your care search off to a great start by requesting a free shortlist of recommended nannies from Sitter City\'s team of care experts.',
    buttonText: 'Request free shortlist',
    bgColor: 'bg-green-100',
    textColor: 'text-green-900',
    hasImage: true,
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto max-w-6xl">
        {/* Category Cards */}
        <div className="mb-16 grid gap-4 md:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.title}
              className="group flex cursor-pointer items-center justify-between rounded-lg border-2 border-gray-200 p-6 transition-all hover:border-pink-300"
            >
              <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
              <ArrowRight className="h-6 w-6 text-pink-400 transition-transform group-hover:translate-x-1" />
            </div>
          ))}
        </div>

        {/* Service Cards Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* First card - spans full width on mobile, half on desktop */}
          <div className={`rounded-2xl p-8 ${services[0].bgColor}`}>
            <h3 className={`text-2xl font-bold ${services[0].textColor} mb-4`}>
              {services[0].title}
            </h3>
            <p className={`${services[0].textColor} mb-6 opacity-80`}>
              {services[0].description}
            </p>
            <Button className="bg-gray-900 text-white hover:bg-gray-800">
              {services[0].buttonText} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Second card */}
          <div className={`rounded-2xl p-8 ${services[1].bgColor}`}>
            <h3 className={`text-2xl font-bold ${services[1].textColor} mb-4`}>
              {services[1].title}
            </h3>
            <p className={`${services[1].textColor} mb-6 opacity-80`}>
              {services[1].description}
            </p>
            <Button className="bg-gray-900 text-white hover:bg-gray-800">
              {services[1].buttonText} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Third card - spans full width */}
          <div className={`lg:col-span-2 rounded-2xl p-8 ${services[2].bgColor} relative overflow-hidden`}>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className={`text-2xl font-bold ${services[2].textColor} mb-4`}>
                  {services[2].title}
                </h3>
                <p className={`${services[2].textColor} mb-6 opacity-80`}>
                  {services[2].description}
                </p>
                <Button className="bg-gray-900 text-white hover:bg-gray-800">
                  {services[2].buttonText} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="hidden lg:block">
                {/* Placeholder for phone mockup image */}
                <div className="bg-white rounded-lg p-4 shadow-lg">
                  <div className="bg-gray-100 rounded h-64 flex items-center justify-center">
                    <span className="text-gray-500">App Preview</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 