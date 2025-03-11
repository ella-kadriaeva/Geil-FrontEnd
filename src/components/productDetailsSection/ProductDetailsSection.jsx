import React from 'react';
import { useState } from 'react';
import styles from './ProductDetailsSection.module.scss';
import ButtonLink from '../ui/ButtonLink';
import { Heart } from 'lucide-react';

const BASE_URL = 'http://localhost:3333';
const ProductDetailsSection = ({
  description,
  image,
  price,
  discont_price,
  title,
}) => {
  const count = 1;
  const [isExpanded, setIsExpanded] = useState(false);
  // Функция для переключения состояния
  const toggleDescription = () => {
    setIsExpanded((prevState) => !prevState);
  };
  const discountPercentage = Math.round(100 - (discont_price * 100) / price);

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
            {discont_price}
          </p>
          {discountPercentage > 0 && (
            <p className={styles.productDiscountPrice}>&#36;{price}</p>
          )}
          {discountPercentage > 0 && (
            <div className={styles.discountChip}>
              &#8722;{discountPercentage}&#37;
            </div>
          )}
        </div>

        <div className={styles.actionsWrapper}>
          <div className={styles.quantityControl}>
            <button type="button" className={styles.quantityBtn}>
              &#8722;
            </button>
            <div className={styles.quantityValue}>{count}</div>
            <button type="button" className={styles.quantityBtn}>
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
            {isExpanded ? description : `${description.slice(0, 200)}...`}
          </p>
          <span className={styles.moreBtn} onClick={toggleDescription}>
            {isExpanded ? 'hide' : 'Read more'}
          </span>
        </div>
      </div>

      <div className={styles.productDescriptionWrapper}>
        <h3 className={styles.descriptionTitle}>Description</h3>
        <p className={styles.descriptionText}>
          {isExpanded ? description : `${description.slice(0, 200)}...`}
        </p>
        <span className={styles.moreBtn} onClick={toggleDescription}>
          {isExpanded ? 'hide' : 'Read more'}
        </span>
      </div>
    </div>
  );
};

export default ProductDetailsSection;
