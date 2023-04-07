import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [items, setItem] = useState([]);

  function handleInput(event) {
    const newItem = event.target.value;
    setInput(newItem);
  }
  function handleButton() {
    setItem((prevValue) => {
      return [...prevValue, input];
    });
    setInput("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleInput} type="text" value={input} />
        <button onClick={handleButton}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
