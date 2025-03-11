import React from 'react';
import { Menu } from 'lucide-react';
import Container from '../container/Container';
import NavMenu from '../navMenu/NavMenu';
import ButtonLink from '../ui/ButtonLink';
import { Link } from 'react-router';
import LogoThemeBlock from '../logoThemeBlock/LogoThemeBlock';
import styles from './Header.module.scss';
import { useModal } from '../../context/ModalContext';
import { Heart, ShoppingBag } from 'lucide-react';
import { useSelector } from 'react-redux';
export default function Header() {
  const { isMobile } = useModal();
  const likes = useSelector((state) => state.like.likesData);

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
                type="button"
              />
              <NavMenu />
            </div>
          )}

          <div className={styles.icons}>
            <Link to="/likes">
              <Heart className={styles.svgLink} />
              {likes.length > 0 ? <span className={styles.likesCounter}>{likes.length}</span> : null} 
              
            </Link>
            <Link to="/cart">
              <ShoppingBag className={styles.svgLink} />
            </Link>
            {isMobile && <Menu className={styles.svgBtn} />}
          </div>
        </div>
      </Container>
    </header>
  );
}
