interface HashLocation {
  pathname: string;
}

// 一个history url形如 protocol://IP:port/path?paramA=123&disabled&paramB=loveYou
// 一个hash url形如 protocol://IP:port/#/path?paramA=123&disabled&paramB=loveYou

interface Path {
  // beginning with a '/' character.
  pathname: string;

  // beginning with a '?' character.
  searchParam: string;

  // beginning with a '#'character.
  hash: string;
}

interface Location<State> extends Path {
  // a value of any data associated with this location
  state: State;

  // a unique string associated with this location
  key: string;
}

export enum Action {
  POP = "POP",
  PUSH = "PUSH",
  REPLACE = "REPLACE",
}

export type RouteTo = HashLocation | string;

export interface HashHistory {
  push: (to: RouteTo) => void;
}

export interface HashState {
  location: HashLocation;
  history: HashHistory;
}
