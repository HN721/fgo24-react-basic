import React from "react";
import { useState } from "react";
import "./App.css";
export default function App() {
  const [num, setNum] = useState(0);
  function minus() {
    if (num > 0) {
      setNum(num - 1);
    }
  }
  function plus() {
    if (num < 10) {
      setNum(num + 1);
    }
  }
  return (
    <>
      <div className="container">
        <button
          onClick={() => {
            plus();
          }}
        >
          +
        </button>
        <p>{num}</p>
        <button onClick={() => minus()}>-</button>
      </div>
    </>
  );
}
