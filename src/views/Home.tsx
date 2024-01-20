import { useEffect } from "react";
import Link from "../router/Link";

export default function Home() {
  useEffect(() => {
    console.log("update home");
  }, []);
  return (
    <>
      <Link to="/user">User</Link>
      <h1>Home</h1>
    </>
  );
}
