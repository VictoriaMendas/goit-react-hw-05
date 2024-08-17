import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

export default function Navigation() {
  return (
    <header>
      <nav className={css.nav}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            clsx(css.buildLink, isActive && css.linkActive)
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/movies"
          className={({ isActive }) =>
            clsx(css.buildLink, isActive && css.linkActive)
          }
        >
          Movies
        </NavLink>
      </nav>
    </header>
  );
}
