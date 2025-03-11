import styles from './Cart.module.scss';
import ButtonLink from '../../components/ui/ButtonLink';
import Container from '../../components/container/Container';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { initDataFromLocalStorage } from '../../store/slices/cartSlice';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import ItemInCart from '../../components/itemInCart/ItemInCart'
import Form from '../../components/form/Form';

export default function Cart() {
  const [id, setId] = useState(23);
  const dispatch = useDispatch();
  const { cartData } = useSelector((state) => state.cart);

  useEffect(() => {
    const fetchCartData = async () => {
      await dispatch(initDataFromLocalStorage());
    }
    
    fetchCartData();
  }, []);

  useEffect(() => {
    console.log(cartData)
  }, [cartData])
  return (
    <section className={styles.cart}>
      <Container>
        <div className={`${styles.cart_titleBlock}`}>
          <SectionTitle className={styles.cart_title}>
            Shopping cart
          </SectionTitle>
          <span className={styles.cart_titleLine}></span>
          <ButtonLink
            to="/products"
            text="Back to the store"
            className={`${styles.cart_button__outlined} ${styles.cart_button__outlined_inTitle}`}
          />
        </div>

        {cartData.length === 0 && (
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
        {cartData.length > 0 && (
          <div className={styles.cart_withItems}>
            <div className={styles.cart_items}>
              {cartData.map((item) => (
                <ItemInCart key={item.id || index} product={item.id} />
              ))}
            </div>
          </div>
        )}

        <ButtonLink
          to="/products"
          text="Back to the store"
          className={`${styles.cart_button__outlined} ${styles.cart_button__outlined_outside}`}
        />

        <div className={styles.cart_orderDetails}>
          <h3>Order Details</h3>

          <div className={styles.cart_orderPreis}>
            <p>items</p> //TODO: count items
            <div className={styles.total}>
              <p>Total</p> //TODO: discount status
            </div>
            <Form type="order" />
          </div>
        </div>
      </Container>
    </section>
  );
}
