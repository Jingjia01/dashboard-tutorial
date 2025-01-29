import { create } from "zustand";
import { persist } from "zustand/middleware";

type MenuState = {
    isOpen: boolean;
    toggleMenu: () => void;
};

export const useMenuStore = create<MenuState>()(
    persist<MenuState>(
        (set) => ({
            isOpen: false as boolean, 
            toggleMenu: () =>
                set((state) => ({
                    isOpen: !state.isOpen,
                })),
        }),
        { name: "menu-store" }
    )
);
