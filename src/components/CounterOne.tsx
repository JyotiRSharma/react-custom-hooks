import { useState } from "react";

const CounterOne = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((count) => count + 1);
  };
  const decrement = () => {
    setCount((count) => count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
      </div>
    </>
  );
};

export default CounterOne;
