import React from "react";
import Container from "../container/Container";
import styles from "./Exemple.module.scss";

export default function Exemple() {
  return (
    <Container>
      <div className={styles.container}>"Exemple"</div>
    </Container>
  );
}
