import React from "react";
import { MainLayout } from "./app/layout/MainLayout";
import { HeroSection } from "./features/hero";
import { AboutSection } from "./features/about";
import { MenuSection } from "./features/menu";
import { TestimonialsSection } from "./features/testimonials";
import { LocationSection } from "./features/location";
import { ContactSection } from "./features/contact";

function App() {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <TestimonialsSection />
      <LocationSection />
      <ContactSection />
    </MainLayout>
  );
}

export default App;
