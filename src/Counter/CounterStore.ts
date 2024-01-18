import { create } from "zustand";

type Store = {
  count: number;
  increment: () => void;
};

export const useCounterStore = create<Store>()((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));
