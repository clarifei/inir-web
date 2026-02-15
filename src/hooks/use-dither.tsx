import * as React from "react";

interface DitherContextType {
  enabled: boolean;
  toggle: () => void;
  setEnabled: (value: boolean) => void;
}

const DitherContext = React.createContext<DitherContextType | null>(null);

const STORAGE_KEY = "dither-enabled";

interface DitherProviderProps {
  children: React.ReactNode;
  defaultEnabled?: boolean;
}

export function DitherProvider({
  children,
  defaultEnabled = true,
}: DitherProviderProps) {
  const [enabled, setEnabledState] = React.useState(defaultEnabled);
  const [hydrated, setHydrated] = React.useState(false);

  React.useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored !== null) {
      setEnabledState(stored === "true");
    }
    setHydrated(true);
  }, []);

  React.useEffect(() => {
    if (hydrated) {
      localStorage.setItem(STORAGE_KEY, String(enabled));
    }
  }, [enabled, hydrated]);

  const toggle = React.useCallback(() => {
    setEnabledState((prev) => !prev);
  }, []);

  const setEnabled = React.useCallback((value: boolean) => {
    setEnabledState(value);
  }, []);

  return (
    <DitherContext.Provider value={{ enabled, toggle, setEnabled }}>
      {children}
    </DitherContext.Provider>
  );
}

export function useDither(): DitherContextType {
  const context = React.useContext(DitherContext);
  if (context === null) {
    throw new Error("useDither must be used within a DitherProvider");
  }
  return context;
}
