import { useEffect, useState, useRef } from "react";
import AnimatedContent from "../animations/contexts/AnimatedContext";
import SpotlightCard from "../animations/card_effects/spotlight_card/SpotlightCard";
import TiltedCard from "../animations/card_effects/tilted_card/TiltedCard";
import { Content } from "../../data/portfolioDetails";

export const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);

  const sectionRef = useRef(null);

  useEffect(() => {
    const sectRef = sectionRef.current;
    // Create an intersection observer instance
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1,
      }
    );

    // Observe the section
    if (sectRef) {
      observer.observe(sectRef);
    }

    return () => {
      if (sectRef) {
        observer.unobserve(sectRef);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`h-[100dvh] flex justify-center items-center p-5 bg-transparent transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex flex-col justify-center items-center w-full h-[100%]">
        <AnimatedContent
          distance={100}
          direction="horizontal"
          reverse={false}
          config={{ tension: 50, friction: 25 }}
          initialOpacity={0.0}
          animateOpacity
          scale={1.1}
          threshold={0.1}
          width="fit-content"
          height="fit-content"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 p-3 uppercase bg-gradient-to-r from-gray-300 via-silver to-gray-500 text-transparent bg-clip-text">
            About Me
          </h2>
        </AnimatedContent>
        <AnimatedContent
          distance={100}
          direction="vertical"
          reverse={false}
          config={{ tension: 50, friction: 20 }}
          initialOpacity={0.0}
          animateOpacity
          scale={1.1}
          threshold={0.1}
        >
          <div className="flex justify-center items-center w-full h-[98%]">
            <SpotlightCard
              spotlightColor="rgba(255, 255, 255, 0.15)"
              className="custom-shadow lg:h-[98%] md:h-[98%] h-[80%] w-[80%] lg:p-8 md:p-8 flex flex-col justify-center items-center"
            >
              <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row justify-between items-center h-full w-full">
                <div className="p-8">{Content.about.details}</div>
                <div className="lg:h-[60dvh] lg:w-[180dvw] lg:visible md:visible">
                  <TiltedCard
                    imageSrc={Content.about.imageUri}
                    altText="Naveen R's profile picture"
                    containerHeight="100%"
                    containerWidth="100%"
                    imageHeight="100%"
                    imageWidth="100%"
                    rotateAmplitude={12}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip={false}
                  />
                </div>
              </div>
            </SpotlightCard>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
};
