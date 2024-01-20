import Link from "../router/Link";

export default function Nav() {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
      <Link to="/">home</Link>
      <Link to="/user">User</Link>
    </div>
  );
}
