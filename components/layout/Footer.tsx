import Link from 'next/link';
import { Twitter, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: 'Twitter', icon: <Twitter className="h-5 w-5" />, href: '#' },
    { name: 'Instagram', icon: <Instagram className="h-5 w-5" />, href: '#' },
    { name: 'Facebook', icon: <Facebook className="h-5 w-5" />, href: '#' },
  ];

  return (
    <footer className="bg-muted">
      <div className="container mx-auto flex h-20 max-w-6xl flex-col items-center justify-between gap-4 py-6 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Sitter City. All Rights Reserved.
        </p>
        <div className="flex items-center space-x-4">
          {socialLinks.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label={social.name}
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer; 