import { Children, ReactNode, useContext } from "react";
import RouterContext from "./RouterContext";
import { pathToRegexp } from "path-to-regexp";

interface SwitchProps {
  children: ReactNode;
}

export default function Switch({ children }: SwitchProps) {
  const context = useContext(RouterContext);

  let newChildren = Array.isArray(children)
    ? children
    : Children.toArray(children);

  for (let i = 0; i < newChildren.length; ++i) {
    const child = newChildren[i];
    const { path = "/", exact = false } = child.props;
    const { pathname } = context.location;
    let reg = pathToRegexp(path, [], { end: exact });

    if (reg.test(pathname)) {
      return child;
    }
  }

  return null;
}
