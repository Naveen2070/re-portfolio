import { useEffect, useState, useRef } from "react";
import AnimatedContent from "../animations/contexts/AnimatedContext";
import PixelCard from "../animations/pixel_card/PixelCard";

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
      className={`h-fit flex flex-col justify-center items-center p-5 bg-black transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <AnimatedContent
        distance={100}
        direction="horizontal"
        reverse={false}
        config={{ tension: 50, friction: 25 }}
        initialOpacity={0.0}
        animateOpacity
        scale={1.1}
        threshold={0.1}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 p-3 uppercase bg-gradient-to-r from-gray-300 via-silver to-gray-500 text-transparent bg-clip-text">
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
        <PixelCard
          variant="blue"
          className="custom-shadow"
          width="w-[80%]"
          height="h-[800px]"
        >
          <div className="absolute">
            <p>I am Naveen</p>
          </div>
        </PixelCard>
      </AnimatedContent>
    </section>
  );
};
