import React from "react";
import styles from "./Header.module.scss";
import NavMenu from "../navMenu/NavMenu";

export default function Header() {
  return (
    <>
      <NavMenu />
      <div className={styles.container}></div>
    </>
  );
}
