import { useEffect } from "react";

export default function Profile() {
  useEffect(() => {
    console.log("profile");
  }, []);
  return <h1>Profile</h1>;
}
