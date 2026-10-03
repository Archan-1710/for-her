import { NavLink } from "react-router-dom";
import { Heart } from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="logo">
        <Heart size={18} fill="currentColor" />
        <span>For You</span>
      </NavLink>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/story">Us</NavLink>
        <NavLink to="/gallery">You 1</NavLink>
        <NavLink to="/gallery-2">You 2</NavLink>
        <NavLink to="/quiz">Little Game</NavLink>
        <NavLink to="/letter">My Heart</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
