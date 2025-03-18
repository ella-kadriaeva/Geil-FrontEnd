import React, { useRef, useEffect } from 'react';
import styles from './BurgerMenu.module.scss';
import { useModal } from '../../context/ModalContext';
import { X } from 'lucide-react';
import ButtonLink from '../ui/ButtonLink';
import { useNavigate } from 'react-router-dom';
import { useDialog } from '../../context/DialogContect';

function preventScroll(event) {
  event.preventDefault();
}
export default function BurgerMenu() {
  const { isModalOpen, setModalOpen } = useModal();
  const { openDialog } = useDialog();
  const navigate = useNavigate(); // Хук для перенаправления
  const modalRef = useRef(false);
  const handleModal = () => {
    setModalOpen((prevState) => !prevState);
  };
  const handleClose = (url) => {
    setModalOpen(false); // Закрытие модального окна
    navigate(url); // Перенаправление на новую страницу
  };
  const handleDialog = () => {
    setModalOpen(false);
    openDialog(
      'type2',
      <span>A manager will contact you shortly to confirm your order.</span>
    );
    navigate('/'); // Перенаправление на новую страницу
  };
  useEffect(() => {
    if (modalRef.current) {
      if (isModalOpen) {
        modalRef.current.classList.remove('close');
        modalRef.current.classList.add('open');
        window.addEventListener('wheel', preventScroll, { passive: false });
      } else {
        modalRef.current.classList.remove('open');
        modalRef.current.classList.add('close');
        window.removeEventListener('wheel', preventScroll, { passive: false });
      }
    }
    return () => {
      window.removeEventListener('wheel', preventScroll, { passive: false });
    };
  }, [isModalOpen]);
  // if (!isModalOpen) return null;
  return (
    <div className="wrapper">
      <div
        className={` ${styles.backdrop} ${isModalOpen ? styles.block : styles.not}`}
      ></div>
      <div className="modal" ref={modalRef}>
        <div className={styles.closeBtnWrapper}>
          <button
            className={`button ${styles.closeBtn}`}
            onClick={handleDialog}
          >
            <X className={styles.svgBtn} />
          </button>
        </div>
        <nav className={styles.container}>
          <button className={styles.link} onClick={() => handleClose('/')}>
            Main Page
          </button>
          <button
            className={styles.link}
            onClick={() => handleClose('/categories')}
          >
            Categories
          </button>
          <button
            className={styles.link}
            onClick={() => handleClose('/products')}
          >
            All products
          </button>
          <button
            to="/sale"
            label="All sales"
            className={styles.link}
            onClick={() => handleClose('/sale')}
          >
            All sales
          </button>
          <ButtonLink
            text="1 day discount"
            className={styles.discountBtn}
            type="button"
            onClick={handleDialog}
          />
        </nav>
      </div>
    </div>
  );
}
