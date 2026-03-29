"use client";

import { createContext, useContext, useState, useCallback } from "react";

const SiteContext = createContext({
  booted: false,
  phase: "loading", // "loading" | "raw" | "booting" | "booted"
  setPhase: () => {},
});

export function SiteProvider({ children }) {
  const [phase, setPhaseState] = useState("loading");

  const setPhase = useCallback((newPhase) => {
    setPhaseState(newPhase);
  }, []);

  const booted = phase === "booted";

  return (
    <SiteContext.Provider value={{ booted, phase, setPhase }}>
      {children}
    </SiteContext.Provider>
  );
}

export function useSite() {
  return useContext(SiteContext);
}

export default SiteContext;
