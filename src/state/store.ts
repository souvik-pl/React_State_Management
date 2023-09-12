import { create } from "zustand";

const useStore = create((set) => ({
  count: 0,
  incrementByFive: () => set((state: any) => ({ count: state.count + 5 })),
}));

export default useStore;
