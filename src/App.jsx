import React, { useState } from "react";
import "./App.css";
import Button from "./components/button/Button";
import { evaluate } from "mathjs";

const App = () => {
  const [result, setResult] = useState("");
  const [text, setText] = useState("");

  const clickHandler = (item) => {
    setText((prev) => prev + item);
  };
  const calculate = () => {
    if ("+-*/".includes(text.charAt(text.length - 1)) || text.length === 0) {
      setResult("Error");
      return;
    }

    setResult(evaluate(text));
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>React Calculator</h1>
      <input type="text" value={text} disabled />
      <p>{result}</p>
      <div>
        <Button text={"7"} clickHandler={clickHandler} />
        <Button text={"8"} clickHandler={clickHandler} />
        <Button text={"9"} clickHandler={clickHandler} />
        <Button text={"+"} clickHandler={clickHandler} />
      </div>
      <div>
        <Button text={"4"} clickHandler={clickHandler} />
        <Button text={"5"} clickHandler={clickHandler} />
        <Button text={"6"} clickHandler={clickHandler} />
        <Button text={"-"} clickHandler={clickHandler} />
      </div>
      <div>
        <Button text={"1"} clickHandler={clickHandler} />
        <Button text={"2"} clickHandler={clickHandler} />
        <Button text={"3"} clickHandler={clickHandler} />
        <Button text={"*"} clickHandler={clickHandler} />
      </div>
      <div>
        <button
          onClick={() => {
            setText("");
            setResult("");
          }}
        >
          C
        </button>
        <Button text={"0"} clickHandler={clickHandler} />
        <button onClick={calculate}>=</button>

        <Button text={"/"} clickHandler={clickHandler} />
      </div>
    </div>
  );
};

export default App;
