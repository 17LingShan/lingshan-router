import { useEffect } from "react";

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
