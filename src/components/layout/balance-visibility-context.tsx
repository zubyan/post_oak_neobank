"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type BalanceVisibilityContextValue = {
  hidden: boolean;
  toggle: () => void;
};

const BalanceVisibilityContext = createContext<BalanceVisibilityContextValue | null>(null);

export function BalanceVisibilityProvider({ children }: { children: ReactNode }) {
  const [hidden, setHidden] = useState(false);
  return (
    <BalanceVisibilityContext.Provider value={{ hidden, toggle: () => setHidden((h) => !h) }}>
      {children}
    </BalanceVisibilityContext.Provider>
  );
}

export function useBalanceVisibility() {
  const ctx = useContext(BalanceVisibilityContext);
  if (!ctx) {
    throw new Error("useBalanceVisibility must be used within BalanceVisibilityProvider");
  }
  return ctx;
}
