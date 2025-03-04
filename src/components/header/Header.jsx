import React from 'react';
import { Menu } from 'lucide-react';

import NavMenu from '../navMenu/NavMenu';
import ButtonLink from '../ui/ButtonLink';
import IconsBlockHeader from '../iconsBlockHeader/IconsBlockHeader';
import LogoThemeBlock from '../logoThemeBlock/LogoThemeBlock';
import styles from './Header.module.scss';
import { useModal } from '../../context/ModalContext';
import Container from '../container/Container';
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
