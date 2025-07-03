import { Play, Calendar, Shield, Search, Home, Sliders } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: <Calendar className="h-8 w-8 text-pink-500" />,
    title: 'Availability',
    description: 'Sitter City\'s search engine allows families to navigate which care services have availability and which do not due to being at full capacity.',
  },
  {
    icon: <Shield className="h-8 w-8 text-pink-500" />,
    title: 'Free 5* Care Support',
    description: 'Need a helping hand? Benefit from hundreds of free guides and on-demand support from Sitter City\'s team of care experts.',
  },
  {
    icon: <Search className="h-8 w-8 text-pink-500" />,
    title: 'Pricing Transparency',
    description: 'Benefit from full transparency with Sitter City by being able to request detailed pricing information for every service listed.',
  },
  {
    icon: <Sliders className="h-8 w-8 text-pink-500" />,
    title: 'Search Filters',
    description: 'On a budget? Have a pet? Sitter City\'s search filters allows families to quickly filter care services to meet their loved one\'s unique circumstances.',
  },
  {
    icon: <Home className="h-8 w-8 text-pink-500" />,
    title: 'The Whole Market',
    description: 'Confidently search the whole market with Sitter City including every registered care home and home care service in London.',
  },
];

const WhyFamiliesLoveSection = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why do families love Sitter City?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Proudly rated "Excellent" on Trustpilot, Sitter City is London's most trusted childcare directory and helps over 2,000 families find care every month.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Video Testimonial */}
          <div className="relative">
            <div className="bg-gray-200 rounded-2xl overflow-hidden relative min-h-[400px]">
              {/* Placeholder for video thumbnail */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-white rounded-full p-4 mb-4 inline-block">
                    <span className="text-2xl">👩‍👧‍👦</span>
                  </div>
                  <p className="text-gray-700 font-medium">Happy Family Testimonial</p>
                </div>
              </div>
              
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white rounded-full p-4 cursor-pointer hover:bg-gray-100 transition-colors shadow-lg">
                  <Play className="h-8 w-8 text-gray-900 fill-current ml-1" />
                </div>
              </div>
              
              {/* Video title overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-black/80 rounded-lg p-4">
                  <h3 className="text-white font-semibold text-lg">
                    What are the benefits of finding childcare with Sitter City?
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="space-y-6">
            {features.slice(0, 2).map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">{feature.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.slice(2).map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-pink-100 to-pink-200 rounded-2xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Find the right childcare with Sitter City today!
              </h3>
              <Button size="lg" className="bg-gray-900 text-white hover:bg-gray-800">
                Start your search
              </Button>
            </div>
            <div className="flex justify-center lg:justify-end">
              {/* Placeholder for testimonial avatar */}
              <div className="bg-white rounded-full p-2 shadow-lg">
                <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center">
                  <span className="text-2xl">👨‍💼</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyFamiliesLoveSection; 