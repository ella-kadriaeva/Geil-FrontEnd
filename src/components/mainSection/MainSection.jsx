import React from "react";
import styles from "./MainSection.module.scss";
import ButtonLink from "../ui/ButtonLink";

export default function MainSection() {
  return (
    <section>
      <div className={styles.imageContainer}>
        <img className={styles.image} src="media/hero.jpg" alt="hero" />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Amazing Discounts on Garden Products!
          </h1>
          <ButtonLink className={styles.heroBtn} text={"Check out"} />
        </div>
      </div>
    </section>
  );
}
