import "./Header.css";
import ShinyText from "../animations/text_effects/shiny_text/ShinyText";
import GooeyNav, { GooeyNavItem } from "../animations/grooey_nav/GooeyNav";
import { Content } from "../../data/portfolioDetails";

export const Header = () => {
  const items: GooeyNavItem[] = Content.header.menuItems;

  const Index = items.findIndex((item) => item.href === window.location.hash);
  const currentIndex = Index === -1 ? 0 : Index;

  return (
    <header className="header">
      <GooeyNav
        items={items}
        particleCount={10}
        particleDistances={[90, 10]}
        particleR={100}
        animationTime={600}
        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        initialActiveIndex={currentIndex}
      />
      <ShinyText
        text={Content.header.name}
        speed={2}
        className="text-1xl sm:text-2xl md:text-3xl lg:text-4xl select-none flex items-center justify-center"
      />
    </header>
  );
};
