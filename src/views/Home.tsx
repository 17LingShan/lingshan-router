import { useEffect } from "react";
import Link from "../router/Link";

export default function Home() {
  useEffect(() => {
    console.log("update home");
  }, []);
  return (
    <>
      <h1>Home</h1>
    </>
  );
}
