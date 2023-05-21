import React from "react";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p style={{ textAlign: "center" }}>Current count: {count}</p>
      <div
        className="field-row"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(0)}>0</button>
      </div>
    </div>
  );
}
