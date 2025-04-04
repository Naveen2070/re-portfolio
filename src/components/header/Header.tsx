import React from "react";
import "./Header.css";
import ShinyText from "../animations/shiny_text/ShinyText";
import GooeyNav, { GooeyNavItem } from "../animations/grooey_nav/GooeyNav";

export const Header = () => {
  const items: GooeyNavItem[] = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
  ];
  return (
    <header className="header">
      <ShinyText text="NAVEEN R" speed={5} className="text-3xl" />
      <GooeyNav items={items} animationTime={600} />
    </header>
  );
};
