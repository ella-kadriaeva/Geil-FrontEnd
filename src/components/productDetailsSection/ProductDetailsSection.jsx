import React from 'react';
import { useState } from 'react';
import styles from './ProductDetailsSection.module.scss';
import ButtonLink from '../ui/ButtonLink';
import { Heart } from 'lucide-react';
import { increment, decrement } from '../../store/slices/detailsSlice';
import { useDispatch, useSelector } from 'react-redux';
const BASE_URL = 'http://localhost:3333';

const formatPrice = (price) => {
  // Округляем до 2 знаков после запятой
  const roundedPrice = Number(price).toFixed(2);
  // Убираем .00 если число целое
  return roundedPrice.endsWith('.00') ? Math.round(price) : roundedPrice;
};
const ProductDetailsSection = ({
  description,
  image,
  price,
  discont_percent,
  title,
}) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.details.details[0]);
  const { value } = product;
  const percent = discont_percent;
  // Убрали Math.round чтобы сохранить десятичные знаки
  const finalPrice = price - (price * percent) / 100;
  const count = 1;
  const [isExpanded, setIsExpanded] = useState(false);

  // Функция для переключения состояния
  const toggleDescription = () => {
    setIsExpanded((prevState) => !prevState);
  };

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
          <p className={styles.productPrice}>
            &#36;
            {formatPrice(finalPrice)}
          </p>
          {percent > 0 && (
            <p className={styles.productDiscountPrice}>
              &#36;{formatPrice(price)}
            </p>
          )}
          {percent > 0 && (
            <div className={styles.discountChip}>&#8722;{percent}&#37;</div>
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
          <button type="button" className={styles.addToCartBtn}>
            Add to cart
          </button>
        </div>
        <div className={styles.productDescriptionWrapper}>
          <h3 className={styles.descriptionTitle}>Description</h3>
          <p className={styles.descriptionText}>
            {' '}
            {/* {isExpanded ? description : `${description.slice(0, 200)}...`} */}
          </p>
          <span className={styles.moreBtn} onClick={toggleDescription}>
            {isExpanded ? 'hide' : 'Read more'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSection;
