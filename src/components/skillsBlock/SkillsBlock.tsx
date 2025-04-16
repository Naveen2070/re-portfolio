import { useEffect, useRef, useState } from "react";
import AnimatedContent from "../animations/contexts/AnimatedContext";
import { SkillContaniner } from "./SkillContaniner";

export const SkillsBlock = () => {
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

  const items = [
    {
      icon: (
        <img
          alt="javascript"
          width={100}
          height={100}
          className="rounded-[10px]"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
        />
      ),
      color: "#DBC217",
      label: "JavaScript",
    },
    {
      icon: (
        <img
          alt="typescript"
          width={100}
          height={100}
          className="rounded-[10px]"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
        />
      ),
      color: "#007CCF",
      label: "TypeScript",
    },
    {
      icon: (
        <img
          alt="golang"
          width={100}
          height={100}
          className="rounded-[10px]"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg"
        />
      ),
      color: "#005995",
      label: "Golang",
    },
    {
      icon: (
        <img
          alt="dart"
          width={100}
          height={100}
          className="rounded-[10px]"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg"
        />
      ),
      color: "#009B8E",
      label: "Dart",
    },
    { icon: <p>a</p>, color: "orange", label: "Notes" },
    { icon: <p>a</p>, color: "green", label: "Stats" },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`relative min-h-[100dvh] h-fit flex justify-center items-center p-5 bg-transparent transition-opacity duration-500 ${
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
            Tools and Technologies
          </h2>
        </AnimatedContent>

        <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center w-full h-[100%]">
          <SkillContaniner Items={items} Reverse={true} Title="Languages" />
          <SkillContaniner Items={items} Title="Languages" />
        </div>
      </div>
    </section>
  );
};
