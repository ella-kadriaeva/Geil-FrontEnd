import React, { useEffect } from 'react';
import styles from './ProductSection.module.scss';
import ButtonLink from '../ui/ButtonLink';
import { Heart } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../../store/slices/counterSlice';
const BASE_URL = 'http://localhost:3333';

const ProductSection = ({
  description,
  image,
  percent,
  price,
  title,
  productId,
}) => {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.counter);
  const discountPrice = (percent * price) / 100;
  console.log(value);
  return (
    <div className={styles.productCart}>
      <img
        className={styles.productImg}
        src={`${BASE_URL}${image}`}
        alt={title}
      />
      <div className={styles.productInfoWrapper}>
        <div className={styles.productTitleWrapper}>
          <h2 className={styles.productTitle}>{title}</h2>
          <Heart className={styles.svgLink} />
        </div>
        <div className={styles.flexWrapper}>
          <p className={styles.productPrice}>&#36;{price}</p>
          {percent && (
            <p className={styles.productDiscountPrice}>&#36;{discountPrice}</p>
          )}
          {percent && (
            <div className={styles.discountChip}>&#8722;{percent}&#65285;</div>
          )}
        </div>
        <div className={styles.flexWrapper}>
          <span
            className={styles.countBtn}
            onClick={() => dispatch(decrement())}
          >
            &#8722;
          </span>
          <span className={styles.countValue}>{value}</span>
          <span
            className={styles.countBtn}
            onClick={() => dispatch(increment())}
          >
            &#43;
          </span>
          <ButtonLink
            to="/products"
            text="Add to cart"
            className={styles.addBtn}
          />
        </div>
        <div className={styles.productDescriptionWrapper}>
          <h3 className={styles.descriptionTitle}>Description</h3>
          <p className={styles.descriptionText}>{description}</p>
          <span className={styles.moreBtn}>read more</span>
        </div>
      </div>
    </div>
  );
};
export default ProductSection;
