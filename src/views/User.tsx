import { useEffect } from "react";
import Link from "../router/Link";

export default function User() {
  useEffect(() => {
    console.log("update User");
  }, []);

  return (
    <>
      <Link to="/">home</Link>
      <h1>User</h1>
    </>
  );
}
