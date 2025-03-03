import styles from "./Cart.module.scss"
import ButtonLink from "../../components/ui/ButtonLink";
import Container from "../../components/container/Container";

export default function Cart() {

  return (
    <section className={styles.cart}>
      <Container>
        <div className={styles.cart_titleBlock}>
          <h2 ref={titleRef} className={styles.cart_title}>
            Shopping cart
          </h2>
          <ButtonLink
            to="/products"
            text="Back to the store"
            className={styles.cart_button__outlined}
          />
        </div>

        <div className="cart_empty">
          <p>Looks like you have no items in your basket currently.</p>
          <ButtonLink
            to="/products"
            text="Continue Shopping"
            className={styles.cart_button}
          />
        </div>
      </Container>
    </section>
  );
}