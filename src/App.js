import React from "react";
import Blog from "./components/Blog";

function App() {
  function clickMe() {
    console.log("I've been clicked")
  }

  function handleChange(e) {
    const { value } = e.target;
    console.log(value);
  }

  return (
    <div>

      <Blog />
      <input type="text" onChange={handleChange}></input>
      <button onClick={clickMe}>Click Me</button>

    </div>
  );
}

export default App;
