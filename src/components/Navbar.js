import { useState } from "react";
import Logo from "../hooks/Logo";
function NavBar({ children }) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}
export default NavBar;
