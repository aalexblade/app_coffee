import React, { FC } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";
import { shopLocation } from "../../shared/data/coffee-data";
import { Container } from "../../shared/ui/container";
import { Section } from "../../shared/ui/section";
import { Title, Text, Caption } from "../../shared/ui/typography";
import { StaggerContainer, FadeIn } from "../../shared/ui/motion";

export const LocationSection: FC = () => {
  return (
    <Section id="location" className="bg-coffee-dark rounded-3xl text-cream overflow-hidden mx-4 md:mx-6">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          <StaggerContainer className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <FadeIn>
                <Caption className="text-coffee-medium">Locate Us</Caption>
              </FadeIn>
              <FadeIn>
                <Title level={2} className="text-cream">Visit Our Shop</Title>
              </FadeIn>
              <FadeIn>
                <div className="w-16 h-px bg-coffee-medium/40 pt-2" />
              </FadeIn>
            </div>
            
            <div className="space-y-8">
              <FadeIn>
                <div className="flex items-start gap-5 group">
                  <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-coffee-medium shrink-0 transition-colors duration-300 group-hover:border-coffee-medium/30">
                    <MapPin size={18} strokeWidth={1.5} />
                  </div>
                  <div className="space-y-1.5">
                    <Caption className="text-cream/40 text-[10px]">Address</Caption>
                    <Text className="text-base text-cream/80 max-w-sm transition-colors duration-300 group-hover:text-cream">
                      {shopLocation.address}
                    </Text>
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn>
                <div className="flex items-start gap-5 group">
                  <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-coffee-medium shrink-0 transition-colors duration-300 group-hover:border-coffee-medium/30">
                    <Clock size={18} strokeWidth={1.5} />
                  </div>
                  <div className="space-y-3 w-full max-w-xs">
                    <Caption className="text-cream/40 text-[10px]">Working Hours</Caption>
                    <ul className="space-y-2 text-sm font-light text-cream/70">
                      {shopLocation.workingHours.map((slot, index) => (
                        <li key={index} className="space-y-1">
                          <div className="flex justify-between items-baseline gap-4">
                            <span className="transition-colors duration-300 group-hover:text-cream/90">{slot.days}</span>
                            <div className="flex-1 border-b border-dotted border-white/10" />
                            <span className="font-medium text-cream">{slot.hours}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            </div>
          </StaggerContainer>
          
          <FadeIn direction="right" className="lg:col-span-7 w-full aspect-square md:aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-sm relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none z-10 transition-opacity duration-500 group-hover:opacity-40" />
            
            <iframe
              src={shopLocation.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kaffe 401 Kyiv Map Location"
              className="grayscale invert opacity-65 contrast-110 saturate-50 transition-all duration-700 group-hover:opacity-85 group-hover:contrast-100"
            />
          </FadeIn>

        </div>
      </Container>
    </Section>
  );
};
