import React from "react";
import Aurora from "../animations/Aurora";

export const Header = () => {
  return (
    <header className="header">
      <Aurora
        colorStops={["#00D8FF", "#76FF67", "#00D8FF"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.6}
      >
        <div
          className="absolute z-10 bg-transparent"
          style={{
            // mixBlendMode: "soft-light",
            backgroundColor: "rgba(75, 75, 75, 0.29)",
            borderBottom: "1px inset rgba(0, 0, 0, 0.74)",
            color: "#dfdfd6",
            width: "100%",
            height: "60px",
            padding: "1rem",
          }}
        >
          <h1 className="text-2xl">head</h1>
        </div>
      </Aurora>
    </header>
  );
};
