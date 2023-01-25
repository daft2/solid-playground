import { Component, For } from "solid-js";
import useLocalStore from "../hooks/useLocalStore";

const KanbanBoard: Component = (props) => {
  const { state, addItem } = useLocalStore();

  return (
    <div class="flex gap-2 w-full h-screen overflow-hidden">
      <div class="bg-neutral-900 text-gray-200 w-full max-w-[15rem] h-fit p-2">
        <p class="text-sm">Card Name</p>
        <div class="flex flex-col gap-2 my-3 max-h-[50rem] overflow-y-auto">
          <For each={state()}>
            {(item, index) => <div class="bg-black/20 p-2">{item}</div>}
          </For>
        </div>
        <button
          class="bg-black/20 p-2 w-full"
          onClick={() => addItem("Item 1")}
        >
          Add new item
        </button>
      </div>
    </div>
  );
};

export default KanbanBoard;
