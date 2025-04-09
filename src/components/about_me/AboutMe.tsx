import { useEffect, useState, useRef } from "react";
import AnimatedContent from "../animations/contexts/AnimatedContext";
import SpotlightCard from "../animations/card_effects/spotlight_card/SpotlightCard";
import TiltedCard from "../animations/card_effects/tilted_card/TiltedCard";
import PlaceHolderImg from "../../assets/images/placeholder.jpg";
import { calculateDateDifference } from "../../utils/helpers/Ago";

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
      className={`h-[100dvh] flex justify-center items-center p-5 bg-black transition-opacity duration-500 ${
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
          <div className="flex justify-center items-center w-full h-[100%]">
            <SpotlightCard
              spotlightColor="rgba(255, 255, 255, 0.15)"
              className="custom-shadow h-[100%] w-[80%] p-8 flex flex-col justify-center items-center"
            >
              <div className="flex justify-between items-center h-full w-full">
                <div className="p-8">
                  <p className="text-[18px] sm:text-[20px] md:text-[24px] mt-4 sm:mt-6 md:mt-8 bg-gradient-to-r from-gray-300 via-silver to-gray-500 text-transparent bg-clip-text select-none">
                    <span className="wave text-3xl text-black">👋</span> Hi,
                    <span className="text-blue-500 ml-2">I'm Naveen!</span> A
                    passionate and driven software developer with a keen eye for
                    detail and a love for creating innovative solutions. I have
                    been working in the field for over
                    <span className="text-blue-500 ml-2">
                      {calculateDateDifference("01-01-2023")}
                    </span>
                    , I specialize in
                    <span className="text-blue-500 ml-2">
                      full-stack and cross-platform development, with a
                      experience on backend development using Microservices
                      architecture, GraphQL and RESTful APIs.
                    </span>
                  </p>
                  <p className="text-[18px] sm:text-[20px] md:text-[24px] mt-4 sm:mt-6 md:mt-8 bg-gradient-to-r from-gray-300 via-silver to-gray-500 text-transparent bg-clip-text select-none">
                    When I'm not immersed in coding, designing or
                    problem-solving, you can find me
                    <span className="text-blue-500 ml-2">
                      watching anime, trying out indie games, exploring new
                      technologies, tools, architectures or working on personal
                      projects to expand my skillset
                    </span>
                    . I believe in
                    <span className="text-blue-500 ml-2">
                      continuous learning
                    </span>{" "}
                    and strive to stay at the forefront of the latest trends and
                    advancements in my field. I am always eager to take on new
                    challenges and contribute to the ever-evolving world of
                    software development.
                  </p>
                </div>
                <div>
                  <TiltedCard
                    imageSrc={PlaceHolderImg}
                    altText="Naveen R's profile picture"
                    containerHeight="60dvh"
                    containerWidth="400px"
                    imageHeight="60dvh"
                    imageWidth="400px"
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
