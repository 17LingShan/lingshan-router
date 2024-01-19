import { useEffect, useState, ReactNode } from "react";
import RouterContext from "./RouterContext";

interface HashRouterProps {
  children: ReactNode;
}

export default function HashRouter({ children }: HashRouterProps) {
  const [hashLocation, setHashLocation] = useState<HashLocation>({
    pathname: window.location.hash.slice(1) || "/",
  });

  useEffect(() => {
    window.location.hash = window.location.hash.slice(1) || "/";

    window.addEventListener("hashchange", () => {
      setHashLocation({
        pathname: window.location.hash.slice(1),
      });
    });
  }, []);

  return (
    <RouterContext.Provider
      value={{
        location: hashLocation,
        history: {
          push: (to) => {
            window.location.hash = typeof to === "object" ? to.pathname : to;
          },
        },
      }}
    >
      {children}
    </RouterContext.Provider>
  );
}
