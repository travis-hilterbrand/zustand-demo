import { useCounterStore } from "./CounterStore";

type CounterProps = {
  id: string;
};

export const Counter = ({ id }: CounterProps) => {
  const { count, increment } = useCounterStore();
  return (
    <div>
      <span>{id}</span>
      <div style={{ display: "block", marginBottom: 4 }} />
      <span>{count} </span>
      <button onClick={increment}>one up</button>
    </div>
  );
};
