import { createContext, useState, useContext } from "react";


const SideBarContext = createContext(null);

export function useSideBarContext() {
  const value = useContext(SideBarContext);
  if (value == null) throw Error("Can't use outside of SidebarProvider");
  return value;
}

export function SideBarProvider({ children }) {
  const [isLargeOpen, setIsLargeOpen] = useState(true);
  const [isSmallOpen, setIsSmallOpen] = useState(false);

  function isScreenSmall() {
    return window.innerWidth < 1024;
  }

  function toggle() {
    if (isScreenSmall()) {
      setIsSmallOpen((s) => !s);
    } else {
      setIsLargeOpen((l) => !l);
    }
  }
  function close() {
    if (isScreenSmall()) {
      setIsSmallOpen(false);
    } else {
      setIsLargeOpen(false);
    }
  }
  return (
    <SideBarContext.Provider
      value={{
        isLargeOpen,
        isSmallOpen,
        toggle,
        close,
      }}
    >
      {children}
    </SideBarContext.Provider>
  );
}
