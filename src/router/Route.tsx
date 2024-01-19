import { ReactNode, useContext } from "react";
import RouterContext from "./RouterContext";

interface RouteProps {
  path: string;
  exact: boolean;
  element: ReactNode;
}

export default function Route({
  path,
  element: Element,
  exact = false,
}: RouteProps) {
  const { location } = useContext(RouterContext);
  const { pathname } = location;

  if (exact && path === pathname) {
    return <></>;
  }

  return null;
}
