import React from "react";
import { NavLink } from "react-router";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="navbar-wrapper">
      <div className="navbar-content">
        <NavLink to="/" className="nav-logo">
          <div style={{ marginRight: 50 }}>
            <h1>ПОГОДА ВОТ ЩАС</h1>
            <p>Кыргызстан</p>
          </div>
        </NavLink>

        {/* Desktop Links */}
        <div className="nav-links">
          <p>
            <NavLink to="/settings" className="navbarLink">
              <i class="bi bi-gear"></i>
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}
