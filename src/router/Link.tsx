import { ReactNode, useContext } from "react";
import RouterContext from "./RouterContext";

interface LinkProps {
  to: RouteTo;
  children: ReactNode;
}

export default function Link({ to, children }: LinkProps) {
  const context = useContext(RouterContext);

  return <a onClick={() => context.history.push(to)}>{children}</a>;
}
