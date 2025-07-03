import { ArrowRight, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';

const providers = [
  {
    name: 'Hilton Hotels',
    locations: '23 locations',
    logo: 'H',
    bgColor: 'bg-blue-50',
    logoColor: 'text-blue-600',
  },
  {
    name: 'Marriott International',
    locations: '31 locations',
    logo: 'M',
    bgColor: 'bg-red-50',
    logoColor: 'text-red-600',
  },
  {
    name: 'Radisson Blu',
    locations: '12 locations',
    logo: 'R',
    bgColor: 'bg-purple-50',
    logoColor: 'text-purple-600',
  },
  {
    name: 'The Ritz London',
    locations: '3 locations',
    logo: 'R',
    bgColor: 'bg-gold-50',
    logoColor: 'text-yellow-600',
  },
  {
    name: 'Premier Inn',
    locations: '45 locations',
    logo: 'P',
    bgColor: 'bg-purple-50',
    logoColor: 'text-purple-600',
  },
  {
    name: 'Intercontinental',
    locations: '8 locations',
    logo: 'I',
    bgColor: 'bg-green-50',
    logoColor: 'text-green-600',
  },
  {
    name: 'The Savoy',
    locations: '2 locations',
    logo: 'S',
    bgColor: 'bg-indigo-50',
    logoColor: 'text-indigo-600',
  },
  {
    name: 'Claridge\'s',
    locations: '1 location',
    logo: 'C',
    bgColor: 'bg-pink-50',
    logoColor: 'text-pink-600',
  },
  {
    name: 'The Langham',
    locations: '4 locations',
    logo: 'L',
    bgColor: 'bg-teal-50',
    logoColor: 'text-teal-600',
  },
  {
    name: 'Four Seasons',
    locations: '6 locations',
    logo: 'FS',
    bgColor: 'bg-amber-50',
    logoColor: 'text-amber-600',
  },
  {
    name: 'The Dorchester',
    locations: '3 locations',
    logo: 'D',
    bgColor: 'bg-rose-50',
    logoColor: 'text-rose-600',
  },
  {
    name: 'Shangri-La',
    locations: '2 locations',
    logo: 'SL',
    bgColor: 'bg-emerald-50',
    logoColor: 'text-emerald-600',
  },
];

const categoryTabs = [
  { name: 'Hotel Childcare', active: true },
  { name: 'Emergency Care', active: false },
  { name: 'Event Babysitting', active: false },
];

const SpecificProviderSection = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="bg-pink-100 rounded-full p-3">
              <Tag className="h-6 w-6 text-pink-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Looking for a specific provider?</h2>
          </div>
          
          {/* Category Tabs */}
          <div className="flex gap-2">
            {categoryTabs.map((tab) => (
              <button
                key={tab.name}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  tab.active
                    ? 'bg-pink-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* Provider Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {providers.map((provider) => (
            <div
              key={provider.name}
              className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow cursor-pointer group"
            >
              <div className="flex items-center gap-4">
                {/* Logo */}
                <div className={`${provider.bgColor} rounded-lg p-3 flex-shrink-0`}>
                  <span className={`text-xl font-bold ${provider.logoColor}`}>
                    {provider.logo}
                  </span>
                </div>
                
                {/* Provider Info */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-pink-600 transition-colors">
                    {provider.name}
                  </h3>
                  <p className="text-sm text-gray-600">{provider.locations}</p>
                </div>
                
                {/* Arrow */}
                <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-pink-600 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>

        {/* See All Button */}
        <div className="flex justify-start">
          <Button 
            variant="outline" 
            className="bg-green-100 border-green-200 text-green-800 hover:bg-green-200 hover:border-green-300"
          >
            See all providers
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SpecificProviderSection; 