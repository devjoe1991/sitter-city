import { Star, Play } from 'lucide-react';

const testimonials = [
  {
    rating: 5,
    text: "I really didn't know where to turn a few days ago but now I'm so hopeful.",
    author: "Emma",
  },
  {
    rating: 5,
    text: "A fantastic service which I would highly recommend.",
    author: "James",
  },
  {
    rating: 5,
    text: "Honestly, this service is a godsend!",
    author: "Sarah",
  },
  {
    rating: 5,
    text: "Such a helpful service - within a week I found the perfect nanny. Thank you Sitter City",
    author: "Rebecca",
  },
];

const MeetTeamSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Sitter City
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A family's trusted (and free) guide to best understand, find and book quality childcare.
          </p>
        </div>

        {/* Team Image Section */}
        <div className="relative mb-16">
          <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-3xl p-8 md:p-12">
            <div className="relative">
              {/* Placeholder for team image */}
              <div className="bg-white/20 rounded-2xl p-8 min-h-[400px] flex items-center justify-center relative overflow-hidden">
                <div className="text-center">
                  <div className="bg-white rounded-full p-4 mb-4 inline-block">
                    <span className="text-2xl">👥</span>
                  </div>
                  <p className="text-gray-700 font-medium">Our Expert Care Team</p>
                  <p className="text-gray-600 text-sm mt-2">Dedicated to helping families find perfect childcare</p>
                </div>
                
                {/* Floating icons */}
                <div className="absolute top-8 left-8 bg-pink-400 rounded-lg p-3">
                  <span className="text-white text-xl">❤️</span>
                </div>
                <div className="absolute top-8 right-8 bg-pink-400 rounded-lg p-3">
                  <span className="text-white text-xl">😊</span>
                </div>
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-pink-400 rounded-lg p-3">
                  <span className="text-white text-xl">🏠</span>
                </div>
              </div>
              
              {/* Play button overlay */}
              <div className="absolute bottom-4 left-4 bg-gray-900 rounded-full p-3 cursor-pointer hover:bg-gray-800 transition-colors">
                <Play className="h-6 w-6 text-white fill-current" />
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-green-50 rounded-2xl p-6">
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-green-500 text-green-500" />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-900 font-medium mb-6 leading-relaxed">
                {testimonial.text}
              </p>
              
              {/* Author */}
              <p className="text-gray-700 font-semibold">
                {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTeamSection; 