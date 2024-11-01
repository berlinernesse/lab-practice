import { React, useState } from "react";

function CodeSample1() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
    // setCount(count + 1); // What should this do?
  }

  function decreaseCount() {
    setCount(count - 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  );
}

export default CodeSample1;
