import React, { FC, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { coffeeMenu } from "../../shared/data/coffee-data";
import { Container } from "../../shared/ui/container";
import { Section } from "../../shared/ui/section";
import { Text } from "../../shared/ui/typography";
import { MenuHeader } from "./components/MenuHeader";
import { MenuGrid } from "./components/MenuGrid";

type MenuCategory = "espresso" | "slow" | "desserts";

export const MenuSection: FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("espresso");

  const categories = [
    { id: "espresso" as MenuCategory, name: "Espresso Bar" },
    { id: "slow" as MenuCategory, name: "Slow Bar / Filter" },
    { id: "desserts" as MenuCategory, name: "Desserts & Pastry" },
  ];

  const filteredMenu = useMemo(() => {
    return coffeeMenu.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <Section id="menu">
      <Container>
        <MenuHeader />

        {/* Premium Interactive Tabs */}
        <div className="flex justify-center items-center gap-4 md:gap-8 mb-20 border-b border-coffee-dark/5 pb-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className="relative py-2 px-1 text-xs font-semibold tracking-widest uppercase transition-colors duration-300 cursor-pointer"
            >
              <span className={activeCategory === cat.id ? "text-coffee-dark" : "text-coffee-dark/40 hover:text-coffee-dark/70"}>
                {cat.name}
              </span>
              
              {activeCategory === cat.id && (
                <motion.div
                  layoutId="activeMenuTab"
                  className="absolute bottom-0 left-0 right-0 h-px bg-coffee-medium"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        <MenuGrid items={filteredMenu} activeCategory={activeCategory} />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-24 text-center border-t border-coffee-dark/5 pt-8"
        >
          <Text className="text-[11px] uppercase tracking-widest text-coffee-dark/30 font-medium">
            * All prices are in Ukrainian Hryvnia (₴) • Freshly crafted in Kyiv
          </Text>
        </motion.div>
      </Container>
    </Section>
  );
};
