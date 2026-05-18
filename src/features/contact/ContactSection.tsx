import React, { FC, useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { AppButton } from "../../shared/ui/button";
import { Container } from "../../shared/ui/container";
import { Section } from "../../shared/ui/section";
import { Title, Text, Caption } from "../../shared/ui/typography";
import { StaggerContainer, FadeIn } from "../../shared/ui/motion";
import { shopLocation } from "../../shared/data/coffee-data";

export const ContactSection: FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isBrewing, setIsBrewing] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [shopStatus, setShopStatus] = useState<{ open: boolean; message: string }>({
    open: false,
    message: "Checking hours..."
  });

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const day = now.getDay();
      const hour = now.getHours();
      
      const isWeekend = day === 0 || day === 6;
      const startHour = isWeekend ? 9 : 8;
      const endHour = isWeekend ? 22 : 21;

      if (hour >= startHour && hour < endHour) {
        setShopStatus({ open: true, message: "Open now — drop by for a flat white!" });
      } else {
        setShopStatus({ open: false, message: "We're closed — but we'll read your message first thing tomorrow" });
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setIsBrewing(true);
    setTimeout(() => {
      setIsBrewing(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Section id="contact" className="bg-coffee-dark text-cream border-t border-white/5 relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start relative z-10">
          
          <StaggerContainer className="lg:col-span-5 space-y-12">
            <div className="space-y-4">
              <FadeIn>
                <Caption className="text-cream/50">Contact</Caption>
              </FadeIn>
              <FadeIn>
                <Title level={2} className="text-white">Get in Touch</Title>
              </FadeIn>
              <FadeIn>
                <div className="w-16 h-px bg-cream/20 pt-2" />
              </FadeIn>
              <FadeIn>
                <Text className="text-cream/60 pt-2">
                  Have questions about our seasonal roasts, interested in wholesale partnerships, or want to host a private coffee event? Reach out to our Kyiv team.
                </Text>
              </FadeIn>
            </div>

            <FadeIn className="space-y-5 max-w-xs">
              <div className="flex flex-col gap-2">
                <Caption className="text-cream/40 text-[10px]">Kyiv Shop Hours</Caption>
                <div className="flex items-center gap-2 pt-1">
                  <span className="relative flex h-2 w-2">
                    {shopStatus.open && (
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    )}
                    <span className={`relative inline-flex rounded-full h-2 w-2 ${shopStatus.open ? 'bg-emerald-500' : 'bg-white/20'}`}></span>
                  </span>
                  <span className={`text-[11px] tracking-wide font-light ${shopStatus.open ? 'text-emerald-400/90' : 'text-cream/40'}`}>
                    {shopStatus.message}
                  </span>
                </div>
              </div>

              <div className="space-y-2.5 text-sm font-light pt-1">
                {shopLocation.workingHours.map((slot, index) => (
                  <div key={index} className="flex justify-between items-baseline gap-4 text-cream/70">
                    <span>{slot.days}</span>
                    <div className="flex-1 border-b border-dotted border-white/10" />
                    <span className="font-medium text-white">{slot.hours}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </StaggerContainer>

          <FadeIn direction="up" className="lg:col-span-7 w-full">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center space-y-5 py-8"
                >
                  <div className="p-4 bg-white/5 border border-white/10 text-emerald-400 rounded-full">
                    <CheckCircle2 size={40} strokeWidth={1.5} />
                  </div>
                  <div className="space-y-2">
                    <Title level={3} className="text-white">Message Sent</Title>
                    <Text className="text-sm text-cream/60 max-w-sm mx-auto">
                      We've received your inquiry. Our manager will review it and get back to you within the next working day.
                    </Text>
                  </div>
                  <AppButton 
                    variant="outline" 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 border-white/10 text-white"
                  >
                    Send Another
                  </AppButton>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Caption className="text-cream/40 text-[10px] ml-0.5">Full Name</Caption>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="E.g. Alexander Green"
                      className="w-full bg-white/5 border border-white/10 focus:border-cream/40 outline-none rounded-xl p-4 text-sm font-light transition-all placeholder-white/20 text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <Caption className="text-cream/40 text-[10px] ml-0.5">Email Address</Caption>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@domain.com"
                      className="w-full bg-white/5 border border-white/10 focus:border-cream/40 outline-none rounded-xl p-4 text-sm font-light transition-all placeholder-white/20 text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <Caption className="text-cream/40 text-[10px] ml-0.5">Your Message</Caption>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you today?"
                      className="w-full bg-white/5 border border-white/10 focus:border-cream/40 outline-none rounded-xl p-4 text-sm font-light transition-all placeholder-white/20 text-white resize-none"
                    />
                  </div>

                  <AppButton 
                    variant="primary" 
                    type="submit" 
                    disabled={isBrewing}
                    className="w-full bg-cream text-coffee-dark hover:bg-white py-4"
                  >
                    {isBrewing ? <Loader2 size={14} className="animate-spin" /> : "Dispatch Message"}
                  </AppButton>
                </form>
              )}
            </AnimatePresence>
          </FadeIn>

        </div>
      </Container>
    </Section>
  );
};
