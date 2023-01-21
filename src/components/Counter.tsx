import { Component, createSignal } from "solid-js";

const Counter: Component = () => {
  const [count, setCount] = createSignal(0);

  const handleIncrease = () => setCount(count() + 1);

  return (
    <div class="flex flex-col items-center justify-center">
      <p class="text-4xl font-bold">{count()}</p>
      <button onClick={handleIncrease}>increase counter</button>
    </div>
  );
};

export default Counter;
