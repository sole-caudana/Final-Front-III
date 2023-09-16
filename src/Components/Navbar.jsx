import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../routes.js";
import { useDentistStates } from "./utils/global.context.jsx";

const Navbar = () => {
  const { themeState, themeDispatch } = useDentistStates();

  const switchTheme = () => {
    if (themeState.theme) {
      themeDispatch({ type: "SWITCH_DARK" });
    } else {
      themeDispatch({ type: "SWITCH_LIGHT" });
    }
  };

  return (
    <nav>
      <div className="odonto-logo">
        <h2 className="logo-d">D</h2>
        <h2 className="logo-h">H</h2>
        <h2>Odonto</h2>
      </div>
      <div className="nav-links">
        <Link to={routes.home}>
          <h3>Inicio</h3>
        </Link>
        <Link to={routes.contact}>
          <h3>Contacto</h3>
        </Link>
        <Link to={routes.favs}>
          <h3>Favoritos </h3>
        </Link>
        <div className="theme-toggle">
          <button onClick={switchTheme}>
            {themeState.theme ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;