import { useRef } from "react";

import CheckBoxcomponent from "./CheckBox";

import "./App.css";

const listItems = ["Types", "Tests", "Other thengs", "logs", "docs", "sustainibiley", "convesionS"];

function App() {
  let { current: count } = useRef(30);
  const title = "This page needs code review!";

  return (
    <>
      <div className="title">title</div>
      <div className="counter-btn dark_mode" onClick={() => {
        console.log("clickd on span", count);
        count--;
      }}>There are <span>{count}</span> mistakes in this code</div>
      <ul>
        {listItems.map((li, i) => {
          return <CheckBoxcomponent key={i} text={li} />
        })}
      </ul>
    </>
  );
}

export default App;
