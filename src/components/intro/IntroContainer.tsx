import React from "react";
import Squares from "../animations/squares_bg/SquaresBackground";
import BlurText from "../animations/text_effects/blur_text/BlurText";
import RotatingText from "../animations/text_effects/rotating_text/RotatingText";
import DecryptedText from "../animations/text_effects/decrypt_text/DecryptText";
import StarComponent from "../animations/star_componenet/StarComponent";
import Magnet from "../animations/Magnet";

export const IntroContainer = () => {
  const [namingComplete, setNamingComplete] = React.useState(false);
  const [rotatingComplete, setRotatingComplete] = React.useState(false);

  // Handle animation completion for BlurText
  const handleAnimationComplete = () => {
    setNamingComplete(true);
  };

  // Handle animation completion for RotatingText
  const handleRotatingComplete = () => {
    if (!rotatingComplete) setRotatingComplete(true);
    return;
  };

  //handle projects click
  const handleResumeClick = () => {
    console.log("resume");
  };

  //handle contact click
  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
    window.location.hash = "#contact";
  };

  return (
    <section id="home" className="relative w-full h-[93dvh] flex flex-col">
      <div className="absolute inset-0 z-0">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor="#5A6571"
          hoverFillColor="#222"
        />
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center relative z-10 p-8 text-white bg-transparent">
        {/* BlurText animation */}
        <div
          className={`w-full flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
            namingComplete
              ? "translate-y-[-40%] sm:translate-y-[-50%] md:translate-y-[-100%] text-[2.85rem] sm:text-4xl md:text-6xl lg:text-8xl"
              : "translate-y-0 text-3xl sm:text-2xl md:text-4xl"
          }`}
        >
          <BlurText
            text="Hello! I'm Naveen"
            delay={250}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="mb-8 font-sans flex justify-center items-center"
          />
        </div>

        {/* RotatingText animation with scale and opacity transitions */}
        <div
          className={`w-full flex items-center justify-center transition-all duration-700 ease-in-out transform ${
            namingComplete
              ? "scale-100 opacity-100 translate-y-[-100%]"
              : "scale-75 opacity-0 translate-y-10"
          }`}
        >
          <p className="text-[16px] sm:text-1xl md:text-2xl lg:text-4xl font-bold mr-4 text-cyan-600">
            So what am I?
          </p>
          <RotatingText
            texts={[
              "A Developer",
              "A Techophile",
              "A Creator",
              "An Innovator",
              "A Student",
              "A Programmer",
              "An Engineer",
              "A Visionary",
              "A Builder",
              "A Learner",
              "A Full-Stack Developer",
              "A Designer",
              "A Coder",
              "A Problem-Solver",
              "An Explorer",
              "A Cross-Platform Developer",
              "A Software Developer",
              "A Technologist",
              "A Thinker",
              "Maybe all of it",
            ]}
            mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg font-bold text-[16px] sm:text-1xl md:text-2xl lg:text-4xl"
            staggerFrom={"first"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            onNext={handleRotatingComplete}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={3000}
          />
        </div>
        <div
          className={`w-[80%] flex items-center justify-center transition-all duration-700 ease-in-out delay-300 transform ${
            rotatingComplete
              ? "scale-100 opacity-100 translate-y-0"
              : "scale-75 opacity-0 translate-y-10 pointer-events-none"
          }`}
        >
          {rotatingComplete && (
            <DecryptedText
              className="text-[14px] sm:text-[16px] md:text-[20px] mt-4 sm:mt-6 md:mt-8 "
              text="Welcome to my portfolio! As a passionate and dedicated professional, I thrive on solving challenges and creating impactful solutions in the digital realm. Whether it's developing sleek web applications, designing intuitive interfaces, or experimenting with creative animations, I love merging technology and innovation to bring ideas to life."
              speed={150}
              maxIterations={20}
              animateOn="view"
            />
          )}
        </div>
        <div
          className={`w-[70%] flex items-center mt-8 transition-all duration-700 ease-in-out delay-300 transform ${
            rotatingComplete
              ? "scale-100 opacity-100 translate-y-0"
              : "scale-75 opacity-0 translate-y-10 pointer-events-none"
          }`}
        >
          <StarComponent
            as="button"
            className="text-[12px] sm:text-[14px] md:text-[16px] uppercase text-green-300 cursor-pointer"
            color="green"
            speed="4s"
            onClick={handleResumeClick}
          >
            Resume
          </StarComponent>
          <div className="w-8"></div>
          <Magnet padding={50} disabled={false} magnetStrength={5}>
            <StarComponent
              as="button"
              className="text-[12px] sm:text-[14px] md:text-[16px] uppercase text-cyan-300 cursor-pointer"
              color="cyan"
              speed="4s"
              onClick={handleContactClick}
            >
              Contact Me
            </StarComponent>
          </Magnet>
        </div>
      </div>
    </section>
  );
};
