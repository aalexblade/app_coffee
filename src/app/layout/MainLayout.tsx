import React, { FC, ReactNode } from 'react';
import { Header } from '../../shared/ui/layout/header/Header';
import { Footer } from '../../shared/ui/layout/footer/Footer';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-cream">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
