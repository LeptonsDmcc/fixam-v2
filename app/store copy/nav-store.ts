import { create } from "zustand";

interface NavStore {
  isSideMenuOpen: boolean;
  showMenu: () => void;
  closeMenu: () => void;
  isSidebarOpen: boolean;
  showSidebar: () => void;
  closeSidebar: () => void;
}

const useNavStore = create<NavStore>((set) => ({
  isSideMenuOpen: false,
  showMenu: () => set((store) => ({ ...store, isSideMenuOpen: true })),
  closeMenu: () => set((store) => ({ ...store, isSideMenuOpen: false })),
  isSidebarOpen: false,
  showSidebar: () => set((store) => ({ ...store, isSidebarOpen: true })),
  closeSidebar: () => set((store) => ({ ...store, isSidebarOpen: false })),
}));

export default useNavStore;
