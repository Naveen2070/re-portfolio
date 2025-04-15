import { JSX } from "react";

import { GooeyNavItem } from "../components/animations/grooey_nav/GooeyNav";
import { ExpProps } from "../components/experience/ExpItem";

import { calculateDateDifference } from "../utils/helpers/Ago";

import PlaceHolderImg from "../assets/images/placeholder.jpg";
import InspireLogo from "../assets/images/Inspire-textless.png";
import EnterOtLogo from "../assets/images/enterot.jpeg";
import FreeLancerLogo from "../assets/images/freelancer.png";

type ContentType = {
  header: {
    name: string;
    menuItems: GooeyNavItem[];
  };
  intro: {
    greeting: string;
    whoAmI: string[];
    introduction: string;
  };
  about: {
    imageUri: string;
    details: JSX.Element;
  };
  exprience: {
    items: ExpProps[];
  };
};

const generateDescription = (content: React.ReactNode) => (
  <p className="text-neutral-300 mt-2">{content}</p>
);

export const Content: ContentType = {
  header: {
    name: "Naveen R",
    menuItems: [
      { label: "Home", href: "#" },
      { label: "About", href: "#about" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" },
    ],
  },
  intro: {
    greeting: "Hello! I'm Naveen",
    whoAmI: [
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
    ],
    introduction:
      "Welcome to my portfolio! As a passionate and dedicated professional, I thrive on solving challenges and creating impactful solutions in the digital realm. Whether it's developing sleek web applications, designing intuitive interfaces, or experimenting with creative animations, I love merging technology and innovation to bring ideas to life.",
  },
  about: {
    imageUri: PlaceHolderImg,
    details: (
      <>
        <p className="text-[14px] sm:text-[20px] md:text-[24px] mt-4 sm:mt-6 md:mt-8 bg-gradient-to-r from-gray-300 via-silver to-gray-500 text-transparent bg-clip-text select-none">
          <span className="wave text-3xl text-black">👋</span> Hi,
          <span className="text-blue-500 ml-2">I'm Naveen!</span> A passionate
          and driven software developer with a keen eye for detail and a love
          for creating innovative solutions. I have been working in the field
          for over
          <span className="text-blue-500 ml-2">
            {calculateDateDifference("01-01-2023")}
          </span>
          , I specialize in
          <span className="text-blue-500 ml-2">
            full-stack and cross-platform development, with a experience on
            backend development using Microservices architecture, GraphQL and
            RESTful APIs.
          </span>
        </p>
        <p className="text-[14px] sm:text-[20px] md:text-[24px] mt-4 sm:mt-6 md:mt-8 bg-gradient-to-r from-gray-300 via-silver to-gray-500 text-transparent bg-clip-text select-none">
          When I'm not immersed in coding, designing or problem-solving, you can
          find me
          <span className="text-blue-500 ml-2">
            watching anime, trying out indie games, exploring new technologies,
            tools, architectures or working on personal projects to expand my
            skillset
          </span>
          . I believe in
          <span className="text-blue-500 ml-2">continuous learning</span> and
          strive to stay at the forefront of the latest trends and advancements
          in my field. I am always eager to take on new challenges and
          contribute to the ever-evolving world of software development.
        </p>
      </>
    ),
  },
  exprience: {
    items: [
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
              HTML, CSS, SQL, and PostgreSQL to build a custom resource
              management software.
            </span>{" "}
            Contributed across the full development lifecycle—from initial
            implementation to deployment on the QA server—collaborating closely
            with the development team. Also supported post-deployment updates
            and feature enhancements.
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
              a Fullstack Developer handling both frontend and backend
              development for a range of dynamic and static websites.
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
    ],
  },
};
