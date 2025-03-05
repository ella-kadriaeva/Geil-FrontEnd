import React from 'react';
import { Menu } from 'lucide-react';
import Container from '../container/Container';
import NavMenu from '../navMenu/NavMenu';
import ButtonLink from '../ui/ButtonLink';
import IconsBlockHeader from '../iconsBlockHeader/IconsBlockHeader';
import LogoThemeBlock from '../logoThemeBlock/LogoThemeBlock';
import styles from './Header.module.scss';
import { useModal } from '../../context/ModalContext';
export default function Header() {
  const { isMobile } = useModal();
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerWrapper}>
          <LogoThemeBlock />
          {!isMobile && (
            <div className={styles.navWrapper}>
              <ButtonLink
                to="/categories" //НУЖНО ВЫЯСНИТЬ КУДА ПЕРЕБРАСЫВАЕТ
                text="1 day discount"
                className={styles.discountBtn}
                type="link"
              />
              <NavMenu />
            </div>
          )}

          <div className={styles.icons}>
            <IconsBlockHeader />
            {isMobile && <Menu className={styles.svgBtn} />}
          </div>
        </div>
      </Container>
    </header>
  );
}
