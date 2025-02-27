import React from "react";
import styles from "./NavMenu.module.scss";
import NavigationLink from "../ui/navLink/NavigationLink";
const navigation = [
  { path: "/", label: "Main Page", exact: true },
  { path: "/categories", label: "Categories" },
  { path: "/products", label: "All products" },
  { path: "/sales", label: "All sales" }
];
export default function NavMenu() {
  const isActiveClass = ({ isActive }) =>
    isActive ? styles.active : styles.link;
  return (
    <nav className={styles.container}>
      {navigation.map(({ path, label }) => (
        <NavigationLink
          to={path}
          label={label}
          key={label}
          classNameLink={isActiveClass}
        />
      ))}
    </nav>
  );
}
