import { useState } from "react";
import "./App.css";

/*
import { create } from 'zustand'

const useStore = create((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}))

function Counter() {
  const { count, inc } = useStore()
  return (
    <div>
      <span>{count}</span>
      <button onClick={inc}>one up</button>
    </div>
  )
}
*/

function App() {
  const [count, setCount] = useState(0);

  return <div></div>;
}

export default App;
