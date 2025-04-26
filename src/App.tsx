import { useEffect } from "react";
import "./App.css";
import { AboutMe } from "./components/about_me/AboutMe";
import Squares from "./components/animations/squares_bg/SquaresBackground";
import { ContactBlock } from "./components/contact/ContactBlock";
import { Exprience } from "./components/experience/Exprience";
import { Header } from "./components/header/Header";
import { IntroContainer } from "./components/intro/IntroContainer";
import { ProjectBlock } from "./components/projects/ProjectBlock";
import { ExpertiseBlock } from "./components/skillsBlock/ExpertiseBlock";
import { SkillsBlock } from "./components/skillsBlock/SkillsBlock";
import { recordVisitor } from "./services/VisitorService";
import { getAll, getVisitorId } from "./utils/clientJs/ClientCore";

function App() {
  useEffect(() => {
    async function trackVisitor() {
      const visitorId = getVisitorId();
      const specs = getAll();
      console.log("Visitor ID:", visitorId);
      console.log("Visitor Specs:", specs);
      await recordVisitor(visitorId.toString(), specs);
    }

    trackVisitor();
  }, []);

  return (
    <>
      <Header />
      <div className="relative w-full h-full">
        <div className="fixed inset-0 -z-10">
          <Squares
            speed={0.5}
            squareSize={40}
            direction="diagonal"
            borderColor="#5A6571"
            hoverFillColor="#222"
          />
        </div>

        <IntroContainer />
        <AboutMe />
        <Exprience />
        <ExpertiseBlock />
        <SkillsBlock />
        <ProjectBlock />
        <ContactBlock />
      </div>
    </>
  );
}

export default App;
