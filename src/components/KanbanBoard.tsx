import { Component, createEffect, createSignal, For } from "solid-js";

const KanbanBoard: Component = (props) => {
  const [items, setItems] = createSignal<string[]>([]);

  const addItem = (value: string) => {
    const newData = [...items(), value];
    localStorage.setItem("kanbanBoard", JSON.stringify(newData));
    setItems(newData);
  };

  createEffect(() => {
    const data = localStorage.getItem("kanbanBoard");

    if (data !== null) setItems(JSON.parse(data));
  });

  return (
    <div class="flex gap-2 w-full h-screen overflow-hidden">
      <div class="bg-neutral-900 text-gray-200 w-full max-w-[15rem] h-fit p-2">
        <p class="text-sm">Card Name</p>
        <div class="flex flex-col gap-2 my-3 max-h-[50rem] overflow-y-auto">
          <For each={items()}>
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
