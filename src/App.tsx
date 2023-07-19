import ResultSummary from "./components/ResultSummary.jsx";
import "./App.css";

function App() {
  return (
    <div className="grid min-h-full items-start md:place-items-center md:content-center md:gap-y-5 md:p-5">
      <ResultSummary />
      <div className="text-center">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          className="whitespace-nowrap bg-gradient-to-b from-grad-light-royal-blue to-green-teal bg-clip-text font-bold text-transparent"
          href="#"
        >
          Wojciech Grochecki
        </a>
        .
      </div>
    </div>
  );
}

export default App;
