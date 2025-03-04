import React from "react";
import Container from "../container/Container";
import NavMenu from "../navMenu/NavMenu";
import ButtonLink from "../ui/ButtonLink";
import styles from "./Header.module.scss";
import Discount from "../DiscountForm/Discount.jsx";
export default function Header() {
  return (
    <header>
      <Container>
        <div className={styles.header}>
          <div className={styles.logo}>Logo</div>
        </div>
        <div className={styles.navWripped}>
          <ButtonLink
            to="/categories" //НУЖНО ВЫЯСНИТЬ КУДА ПЕРЕБРАСЫВАЕТ
            text="1 day discount"
            className={styles.discountBtn}
            type="link"
          />
          <NavMenu />
        </div>

        <div className={styles.container}></div>
      </Container>

    </header>

  );
}
