import { Component } from "solid-js";
import KanbanBoard from "./components/KanbanBoard";

const App: Component = () => {
  return (
    <div class="bg-neutral-800 text-neutral-100 w-screen h-screen items-center flex flex-col p-2">
      <KanbanBoard />
    </div>
  );
};

export default App;
