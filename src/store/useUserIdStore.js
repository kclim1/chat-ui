import { create } from "zustand";

const useUserIdStore = create((set) => ({
  selectedUserId: 1,
  setSelectedUserId: (id) => set({ selectedUserId: id }),
}));

export default useUserIdStore;
