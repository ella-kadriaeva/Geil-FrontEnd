import React from "react";
import { NavLink } from "react-router";
import styles from "./NavigationLink.module.scss";

export default function NavigationLink({ to, label, classNameLink }) {
  return (
    <NavLink
      className={styles.className || classNameLink}
      to={to}
      label={label}
    >
      {label}
    </NavLink>
  );
}
