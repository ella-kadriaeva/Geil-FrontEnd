
import React from 'react';
import styles from './SaleCard.module.scss';
import { useTheme } from '../../context/ThemeContext';

const BASE_URL = 'http://localhost:3333';

const SaleCard = ({ title, image, percent, price }) => {
  const { isDarkTheme } = useTheme();
  const cardBackground = isDarkTheme
    ? styles.productCard_text_dark
    : styles.productCard_text_light;
  // Вычисляем скидку, чтобы вычесть ее из исходной цены
  const discountAmount = (price * percent) / 100;
  const discountPrice = price - discountAmount;  // Скидочная цена

  // Если скидка есть, то показываем цену со скидкой, иначе обычную цену
  const actualPrice = percent > 0 ? discountPrice : price;

  return (
    <div className={styles.productCard}>
      <div className={styles.productCard_image}>
        <img
          className={styles.image}
          src={`${BASE_URL}${image}`}
          alt={`Product ${title}`}
        />
      </div>
      {percent && (
        <div className={styles.productCard_discount}>
          -{Math.round(percent)}%
        </div>
      )}
      <div className={`${styles.productCard_text} ${cardBackground}`}>
        <h3>{title}</h3>
        <div className={styles.productCard_text_priceBlock}>
          <p className={styles.productCard_text_actualPrice}>
            ${actualPrice.toFixed(2)} {/* Показываем цену со скидкой */}
          </p>
          {percent && (
            <p className={styles.productCard_text_price}>
              ${price.toFixed(2)} {/* Показываем исходную цену */}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SaleCard;

