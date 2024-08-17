import { NavLink, Outlet } from "react-router-dom";
import css from "./MovieDetailsPage.module.css";
import clsx from "clsx";

export default function MovieDetailsPage() {
  return (
    <div>
      MovieDetailsPage
      <NavLink
        className={({ isActive }) =>
          clsx(css.buildLink, isActive && css.linkActive)
        }
        to="cast"
      >
        Cast
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          clsx(css.buildLink, isActive && css.linkActive)
        }
        to="reviews"
      >
        Reviews
      </NavLink>
      <Outlet />
    </div>
  );
}
