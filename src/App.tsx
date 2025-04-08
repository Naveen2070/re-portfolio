import "./App.css";
import { AboutMe } from "./components/about_me/AboutMe";
import { Header } from "./components/header/Header";
import { IntroContainer } from "./components/intro/IntroContainer";

function App() {
  return (
    <>
      <Header />
      <div className="w-full h-full">
        <IntroContainer />
        <AboutMe />
      </div>
    </>
  );
}

export default App;
