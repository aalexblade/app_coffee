import React, { FC } from "react";
import { Instagram, Facebook, Twitter, Send } from "lucide-react";
import { Container } from "../../container";
import { Title, Text } from "../../typography";
import { AppButton } from "../../button";
import { cn } from "../../../lib/utils";

export const Footer: FC = () => {
  return (
    <footer className="bg-coffee-dark text-cream/70 py-16 border-t border-cream/10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Logo & Tagline */}
          <div className="space-y-4">
            <Title level={3} className="text-cream tracking-wider">
              COFFEE HOUSE
            </Title>
            <Text className="text-cream/70 leading-relaxed">
              Crafting exceptional coffee experiences since 2018. We source only the finest ethical beans, roasted in small batches for peak flavor.
            </Text>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-cream">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#menu" className="hover:text-cream transition-colors">Menu Selection</a>
              </li>
              <li>
                <a href="#features" className="hover:text-cream transition-colors">Our Story</a>
              </li>
              <li>
                <a href="#location" className="hover:text-cream transition-colors">Visit Us</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cream transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-cream">Follow Us</h4>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, idx) => (
                <a 
                  key={idx}
                  href="#" 
                  className="p-2 rounded-full border border-cream/10 hover:bg-cream/10 hover:text-cream transition-all"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-cream">Newsletter</h4>
            <Text className="text-sm text-cream/70">Stay updated with our latest roasts and events.</Text>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/5 border border-cream/10 rounded-lg px-4 py-2 text-cream focus:outline-none focus:border-coffee-light/50 flex-1 min-w-0"
              />
              <AppButton variant="primary" className="px-4 py-2 h-auto">
                <Send size={18} />
              </AppButton>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2024 Coffee House Kyiv. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-cream">Privacy Policy</a>
            <a href="#" className="hover:text-cream">Terms of Service</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
