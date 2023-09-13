import { create } from "zustand";

const useStore = create((set) => ({
  count: 0,
  incrementCount: () => set((state: any) => ({ count: state.count + 1 })),
}));

export default useStore;
