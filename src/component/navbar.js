import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { navEffect, toggleMenu } from "./../actions.jsx";
import omContext from "../context/omContext.js";

export default function Navbar() {
  useEffect(() => {
    navEffect();
  }, []);

  const { state, despatch } = useContext(omContext);

  return (
    <nav id="navBar">
      <div className="burgerMenu" onClick={toggleMenu}>
        <span></span>
      </div>
      <img src="./image/logo.png" alt="logo" id="logo" />
      <ul className="lgNav">
        <div className="backNavEffect"></div>
        <li>
          <Link to="/" data-left="0" data-width="1">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" data-left="78" data-width="3">
            Experties
          </Link>
        </li>
        <li>
          <Link to="/customer" data-left="185" data-width="2">
            Kunden
          </Link>
        </li>
        <li>
          <Link to="/contact" data-left="280" data-width="2">
            Kontact
          </Link>
        </li>
      </ul>
      <span className="navLogin">
        <Link to="/manage">Profile</Link>
        {state.user && (
          <a
            href="#!"
            onClick={() => {
              despatch({ type: "setUser", payload: { username: "" } });
              document.cookie =
                "userName='';expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;SameSite=None;Secure";
            }}
          >
            Sign out
          </a>
        )}
      </span>
    </nav>
  );
}
