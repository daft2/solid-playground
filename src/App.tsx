import { Component } from "solid-js";
import Counter from "./components/Counter";

const App: Component = () => {
  return (
    <div class="bg-neutral-800 text-neutral-100 w-screen h-screen items-center justify-center flex flex-col">
      <Counter />
    </div>
  );
};

export default App;
