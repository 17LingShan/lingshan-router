interface HashLocation {
  pathname: string;
}

type RouteTo = HashLocation | string;

interface HashHistory {
  push: (to: RouteTo) => void;
}

interface HashState {
  location: HashLocation;
  history: HashHistory;
}
