import "./App.css";
import { AboutMe } from "./components/about_me/AboutMe";
import Squares from "./components/animations/squares_bg/SquaresBackground";
import { Exprience } from "./components/experience/Exprience";
import { Header } from "./components/header/Header";
import { IntroContainer } from "./components/intro/IntroContainer";
import { ExpertiseBlock } from "./components/skillsBlock/ExpertiseBlock";
import { SkillsBlock } from "./components/skillsBlock/SkillsBlock";

function App() {
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
      </div>
    </>
  );
}

export default App;
