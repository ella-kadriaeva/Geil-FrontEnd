import React from 'react';
import { useState } from 'react';
import styles from './ProductDetailsSection.module.scss';
import ButtonLink from '../ui/ButtonLink';
import { Heart } from 'lucide-react';
import { increment, decrement } from '../../store/slices/detailsSlice';
import { useDispatch, useSelector } from 'react-redux';
const BASE_URL = 'http://localhost:3333';
const ProductDetailsSection = ({
  description,
  image,
  price,
  discont_price,
  title,
  loading,
}) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.details.details[0]);
  const { value } = product;

  const [isExpanded, setIsExpanded] = useState(false);
  // Функция для переключения состояния
  const toggleDescription = () => {
    setIsExpanded((prevState) => !prevState);
  };
  const discountPercentage = Math.round(100 - (discont_price * 100) / price);
  const actualPrice = discont_price > 0 ? discont_price : price;
  return (
    <div className={styles.productContainer}>
      <div className={styles.titleWrapper_mobile}>
        <h2 className={styles.productTitle}>{title}</h2>
        <button className={styles.heartBtn}>
          <Heart />
        </button>
      </div>
      <div className={styles.productImg}>
        <img className={styles.img} src={`${BASE_URL}${image}`} alt={title} />
      </div>

      <div className={styles.productInfoWrapper}>
        <div className={styles.titleWrapper_tablet}>
          <h2 className={styles.productTitle}>{title}</h2>
          <button className={`${styles.heartBtn} product`}>
            <Heart />
          </button>
        </div>
        <div className={styles.flexWrapper}>
          <p className={styles.productPrice}>
            &#36;
            {actualPrice}
          </p>
          {discont_price > 0 && (
            <p className={styles.productDiscountPrice}>&#36;{price}</p>
          )}
          {discont_price > 0 && (
            <div className={styles.discountChip}>
              &#8722;{discountPercentage}&#37;
            </div>
          )}
        </div>

        <div className={styles.actionsWrapper}>
          <div className={styles.quantityControl}>
            <button
              type="button"
              className={styles.quantityBtn}
              onClick={() => dispatch(decrement())}
            >
              &#8722;
            </button>
            <div className={styles.quantityValue}>{value}</div>
            <button
              type="button"
              className={styles.quantityBtn}
              onClick={() => dispatch(increment())}
            >
              &#43;
            </button>
          </div>
          <ButtonLink
            type="button"
            text="Add to cart"
            className={styles.addToCartBtn}
          />
        </div>
        <div className={styles.productDescriptionWrapper_laptop}>
          <h3 className={styles.descriptionTitle}>Description</h3>
          <p className={styles.descriptionText}>
            {!loading && isExpanded
              ? description
              : `${description.slice(0, 200)}...`}
          </p>
          <span className={styles.moreBtn} onClick={toggleDescription}>
            {isExpanded ? 'hide' : 'Read more'}
          </span>
        </div>
      </div>

      <div className={styles.productDescriptionWrapper}>
        <h3 className={styles.descriptionTitle}>Description</h3>
        <p className={styles.descriptionText}>
          {!loading && isExpanded
            ? description
            : `${description.slice(0, 200)}...`}
        </p>
        <span className={styles.moreBtn} onClick={toggleDescription}>
          {isExpanded ? 'hide' : 'Read more'}
        </span>
      </div>
    </div>
  );
};

export default ProductDetailsSection;
