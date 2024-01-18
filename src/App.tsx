import "./App.css";
import { Counter, useCounterStore } from "./Counter";

function App() {
  const { count } = useCounterStore();
  return (
    <div>
      <Counter id="Counter 1" />
      <hr />
      <Counter id="Counter 2" />
      <hr />
      <span>ReadOnly: {count}</span>
    </div>
  );
}

export default App;
