import { createEffect, createSignal } from "solid-js";

const useLocalStore = () => {
  const [state, setState] = createSignal<string[]>([]);

  const addItem = (value: string) => {
    const newData = [...state(), value];
    localStorage.setItem("kanbanBoard", JSON.stringify(newData));
    setState(newData);
  };

  createEffect(() => {
    const data = localStorage.getItem("kanbanBoard");

    if (data !== null) setState(JSON.parse(data));
  });

  return { state, addItem };
};

export default useLocalStore;
