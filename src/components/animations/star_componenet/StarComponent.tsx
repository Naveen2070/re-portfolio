import React, { useState } from "react";
import "./StarComponent.css";

type StarButtonProps<T extends React.ElementType> =
  React.ComponentPropsWithoutRef<T> & {
    as?: T;
    className?: string;
    children?: React.ReactNode;
    color?: string;
    speed?: React.CSSProperties["animationDuration"];
    onClick?: React.MouseEventHandler<T>;
    gradientIntensity?: string;
  };

const StarComponent = <T extends React.ElementType = "button">({
  as,
  className = "",
  color = "white",
  speed = "6s",
  children,
  gradientIntensity = "10%",
  ...rest
}: StarButtonProps<T>) => {
  const Component = as || "button";

  // State to control hover
  const [isHovered, setIsHovered] = useState(false);

  const gradientStyle = {
    background: `radial-gradient(circle, ${color}, transparent ${gradientIntensity})`, // Use gradientIntensity
    animationDuration: speed,
  };

  const boxShadowStyle = {
    boxShadow: isHovered && as === "button" ? `0 0 10px 2px ${color}` : "none",
  };

  return (
    <Component
      className={`star-border-container ${className}`}
      {...rest}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={boxShadowStyle}
    >
      <div className="border-gradient-bottom" style={gradientStyle}></div>
      <div className="border-gradient-top" style={gradientStyle}></div>
      <div className="inner-content">{children}</div>
    </Component>
  );
};

export default StarComponent;
