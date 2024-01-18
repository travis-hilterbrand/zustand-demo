import "./App.css";
import { Counter } from "./Counter";
import { ReadOnly } from "./ReadOnly";

function App() {
  return (
    <div>
      <Counter id="Counter 1" />
      <hr />
      <Counter id="Counter 2" />
      <hr />
      <ReadOnly />
      <hr />
      <span>Static</span>
    </div>
  );
}

export default App;
