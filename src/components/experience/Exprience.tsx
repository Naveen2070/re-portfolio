import { useEffect, useRef, useState } from "react";
import AnimatedContent from "../animations/contexts/AnimatedContext";
import { ExpItem } from "./ExpItem";

export const Exprience = () => {
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
    <>
      <section
        id="about"
        ref={sectionRef}
        className={`relative h-fit flex justify-center items-center p-5 bg-transparent transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="relative z-10 flex flex-col justify-center items-center w-full h-[100%]">
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
              Experience
            </h2>
          </AnimatedContent>
          <ExpItem
            Company="Company"
            Role="Role"
            Duration="Duration"
            Description="Description"
            Reverse={true}
          />
          <ExpItem
            Company="Company"
            Role="Role"
            Duration="Duration"
            Description="Description"
            Reverse={true}
          />
        </div>
      </section>
    </>
  );
};
