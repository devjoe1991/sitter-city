import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="w-full max-w-6xl p-4 md:p-6">
        {children}
      </div>
    </main>
  );
};

export default Layout; 