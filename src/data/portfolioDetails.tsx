import { JSX } from "react";

import { GooeyNavItem } from "../components/animations/grooey_nav/GooeyNav";
import { ExpProps } from "../components/experience/ExpItem";

import { calculateDateDifference } from "../utils/helpers/Ago";

import PlaceHolderImg from "../assets/images/placeholder.jpg";
import InspireLogo from "../assets/images/Inspire-textless.png";
import EnterOtLogo from "../assets/images/enterot.jpeg";
import FreeLancerLogo from "../assets/images/freelancer.png";
import { SkillProps } from "../components/skillsBlock/SkillContaniner";

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
  skills: {
    items: SkillProps[];
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
  skills: {
    items: [
      {
        Title: "Languages",
        Items: [
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
            color: "linear-gradient(135deg, #F7DF1E, #FACA22)",
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
            color: "linear-gradient(135deg, #007ACC, #3399FF)",
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
            color: "linear-gradient(135deg, #024B5D, #057BB9)",
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
            color: "linear-gradient(135deg, #00B4AB, #017C9E)",
            label: "Dart",
          },
          {
            icon: (
              <img
                alt="python"
                width={100}
                height={100}
                className="rounded-[10px]"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
              />
            ),
            color: "linear-gradient(135deg, #306998, #FFE873)",
            label: "Python",
          },
          {
            icon: (
              <img
                alt="java"
                width={100}
                height={100}
                className="rounded-[10px]"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
              />
            ),
            color: "linear-gradient(135deg, #ED1D25, #007396)",
            label: "Java",
          },
          {
            icon: (
              <img
                alt="kotlin"
                width={100}
                height={100}
                className="rounded-[10px]"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg"
              />
            ),
            color: "linear-gradient(135deg, #7F52FF, #FF8850)",
            label: "Kotlin",
          },
          {
            icon: (
              <img
                alt="csharp"
                width={100}
                height={100}
                className="rounded-[10px]"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
              />
            ),
            color: "linear-gradient(135deg, #68217A, #9B4F96)",
            label: "C#",
          },
        ],
      },
      {
        Title: "Frontend",
        Items: [
          {
            icon: (
              <img
                alt="html5"
                width={100}
                height={100}
                className="rounded-[10px]"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
              />
            ),
            color: "linear-gradient(135deg, #E44D26, #F16529)",
            label: "HTML5",
          },
          {
            icon: (
              <img
                alt="css3"
                width={100}
                height={100}
                className="rounded-[10px]"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
              />
            ),
            color: "linear-gradient(135deg, #264DE4, #2965F1)",
            label: "CSS3",
          },
          {
            icon: (
              <img
                alt="tailwindcss"
                width={100}
                height={100}
                className="rounded-[10px]"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
              />
            ),
            color: "linear-gradient(135deg, #15485F, #02ADCA)",
            label: "Tailwind CSS",
          },
          {
            icon: (
              <img
                alt="react"
                width={100}
                height={100}
                className="rounded-[10px]"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
              />
            ),
            color: "linear-gradient(135deg, #61DAFB, #0A84C1)",
            label: "React",
          },
          {
            icon: (
              <img
                alt="angular"
                width={100}
                height={100}
                className="rounded-[10px]"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg"
              />
            ),
            color: "linear-gradient(135deg, #DD0031, #C3002F)",
            label: "Angular",
          },
          {
            icon: (
              <img
                alt="vuejs"
                width={100}
                height={100}
                className="rounded-[10px]"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg"
              />
            ),
            color: "linear-gradient(135deg, #42b883, #35495e)",
            label: "Vue.js",
          },
          {
            icon: (
              <img
                alt="flutter"
                width={100}
                height={100}
                className="rounded-[10px]"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg"
              />
            ),
            color: "linear-gradient(135deg, #02569B, #30B5D4)",
            label: "Flutter",
          },
        ],
      },
      {
        Title: "Backend",
        Items: [
          {
            icon: (
              <img
                alt="express"
                width={100}
                height={100}
                className="rounded-[10px]"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
              />
            ),
            color: "linear-gradient(135deg, #000000, #555555)",
            label: "Express",
          },
          {
            icon: (
              <img
                alt="nestjs"
                width={100}
                height={100}
                className="rounded-[10px]"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg"
              />
            ),
            color: "linear-gradient(135deg, #7D001C, #C6003B)",
            label: "NestJS",
          },
          {
            icon: (
              <img
                alt="fastapi"
                width={100}
                height={100}
                className="rounded-[10px]"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg"
              />
            ),
            color: "linear-gradient(135deg, #05998B, #00D1B2)",
            label: "FastAPI",
          },
          {
            icon: (
              <img
                alt="django"
                width={100}
                height={100}
                className="rounded-[10px]"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg"
              />
            ),
            color: "linear-gradient(135deg, #092E20, #5A9F67)",
            label: "Django",
          },
          {
            icon: (
              <img
                alt="springBoot"
                width={100}
                height={100}
                className="rounded-[10px]"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg"
              />
            ),
            color: "linear-gradient(135deg, #378A00, #163517)",
            label: "Spring Boot",
          },
          {
            icon: (
              <img
                alt="ktor"
                width={100}
                height={100}
                className="rounded-[10px]"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ktor/ktor-original.svg"
              />
            ),
            color: "linear-gradient(135deg, #5C2D91, #C445FF)",
            label: "Ktor",
          },
          {
            icon: (
              <img
                alt="dotnetcore"
                width={100}
                height={100}
                className="rounded-[10px]"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg"
              />
            ),
            color: "linear-gradient(135deg, #512BD4, #8A48E5)",
            label: ".NET Core",
          },
          {
            icon: (
              <img
                alt="graphql"
                width={100}
                height={100}
                className="rounded-[10px]"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg"
              />
            ),
            color: "linear-gradient(135deg, #E535AB, #A800D8)",
            label: "GraphQL",
          },
        ],
      },
      {
        Title: "Database",
        Items: [
          {
            icon: (
              <img
                alt="postgresql"
                width={100}
                height={100}
                className="rounded-[10px]"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
              />
            ),
            color: "linear-gradient(135deg, #336791, #1F4E79)",
            label: "PostgreSQL",
          },
          {
            icon: (
              <img
                alt="sqlite"
                width={100}
                height={100}
                className="rounded-[10px]"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg"
              />
            ),
            color: "linear-gradient(135deg, #003B57, #5A7591)",
            label: "SQLite",
          },
          {
            icon: (
              <img
                alt="microsoftsqlserver"
                width={100}
                height={100}
                className="rounded-[10px]"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg"
              />
            ),
            color: "linear-gradient(135deg, #0078D4, #1F4E79)",
            label: "Microsoft SQL Server",
          },
          {
            icon: (
              <img
                alt="mongodb"
                width={100}
                height={100}
                className="rounded-[10px]"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
              />
            ),
            color: "linear-gradient(135deg, #1F2D1D, #3B9A29)",
            label: "MongoDB",
          },
          {
            icon: (
              <img
                alt="redis"
                width={100}
                height={100}
                className="rounded-[10px]"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg"
              />
            ),
            color: "linear-gradient(135deg, #D42C2F, #E22C2D)",
            label: "Redis",
          },
          {
            icon: (
              <img
                alt="firebase"
                width={100}
                height={100}
                className="rounded-[10px]"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg"
              />
            ),
            color: "linear-gradient(135deg, #FFCA28, #FF7043)",
            label: "Firebase",
          },
        ],
      },
      {
        Title: "Libraries/Frameworks",
        Items: [
          {
            icon: (
              <img
                alt="axios"
                width={100}
                height={100}
                className="rounded-[10px]"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg"
              />
            ),
            color: "linear-gradient(135deg, #5A9BD5, #0076A3)",
            label: "Axios",
          },
          {
            icon: (
              <img
                alt="bootstrap"
                width={100}
                height={100}
                className="rounded-[10px]"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
              />
            ),
            color: "linear-gradient(135deg, #563D7C, #6F42C1)",
            label: "Bootstrap",
          },
          {
            icon: (
              <img
                alt="consul"
                width={100}
                height={100}
                className="rounded-[10px]"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/consul/consul-original.svg"
              />
            ),
            color: "linear-gradient(135deg, #E14A4A, #9A2A2A)",
            label: "Consul",
          },
          {
            icon: (
              <img
                alt="electron"
                width={100}
                height={100}
                className="rounded-[10px]"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg"
              />
            ),
            color: "linear-gradient(135deg, #00204B, #3B5998)",
            label: "Electron",
          },
          {
            icon: (
              <img
                alt="framermotion"
                width={100}
                height={100}
                className="rounded-[10px]"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg"
              />
            ),
            color: "linear-gradient(135deg, #9B4DCA, #F06292)",
            label: "Framer Motion",
          },
          {
            icon: (
              <img
                alt="githubactions"
                width={100}
                height={100}
                className="rounded-[10px]"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg"
              />
            ),
            color: "linear-gradient(135deg, #6A4C9C, #F1C40F)",
            label: "GitHub Actions",
          },
          {
            icon: (
              <img
                alt="grpc"
                width={100}
                height={100}
                className="rounded-[10px]"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grpc/grpc-original.svg"
              />
            ),
            color: "linear-gradient(135deg, #4A77C1, #28A745)",
            label: "gRPC",
          },
          {
            icon: (
              <img
                alt="hibernate"
                width={100}
                height={100}
                className="rounded-[10px]"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hibernate/hibernate-original.svg"
              />
            ),
            color: "linear-gradient(135deg, #F4A300, #D4742E)",
            label: "Hibernate",
          },
          {
            icon: (
              <img
                alt="jetpackcompose"
                width={100}
                height={100}
                className="rounded-[10px]"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jetpackcompose/jetpackcompose-original.svg"
              />
            ),
            color: "linear-gradient(135deg, #3E9B8D, #1C4B76)",
            label: "Jetpack Compose",
          },
        ],
      },
      {
        Title: "Libraries/Frameworks",
        Items: [
          {
            icon: (
              <img
                alt="mongoose"
                width={100}
                height={100}
                className="rounded-[10px]"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg"
              />
            ),
            color: "linear-gradient(135deg, #4CAF50, #212121)",
            label: "Mongoose",
          },
          {
            icon: (
              <img
                alt="prisma"
                width={100}
                height={100}
                className="rounded-[10px]"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg"
              />
            ),
            color: "linear-gradient(135deg, #2D44A1, #9C4DE7)",
            label: "Prisma",
          },
          {
            icon: (
              <img
                alt="redux"
                width={100}
                height={100}
                className="rounded-[10px]"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg"
              />
            ),
            color: "linear-gradient(135deg, #764ABC, #E81C27)",
            label: "Redux",
          },
        ],
      },
      {
        Title: "Build Tools",
        Items: [
          {
            icon: (
              <img
                alt="gradle"
                width={100}
                height={100}
                className="rounded-[10px]"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gradle/gradle-original.svg"
              />
            ),
            color: "linear-gradient(135deg, #23A455, #1F362D)",
            label: "Gradle",
          },
          {
            icon: (
              <img
                alt="maven"
                width={100}
                height={100}
                className="rounded-[10px]"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg"
              />
            ),
            color: "linear-gradient(135deg, #D32F2F, #212121)",
            label: "Maven",
          },
        ],
      },
      {
        Title: "Testing",
        Items: [
          {
            icon: (
              <img
                alt="jest"
                width={100}
                height={100}
                className="rounded-[10px]"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg"
              />
            ),
            color: "linear-gradient(135deg, #3F162C, #8E00B0)",
            label: "Jest",
          },
          {
            icon: (
              <img
                alt="junit"
                width={100}
                height={100}
                className="rounded-[10px]"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/junit/junit-original.svg"
              />
            ),
            color: "linear-gradient(135deg, #D32F2F, #1976D2)",
            label: "JUnit",
          },
        ],
      },
    ],
  },
};
