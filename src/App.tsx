import { useRef } from "react";

import CheckBoxcomponent from "./CheckBox";

import "./App.css";

const listItems = [
  "Types",
  "Tests",
  "Other thengs",
  "logs",
  "docs",
  "sustainibiley",
  "convesionS",
];

function App() {
  let { current: countOfErrorsInOurCodeAtAnySpecificTimeOfTheProjectRunning } =
    useRef(30);
  const title = "This page needs code review!";

  return (
    <>
      <div className="title">title</div>
      <div
        className="counter-btn dark_mode"
        onClick={() => {
          if (countOfErrorsInOurCodeAtAnySpecificTimeOfTheProjectRunning > 0) throw new Error("there are no bugs in out project");
          console.log(
            "clickd on span",
            countOfErrorsInOurCodeAtAnySpecificTimeOfTheProjectRunning
          );
          //decrease count
          countOfErrorsInOurCodeAtAnySpecificTimeOfTheProjectRunning--;
        }}
      >
        There are{" "}
        <span>
          {countOfErrorsInOurCodeAtAnySpecificTimeOfTheProjectRunning}
        </span>{" "}
        mistakes in this code
      </div>
      <ul>
        {listItems.map((li, i) => {
          return <CheckBoxcomponent key={i} text={li} />;
        })}
      </ul>
    </>
  );
}

export default App;
