import "./App.css";
import { Header } from "./components/header/Header";
import { IntroContainer } from "./components/intro/IntroContainer";

function App() {
  return (
    <>
      <Header />
      <div className="w-full h-full">
        <IntroContainer />
      </div>
    </>
  );
}

export default App;
