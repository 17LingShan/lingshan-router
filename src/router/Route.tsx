import { ElementType, useContext } from "react";
import RouterContext from "./RouterContext";

interface RouteProps {
  path: string;
  element: ElementType;
  exact?: boolean;
}

export default function Route({
  path,
  element: Element,
  exact = false,
}: RouteProps) {
  const { location } = useContext(RouterContext);
  const { pathname } = location;

  if (path === pathname) {
    return <Element {...location} />;
  }
  return null;
}
