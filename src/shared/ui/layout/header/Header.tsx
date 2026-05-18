import React, { FC, useState, useEffect } from "react";
import { Coffee, Menu, X } from "lucide-react";
import { Container } from "../../container";
import { cn } from "../../../lib/utils";

export const Header: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About Us", href: "#features" },
    { name: "Menu", href: "#menu" },
    { name: "Location", href: "#location" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-30 transition-all duration-500",
        isScrolled
          ? "bg-cream/90 backdrop-blur-md shadow-sm py-4 border-b border-coffee-dark/5"
          : "bg-transparent py-6"
      )}
    >
      <Container className="flex items-center justify-between">
        <a 
          href="#hero" 
          className={cn(
            "flex items-center gap-2.5 font-serif font-bold text-xl tracking-tight transition-colors duration-500",
            isScrolled ? "text-coffee-dark" : "text-cream"
          )}
        >
          <Coffee size={22} className="text-coffee-medium" />
          <span>401 <span className="font-sans font-light text-xs tracking-widest uppercase opacity-60">Kyiv</span></span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-xs font-semibold uppercase tracking-[0.25em] transition-all duration-500 relative group",
                isScrolled 
                  ? "text-coffee-dark/80 hover:text-coffee-dark" 
                  : "text-cream hover:text-coffee-medium" 
              )}
            >
              {link.name}
              <span className={cn(
                "absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full",
                isScrolled ? "bg-coffee-dark" : "bg-coffee-medium"
              )} />
            </a>
          ))}
        </nav>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={cn(
            "md:hidden p-1 transition-colors duration-500",
            isScrolled ? "text-coffee-dark" : "text-cream"
          )}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {/* Mobile Menu */}
      <div className={cn(
        "absolute top-full left-0 w-full bg-coffee-dark border-t border-white/5 py-6 px-6 flex flex-col gap-5 md:hidden transition-all duration-300",
        isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
      )}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-cream text-sm font-medium uppercase tracking-widest py-2 border-b border-white/5 last:border-0"
          >
            {link.name}
          </a>
        ))}
      </div>
    </header>
  );
};
