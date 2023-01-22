import { Component, For } from "solid-js";

const MOCK_CARD_ITEM = [
  { id: 1, value: "Item 1" },
  { id: 2, value: "Item 2" },
  { id: 3, value: "Item 3" },
];

const KanbanBoard: Component = (props) => {
  return (
    <div class="flex gap-2 w-full h-screen overflow-hidden">
      <div class="bg-neutral-900 text-gray-200 w-full max-w-[15rem] h-fit p-2">
        <p class="text-sm">Card Name</p>
        <div class="flex flex-col gap-2 my-3 max-h-[50rem] overflow-y-auto">
          <For each={MOCK_CARD_ITEM}>
            {(item, index) => <div class="bg-black/20 p-2">{item.value}</div>}
          </For>
        </div>
        <button class="bg-black/20 p-2 w-full">Add new item</button>
      </div>
    </div>
  );
};

export default KanbanBoard;
