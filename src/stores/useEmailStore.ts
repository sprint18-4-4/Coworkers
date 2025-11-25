import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface EmailState {
  email: string;
  isRemembered: boolean;
  setEmail: (email: string) => void;
  toggleRemember: () => void;
}

const useEmailStore = create<EmailState>()(
  persist(
    (set) => ({
      email: "",
      isRemembered: false,
      setEmail: (email) => set({ email }),

      toggleRemember: () =>
        set((state) => {
          if (state.isRemembered) {
            return { isRemembered: false, email: "" };
          }
          return { isRemembered: true };
        }),
    }),
    {
      name: "email-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useEmailStore;
