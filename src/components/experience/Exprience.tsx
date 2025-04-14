import { useEffect, useRef, useState } from "react";
import AnimatedContent from "../animations/contexts/AnimatedContext";
import { ExpItem, ExpProps } from "./ExpItem";
import InspireLogo from "../../assets/images/Inspire-textless.png";
import EnterOtLogo from "../../assets/images/enterot.jpeg";
import FreeLancerLogo from "./../../assets/images/freelancer.png";

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

  const generateDescription = (content: React.ReactNode) => (
    <p className="text-neutral-300 mt-2">{content}</p>
  );

  const ExpItems: ExpProps[] = [
    {
      ImageUri: InspireLogo,
      Role: "Junior Software Developer",
      Company: "Inspire Clean Energy",
      Duration: "November 2023 - Present",
      Description: generateDescription(
        <>
          Working on the<span className="text-blue-500 ml-1">frontend</span>{" "}
          development of the
          <span className="text-blue-500 ml-1">
            Analytics tab to visualize data from solar sites.
          </span>{" "}
          <span className="text-blue-500 ml-1">
            Implement frontend role-based access (RBA)
          </span>{" "}
          and
          <span className="text-blue-500 ml-1">
            optimize Core Web Vitals
          </span>{" "}
          to improve performance on the analytics page. Also
          <span className="text-blue-500 ml-1">
            maintained the production repository
          </span>{" "}
          and monitored the
          <span className="text-blue-500 ml-1">development pipelines</span> to
          ensure continuous integration and deployment.
        </>
      ),
    },
    {
      ImageUri: EnterOtLogo,
      Role: "Web Developer",
      Company: "Inspire Clean Energy",
      Duration: "July 2023 - October 2023",
      Description: generateDescription(
        <>
          Worked as a
          <span className="text-blue-500 ml-1">
            Fullstack Developer using technologies such as React, JavaScript,
            HTML, CSS, SQL, and PostgreSQL to build a custom resource management
            software.
          </span>{" "}
          Contributed across the full development lifecycle—from initial
          implementation to deployment on the QA server—collaborating closely
          with the development team. Also supported post-deployment updates and
          feature enhancements.
        </>
      ),
    },
    {
      ImageUri: FreeLancerLogo,
      Role: "Web Developer",
      Company: "Inspire Clean Energy",
      Duration: "January 2023 - November 2023",
      Description: generateDescription(
        <>
          Worked as
          <span className="text-blue-500 ml-1">
            a Fullstack Developer handling both frontend and backend development
            for a range of dynamic and static websites.
          </span>{" "}
          Delivered end-to-end solutions tailored to client needs,
          <span className="text-blue-500 ml-1">
            including responsive UI design, API integration, and database
            management.
          </span>{" "}
          Gained hands-on experience collaborating directly with clients and
          managing project lifecycles independently.
        </>
      ),
    },
  ];

  return (
    <>
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
              Experience
            </h2>
          </AnimatedContent>
          {ExpItems.map((item, index) => (
            <ExpItem
              ImageUri={item.ImageUri}
              Company={item.Company}
              Role={item.Role}
              Duration={item.Duration}
              Description={item.Description}
              Reverse={index % 2 === 0}
            />
          ))}
        </div>
      </section>
    </>
  );
};
