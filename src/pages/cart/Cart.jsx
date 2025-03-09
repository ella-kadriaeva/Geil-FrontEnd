import styles from './Cart.module.scss';
import ButtonLink from '../../components/ui/ButtonLink';
import Container from '../../components/container/Container';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { initDataFromLocalStorage } from '../../store/slices/cartSlice';

export default function Cart() {
  const dispatch = useDispatch();
  const { cartData } = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(initDataFromLocalStorage());
  }, []);
  return (
    <section className={styles.cart}>
      <Container>
        <div className={`${styles.cart_titleBlock}`}>
          <h2 className={styles.cart_title}>Shopping cart</h2>
          <span className={styles.cart_titleLine}></span>
          <ButtonLink
            to="/products"
            text="Back to the store"
            className={`${styles.cart_button__outlined} ${styles.cart_button__outlined_inTitle}`}
          />
        </div>

        {!cartData && (
          <div className={styles.cart_empty}>
            <p className={styles.cart_emptyInfo}>
              Looks like you have no items in your basket currently.
            </p>
            <ButtonLink
              to="/products"
              text="Continue Shopping"
              className={styles.cart_button}
            />
          </div>
        )}
        {cartData && cartData.map((item) => <div key={item.id}>{item.id}</div>)}
        <ButtonLink
          to="/products"
          text="Back to the store"
          className={`${styles.cart_button__outlined} ${styles.cart_button__outlined_outside}`}
        />
      </Container>
    </section>
  );
}
