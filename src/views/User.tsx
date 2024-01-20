import { useEffect } from "react";

export default function User() {
  useEffect(() => {
    console.log("update User");
  }, []);

  return (
    <>
      <h1>User</h1>
    </>
  );
}
