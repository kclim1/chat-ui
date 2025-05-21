import { create } from "zustand";

const useDummyCounter = create((set) => ({
  currentCount: 0,
  incrementCount: () =>
    set((state) => ({ currentCount: state.currentCount + 1 })),
}));

export default useDummyCounter;
