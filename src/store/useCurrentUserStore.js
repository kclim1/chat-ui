import { create } from "zustand";

const useCurrentUserStore = create((set) => ({
  currentUser: 5,
  setCurrentUserId: (id) => set({ selectedUserId: id }),

  currentUserProfile: null,
  setCurrentUserProfile: (data) => set({ currentUserProfile: data }),
}));

export default useCurrentUserStore;
