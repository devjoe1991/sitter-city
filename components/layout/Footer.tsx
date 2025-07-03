import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Phone, Mail, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

const footerSections = [
  {
    title: 'CHILDCARE SERVICES',
    links: [
      { name: 'Hotel Childcare', href: '#' },
      { name: 'Emergency Care', href: '#' },
      { name: 'Event Babysitting', href: '#' },
      { name: 'Overnight Care', href: '#' },
      { name: 'Nanny Services', href: '#' },
      { name: 'UK Childcare Providers', href: '#' },
    ],
  },
  {
    title: 'LONDON LOCATIONS',
    links: [
      { name: 'All London Areas', href: '#' },
      { name: 'Central London', href: '#' },
      { name: 'Kensington', href: '#' },
      { name: 'Westminster', href: '#' },
      { name: 'Canary Wharf', href: '#' },
      { name: 'UK Childcare Locations', href: '#' },
    ],
  },
  {
    title: 'ADVICE & INSIGHT',
    links: [
      { name: 'Guides & Insight', href: '#' },
      { name: 'Childcare FAQ\'s', href: '#' },
      { name: 'Safety Guidelines', href: '#' },
      { name: 'Booking Tips', href: '#' },
    ],
  },
  {
    title: 'ABOUT SITTER CITY',
    links: [
      { name: 'Partner With Sitter City', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Meet Our Care Experts', href: '#' },
      { name: 'Sitter City FAQ\'s', href: '#' },
      { name: 'Contact Us', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms & Conditions', href: '#' },
    ],
  },
];

const bottomLinks = [
  { name: 'Partner Care Homes', href: '#' },
  { name: 'All UK Care Homes', href: '#' },
  { name: 'London Care Homes', href: '#' },
  { name: 'Partner Care Providers', href: '#' },
  { name: 'UK Domiciliary Care Locations', href: '#' },
  { name: 'UK Live-In Care Locations', href: '#' },
];

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      {/* Main Footer Content */}
      <div className="container mx-auto max-w-6xl px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-pink-500 mb-4">sitter city</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                The easier way to find London's best childcare services and trusted nannies.
              </p>
            </div>
            
            {/* Contact Buttons */}
            <div className="space-y-3">
              <Button className="w-full bg-pink-400 hover:bg-pink-500 text-white">
                <Phone className="mr-2 h-4 w-4" />
                Call
              </Button>
              <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                <Mail className="mr-2 h-4 w-4" />
                Write
              </Button>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title} className="lg:col-span-1">
              <h4 className="font-bold text-gray-900 text-sm mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-600 text-sm hover:text-pink-600 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-blue-600">
        <div className="container mx-auto max-w-4xl px-4 py-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Want to learn more about childcare?
            </h3>
            <p className="text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Get expert advice delivered directly to your inbox, covering topics such as safety 
              and booking tips and how to find the best childcare services, nannies and 
              emergency care providers.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white border-white"
            />
            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8">
              Subscribe
            </Button>
          </div>
          
          <p className="text-blue-200 text-xs text-center mt-4">
            Your personal data will be securely processed in accordance with Sitter City's{' '}
            <a href="#" className="underline hover:text-white">Privacy Policy</a>. 
            You can unsubscribe at any time.
          </p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-white border-t">
        <div className="container mx-auto max-w-6xl px-4 py-8">
          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            <a href="#" className="bg-gray-900 rounded-full p-3 hover:bg-gray-700 transition-colors">
              <Facebook className="h-5 w-5 text-white" />
            </a>
            <a href="#" className="bg-gray-900 rounded-full p-3 hover:bg-gray-700 transition-colors">
              <Instagram className="h-5 w-5 text-white" />
            </a>
            <a href="#" className="bg-gray-900 rounded-full p-3 hover:bg-gray-700 transition-colors">
              <Youtube className="h-5 w-5 text-white" />
            </a>
            <a href="#" className="bg-gray-900 rounded-full p-3 hover:bg-gray-700 transition-colors">
              <Twitter className="h-5 w-5 text-white" />
            </a>
          </div>

          {/* Bottom Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            {bottomLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 text-sm hover:text-pink-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-500 text-sm">
            © 2025 Sitter City Organisation Ltd
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 