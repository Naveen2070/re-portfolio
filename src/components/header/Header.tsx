import React from "react";
import "./Header.css";
import ShinyText from "../animations/text_effects/shiny_text/ShinyText";
import GooeyNav, { GooeyNavItem } from "../animations/grooey_nav/GooeyNav";

export const Header = () => {
  const items: GooeyNavItem[] = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const currentIndex = items.findIndex(
    (item) => item.href === window.location.hash
  );

  return (
    <header className="header">
      <ShinyText text="NAVEEN R" speed={2} className="text-3xl select-none" />
      <GooeyNav
        items={items}
        particleCount={10}
        particleDistances={[90, 10]}
        particleR={100}
        animationTime={600}
        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        initialActiveIndex={currentIndex}
      />
    </header>
  );
};
