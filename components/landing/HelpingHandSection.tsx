import { Play, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const videos = [
  {
    title: 'The benefits of Sitter City',
    thumbnail: 'phone-mockup',
    hasPlayButton: true,
  },
  {
    title: 'How to book emergency childcare',
    thumbnail: 'emergency-care',
    hasPlayButton: true,
  },
];

const guides = [
  {
    title: 'London Hotel Childcare Costs in 2025',
    category: 'Hotel Care',
    readTime: '8 minute read',
    bgColor: 'bg-blue-100',
    categoryColor: 'bg-green-400',
    image: 'calculator-coins',
  },
  {
    title: 'Best Family Hotels in London',
    category: 'Travel Guide',
    readTime: '12 minute read',
    bgColor: 'bg-blue-200',
    categoryColor: 'bg-blue-400',
    image: 'london-hotels',
  },
  {
    title: 'Emergency Childcare: What Parents Need to Know',
    category: 'Safety Guide',
    readTime: '6 minute read',
    bgColor: 'bg-orange-100',
    categoryColor: 'bg-orange-400',
    image: 'emergency-guide',
  },
];

const HelpingHandSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Need a helping hand?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Expert advice and guidance from Sitter City's team of childcare experts
          </p>
        </div>

        {/* Videos Section */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Popular Videos Card */}
            <div className="bg-blue-100 rounded-2xl p-8 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Sitter City's most popular videos
              </h3>
              <Button className="bg-gray-900 text-white hover:bg-gray-800 w-fit">
                View all our guides
              </Button>
            </div>

            {/* Video Cards */}
            {videos.map((video, index) => (
              <div key={index} className="relative rounded-2xl overflow-hidden group cursor-pointer">
                {/* Video Thumbnail */}
                <div className="bg-gradient-to-br from-gray-300 to-gray-500 aspect-video flex items-center justify-center relative">
                  {video.thumbnail === 'phone-mockup' ? (
                    <div className="bg-white rounded-lg p-4 shadow-lg">
                      <div className="bg-pink-100 rounded w-32 h-48 flex items-center justify-center">
                        <span className="text-pink-600 font-bold">Sitter City</span>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center text-white">
                      <div className="text-4xl mb-2">🚨</div>
                      <p className="text-sm">Emergency Care Guide</p>
                    </div>
                  )}
                  
                  {/* Play Button Overlay */}
                  {video.hasPlayButton && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white rounded-full p-3 shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="h-6 w-6 text-gray-900 fill-current ml-1" />
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Video Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-4">
                  <h4 className="text-white font-semibold">{video.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Guides Section */}
        <div>
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Popular Guides Card */}
            <div className="bg-yellow-100 rounded-2xl p-8 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Sitter City's most popular guides
              </h3>
              <Button className="bg-gray-900 text-white hover:bg-gray-800 w-fit">
                Read all of our guides
              </Button>
            </div>

            {/* Guide Cards */}
            {guides.map((guide, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm border hover:shadow-md transition-shadow cursor-pointer group">
                {/* Guide Image */}
                <div className={`${guide.bgColor} aspect-video flex items-center justify-center relative`}>
                  {guide.image === 'calculator-coins' ? (
                    <div className="text-center">
                      <div className="text-4xl mb-2">💰</div>
                      <div className="text-2xl">🧮</div>
                    </div>
                  ) : guide.image === 'london-hotels' ? (
                    <div className="text-center">
                      <div className="text-4xl mb-2">🏨</div>
                      <div className="text-2xl">🇬🇧</div>
                    </div>
                  ) : (
                    <div className="text-center">
                      <div className="text-4xl mb-2">🚨</div>
                      <div className="text-2xl">👶</div>
                    </div>
                  )}
                  
                  {/* Category Badge */}
                  <div className={`absolute top-4 left-4 ${guide.categoryColor} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                    {guide.category}
                  </div>
                </div>
                
                {/* Guide Content */}
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors">
                    {guide.title}
                  </h4>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{guide.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpingHandSection; 