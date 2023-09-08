import useCounter from "../hooks/useCounter";

const CounterOne = () => {
  const {count, increment, decrement, reset} = useCounter(0, 1);

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
