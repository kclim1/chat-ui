import { create } from "zustand";

const useUserIdStore = create((set) => ({
  selectedUserId: 1,
  setSelectedUserId: (id) => set({ selectedUserId: id }),

  friendProfile: null,
  setFriendProfile: (data) => set({ friendProfile: data }),
}));

export default useUserIdStore;
