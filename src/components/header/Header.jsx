import React from "react";
import { Link } from "react-router";
import Container from "../container/Container";
import NavMenu from "../navMenu/NavMenu";
import ButtonLink from "../ui/ButtonLink";
import styles from "./Header.module.scss";
import IconsBlockHeader from "../iconsBlockHeader/IconsBlockHeader";
import LogoThemeBlock from "../logoThemeBlock/LogoThemeBlock";
export default function Header() {
  return (
    <header>
      <Container>
        <div className={styles.headerWrapper}>
          <LogoThemeBlock />
          <div className={styles.navWrapper}>
            <ButtonLink
              to="/categories" //НУЖНО ВЫЯСНИТЬ КУДА ПЕРЕБРАСЫВАЕТ
              text="1 day discount"
              className={styles.discountBtn}
              type="link"
            />
            <NavMenu />
          </div>
          <IconsBlockHeader />
        </div>
      </Container>
    </header>
  );
}
