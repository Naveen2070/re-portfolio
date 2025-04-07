import "./App.css";
import PixelCard from "./components/animations/pixel_card/PixelCard";
import { Header } from "./components/header/Header";
import { IntroContainer } from "./components/intro/IntroContainer";

function App() {
  return (
    <>
      <Header />
      <div className="w-full h-full">
        <IntroContainer />
        <section
          id="about"
          className="h-fit flex justify-center items-center p-5 bg-black"
        >
          <PixelCard
            variant="blue"
            className="shadow-blue-500"
            width="w-[80%]"
            height="h-[800px]"
          >
            <div className="absolute">
              <p>I am naveen</p>
            </div>
          </PixelCard>
        </section>
      </div>
    </>
  );
}

export default App;
