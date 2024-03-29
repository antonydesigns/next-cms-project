import { create } from "zustand";

export const AuthStore = create((set) => ({
  loggedIn: false,
  setLoggedIn: (update) => set(() => ({ loggedIn: update })),
  logout: true,
  setLogout: (update) => set(() => ({ logout: update })),
}));
