import { useEffect, useRef, useState } from "react";
import AnimatedContent from "../animations/contexts/AnimatedContext";

export const Exprience = () => {
  const [isVisible, setIsVisible] = useState(false);
  // use for carousel
  //   const screen = useBreakpoint();
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

  // use for carousel
  //   const activeScreen = useMemo(() => getActiveBreakpoint(screen), [screen]);

  //   const width = useMemo(() => {
  //     switch (activeScreen) {
  //       case "xs":
  //         return 300;
  //       case "sm":
  //         return 400;
  //       case "md":
  //         return 500;
  //       case "lg":
  //         return 1000;
  //       case "xl":
  //         return 1100;
  //       case "2xl":
  //         return 800;
  //       default:
  //         return 400;
  //     }
  //   }, [activeScreen]);

  //   const height = useMemo(() => {
  //     switch (activeScreen) {
  //       case "xs":
  //         return 800;
  //       case "sm":
  //         return 800;
  //       case "md":
  //         return 600;
  //       case "lg":
  //         return 600;
  //       case "xl":
  //         return 600;
  //       case "2xl":
  //         return 800;
  //       default:
  //         return 400;
  //     }
  //   }, [activeScreen]);

  //   const items: CarouselItem[] = [
  //     {
  //       id: 1,
  //       title: "Title 1",
  //       description: "Description 1",
  //       icon: <p>a</p>,
  //     },
  //   ];

  const items = [
    {
      title: "January 2022",
      cardTitle: "Event 1",
      cardSubtitle: "Event 1 Subtitle",
      cardDetailedText: "This is the first event on the timeline.",
    },
    {
      title: "February 2022",
      cardTitle: "Event 2",
      cardSubtitle: "Event 2 Subtitle",
      cardDetailedText: "This is the second event on the timeline.",
    },
    {
      title: "March 2022",
      cardTitle: "Event 3",
      cardSubtitle: "Event 3 Subtitle",
      cardDetailedText: "This is the third event on the timeline.",
    },
  ];

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
          <AnimatedContent
            distance={100}
            direction="horizontal"
            reverse={false}
            config={{ tension: 50, friction: 25 }}
            initialOpacity={0.0}
            animateOpacity
            scale={1.1}
            threshold={0.1}
            width="80dvw"
            height="fit-content"
          >
            <div className="custom-shadow flex justify-between items-center w-full h-fit p-4 bg-[#171717] rounded-3xl border border-neutral-900">
              {/* First section */}
              <div className="w-full py-4 flex justify-center items-center">
                <p className="text-white">First Content</p>
              </div>

              {/* Divider */}
              <div className="w-full flex justify-center my-2">
                <div className="w-px h-10 bg-neutral-600" />
              </div>

              {/* Second section */}
              <div className="w-full py-4 flex justify-center items-center">
                <p className="text-white">Second Content</p>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>
    </>
  );
};
