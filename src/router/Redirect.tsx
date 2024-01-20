import { useContext, useEffect } from "react";
import RouterContext from "./RouterContext";

interface RedirectProps {
  to: RouteTo;
}

export default function Redirect({ to }: RedirectProps) {
  const context = useContext(RouterContext);

  useEffect(() => {
    context.history.push(to);
  }, []);

  return null;
}
