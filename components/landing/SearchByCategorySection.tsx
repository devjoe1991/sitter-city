import { Search, ChevronRight, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

const categories = [
  {
    title: 'Hotel Childcare',
    subtitle: 'Start your search',
    bgColor: 'bg-pink-100',
    textColor: 'text-pink-900',
    icon: '🏨',
    illustration: '👩‍👧‍👦',
  },
  {
    title: 'Emergency Care',
    subtitle: 'Start your search',
    bgColor: 'bg-green-100',
    textColor: 'text-green-900',
    icon: '🚨',
    illustration: '⚡',
  },
  {
    title: 'Event Babysitting',
    subtitle: 'Start your search',
    bgColor: 'bg-blue-100',
    textColor: 'text-blue-900',
    icon: '🎉',
    illustration: '🎈',
  },
  {
    title: 'Overnight Care',
    subtitle: 'Start your search',
    bgColor: 'bg-yellow-100',
    textColor: 'text-yellow-900',
    icon: '🌙',
    illustration: '😴',
  },
];

const categoryTabs = [
  { name: 'Hotel Childcare', active: true },
  { name: 'Emergency Care', active: false },
  { name: 'Event Babysitting', active: false },
];

const infoCards = [
  { title: 'What is hotel childcare?', icon: <Info className="h-4 w-4" /> },
  { title: 'What is emergency care?', icon: <Info className="h-4 w-4" /> },
  { title: 'What is event babysitting?', icon: <Info className="h-4 w-4" /> },
  { title: 'What is overnight care?', icon: <Info className="h-4 w-4" /> },
];

const locations = [
  { name: 'Childcare in Central London', href: '#' },
  { name: 'Childcare in Kensington', href: '#' },
  { name: 'Childcare in Westminster', href: '#' },
  { name: 'Childcare in Mayfair', href: '#' },
  { name: 'Childcare in Canary Wharf', href: '#' },
  { name: 'Childcare in Shoreditch', href: '#' },
  { name: 'Childcare in Covent Garden', href: '#' },
  { name: 'Childcare in Notting Hill', href: '#' },
  { name: 'Childcare in Greenwich', href: '#' },
  { name: 'Childcare in Hampstead', href: '#' },
  { name: 'Childcare in Richmond', href: '#' },
  { name: 'Childcare in Wimbledon', href: '#' },
];

const SearchByCategorySection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto max-w-6xl">
        {/* Search by Category */}
        <div className="mb-16">
          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-pink-100 rounded-full p-3">
              <Search className="h-6 w-6 text-pink-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Search by category</h2>
          </div>

          {/* Category Tabs */}
          <div className="flex gap-2 mb-8">
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

          {/* Category Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {categories.map((category) => (
              <div
                key={category.title}
                className={`${category.bgColor} rounded-2xl p-6 cursor-pointer hover:shadow-lg transition-shadow group`}
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">{category.illustration}</div>
                  <h3 className={`text-xl font-bold ${category.textColor} mb-2`}>
                    {category.title}
                  </h3>
                  <p className={`text-sm ${category.textColor} opacity-80`}>
                    {category.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {infoCards.map((card, index) => (
              <button
                key={index}
                className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-left"
              >
                <div className="bg-blue-100 rounded-full p-2">
                  {card.icon}
                </div>
                <span className="text-sm font-medium text-gray-900">{card.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Searching in a specific location */}
        <div>
          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-pink-100 rounded-full p-3">
              <Search className="h-6 w-6 text-pink-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Searching in a specific location?</h2>
          </div>

          {/* Location Tabs */}
          <div className="flex gap-2 mb-8">
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

          {/* Location Links */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-4">
              {locations.map((location) => (
                <a
                  key={location.name}
                  href={location.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg hover:shadow-sm transition-shadow group"
                >
                  <span className="text-gray-900 font-medium">{location.name}</span>
                  <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchByCategorySection; 