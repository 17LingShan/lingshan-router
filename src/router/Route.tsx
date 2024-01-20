import { useContext } from "react";
import RouterContext from "./RouterContext";
import { pathToRegexp } from "path-to-regexp";

interface RouteProps {
  path: string;
  element: JSX.Element;
  exact?: boolean;
}

export default function Route({
  path,
  element,
  exact = false,
}: RouteProps): JSX.Element | null {
  const { location } = useContext(RouterContext);
  const { pathname } = location;
  const reg = pathToRegexp(path, [], { end: exact });

  if (reg.test(pathname)) {
    return element;
  }

  return null;
}
