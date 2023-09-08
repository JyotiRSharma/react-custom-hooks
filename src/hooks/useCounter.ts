import { useState } from "react";

type CounterActions = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

const useCounter = (
  initialValue: number = 0,
  value: number
): CounterActions => {
  const [count, setCount] = useState<number>(initialValue);
  const increment = (): void => {
    setCount((count) => count + value);
  };
  const decrement = (): void => {
    setCount((count) => count - value);
  };
  const reset = (): void => {
    setCount(initialValue);
  };

  return { count, increment, decrement, reset };
};

export default useCounter;
