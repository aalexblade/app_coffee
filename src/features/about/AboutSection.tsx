import React, { FC } from "react";
import { Bean, Zap, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "../../shared/ui/container";
import { Section } from "../../shared/ui/section";
import { Title, Text, Caption } from "../../shared/ui/typography";
import { StaggerContainer, Reveal, FadeIn } from "../../shared/ui/motion";

const features = [
  {
    icon: Bean,
    title: "Fresh Roasting",
    description:
      "Our beans are micro-roasted daily in Kyiv to ensure peak flavor, preserving the unique origin characteristics in every single cup.",
  },
  {
    icon: Zap,
    title: "Fast Service",
    description:
      "Compromising on time doesn't mean compromising on quality. We've meticulously optimized our workflow for your busy morning rituals.",
  },
  {
    icon: Heart,
    title: "Soulful Atmosphere",
    description:
      "An intentionally designed, minimalist space tailored for meaningful connection, deep focus, or simply a quiet moment of inner peace.",
  },
];

export const AboutSection: FC = () => {
  return (
    <Section id="features" className="bg-coffee-dark text-cream rounded-3xl overflow-hidden mx-4 md:mx-6">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          <StaggerContainer className="lg:col-span-5 flex flex-col items-start">
            <FadeIn>
              <Caption className="text-coffee-medium mb-4">Our Philosophy</Caption>
            </FadeIn>
            
            <FadeIn>
              <Title level={2} className="text-cream leading-tight mb-6">
                Crafting spaces <br />
                and moments <br />
                <span className="text-coffee-medium italic font-serif">since 2024</span>
              </Title>
            </FadeIn>

            <FadeIn>
              <div className="w-20 h-px bg-coffee-medium/30 mb-8" />
            </FadeIn>

            <FadeIn>
              <Text className="text-cream/60 mb-6">
                Kaffe 401 was born out of a quiet obsession with the perfect pour.
                Located in the heart of Kyiv, we reject the rush of commercial
                fast-food culture to bring you a slow, intentional coffee
                experience.
              </Text>
            </FadeIn>

            <FadeIn>
              <Text className="text-cream/40 text-sm">
                Every batch of our single-origin beans is selected with ethical
                transparency and roasted with micro-precision. We believe coffee
                isn't just a caffeine kick — it's an art form.
              </Text>
            </FadeIn>
          </StaggerContainer>

          <StaggerContainer className="lg:col-span-7 flex flex-col gap-6 w-full">
            {features.map((feature, index) => (
              <FadeIn key={index}>
                <motion.div
                  whileHover={{ x: 6 }}
                  className="group flex flex-col sm:flex-row items-start gap-6 p-8 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 hover:border-white/10 transition-all duration-500"
                >
                  <div className="p-3.5 bg-white/5 border border-white/10 rounded-xl text-coffee-medium shrink-0 group-hover:scale-105 group-hover:text-coffee-medium transition-all duration-500">
                    <feature.icon size={22} strokeWidth={1.5} />
                  </div>

                  <div className="flex flex-col items-start text-left">
                    <Title level={4} as="h3" className="text-cream mb-2 group-hover:text-coffee-medium transition-colors duration-300">
                      {feature.title}
                    </Title>
                    <Text className="text-sm text-cream/50">
                      {feature.description}
                    </Text>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </StaggerContainer>
        </div>
      </Container>
    </Section>
  );
};
