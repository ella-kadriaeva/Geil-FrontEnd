import styles from "./Cart.module.scss"
import ButtonLink from "../../components/ui/ButtonLink";
import Container from "../../components/container/Container";
import ItemInCart from "../../components/itemInCart/ItemInCart";
import SectionTitle from "../../components/sectionTitle/SectionTitle";

export default function Cart() {
  const id = 17;

  return (
    <section className={styles.cart}>
      <Container>
        <div className={`${styles.cart_titleBlock}`}>
          <SectionTitle className={styles.cart_title}>Shopping cart</SectionTitle>
          <span className={styles.cart_titleLine}></span>
          <ButtonLink
            to="/products"
            text="Back to the store"
            className={`${styles.cart_button__outlined} ${styles.cart_button__outlined_inTitle}`}
          />
        </div>

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

        <div className={styles.cart_withItems}>
          <ItemInCart product={id} />
        </div>

        <ButtonLink
          to="/products"
          text="Back to the store"
          className={`${styles.cart_button__outlined} ${styles.cart_button__outlined_outside}`}
        />
      </Container>
    </section>
  );
}
