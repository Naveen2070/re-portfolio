import { useEffect, useRef, useState } from "react";
import AnimatedContent from "../animations/contexts/AnimatedContext";

export const ExpertiseBlock = () => {
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
            Expertise
          </h2>
        </AnimatedContent>
        <AnimatedContent
          distance={100}
          direction={"horizontal"}
          reverse={true}
          config={{ tension: 50, friction: 25 }}
          initialOpacity={0.0}
          animateOpacity
          scale={1.1}
          threshold={0.1}
          width="80dvw"
          height="fit-content"
        >
          <div
            className={`transform transition-transform duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)] 
  hover:scale-[1.015] hover:-translate-y-1 
  flex flex-col sm:flex-row md:flex-row 
  items-stretch w-full h-fit p-4 bg-[#171717] rounded-3xl 
  border border-neutral-900 hover:border-neutral-400 mb-4`}
          >
            <div className="flex-1 text-white p-4">
              <h3 className="text-3xl font-bold mb-2 text-silver">
                Frontend Expertise
              </h3>
              <p className="text-gray-400 text-[20px] mb-2">
                I build performant and responsive user interfaces with a focus
                on modern frameworks and efficient tooling.
              </p>
              <ul className="list-disc list-inside text-gray-300 text-[20px]">
                <li>TypeScript, JavaScript</li>
                <li>React, Angular</li>
                <li>React Router, TanStack Router</li>
                <li>Redux, Zustand</li>
                <li>TanStack Query</li>
                <li>Vite, Rustpack</li>
                <li>Axios</li>
              </ul>
            </div>
            <div className="flex-1 text-white p-4">
              <h3 className="text-3xl font-bold mb-2 text-silver">
                Backend Proficiency
              </h3>
              <p className="text-gray-400 text-[20px] mb-2">
                I develop scalable and maintainable APIs and services using
                modern backend frameworks.
              </p>
              <ul className="list-disc list-inside text-gray-300 text-[20px]">
                <li>Express.js, NestJS</li>
                <li>Spring Boot, .NET (ASP.NET API)</li>
                <li>FastAPI, Django</li>
              </ul>
            </div>
            <div className="flex-1 text-white p-4">
              <h3 className="text-3xl font-bold mb-2 text-silver">
                Database Knowledge
              </h3>
              <p className="text-gray-400 text-[20px] mb-2">
                Skilled in working with both relational and NoSQL databases.
              </p>
              <ul className="list-disc list-inside text-gray-300 text-[20px]">
                <li>PostgreSQL</li>
                <li>MongoDB</li>
              </ul>
            </div>
            <div className="flex-1 text-white p-4">
              <h3 className="text-3xl font-bold mb-2 text-silver">
                Cross-Platform Development
              </h3>
              <p className="text-gray-400 text-[20px] mb-2">
                I create seamless experiences across mobile and desktop
                platforms.
              </p>
              <ul className="list-disc list-inside text-gray-300 text-[20px]">
                <li>Flutter, React Native</li>
                <li>Tauri, Electron</li>
              </ul>
            </div>
            <div className="flex-1 text-white p-4">
              <h3 className="text-3xl font-bold mb-2 text-silver">
                Native Mobile Development
              </h3>
              <p className="text-gray-400 text-[20px] mb-2">
                Focused on delivering intuitive and native Android apps.
              </p>
              <ul className="list-disc list-inside text-gray-300 text-[20px]">
                <li>Android with Kotlin & Jetpack Compose</li>
              </ul>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
};
