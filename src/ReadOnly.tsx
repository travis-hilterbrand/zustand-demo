import { useCounterStore } from "./Counter";

export const ReadOnly = () => {
  const { count } = useCounterStore();
  return <span>ReadOnly: {count}</span>;
};
