interface HashLocation {
  pathname: string;
}

interface HashHistory {
  push: (to: HashLocation | string) => void;
}

interface HashState {
  location: HashLocation;
  history: HashHistory;
}
