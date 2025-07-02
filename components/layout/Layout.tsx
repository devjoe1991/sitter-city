import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container max-w-6xl py-6 md:py-10">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 