import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      {/* Add a logo here */}
      <img src="#" alt="" />
      {/* Logo End */}
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/Workshops">Workshops</Link>
      <Link to="/Events">Events</Link>
      <button>Get Started</button>
    </>
  );
}
