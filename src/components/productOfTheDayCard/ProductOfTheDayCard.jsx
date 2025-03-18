
import React from "react";
// import "./ProductOfTheDayCard.module.scss";
import getRandomOne from "../../utils/randomOne";
import { useSelector } from "react-redux";
import useFetchProducts from "../../utils/useFetchProducts";
import styles from './ProductOfTheDayCard.module.scss';
import { Heart } from 'lucide-react';
import ButtonLink from '../ui/ButtonLink';


const BASE_URL = "http://localhost:3333"; 

const ProductOfTheDayCard = () => {
  const { data, loading, error } = useFetchProducts('all');
  
  // Проверка на наличие данных
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading product</div>;
  if (!data || data.length === 0) return <div>No product available</div>;
  
  // Выбираем случайный товар
  const product = getRandomOne(data);

  // Если товар не выбран, показываем ошибку
  if (!product || product.length === 0) return <div>No product available</div>;

  // Извлекаем необходимые данные
  const { image, title, discont_price, price } = product[0]; 
  const discountPercentage = Math.round(100 - (discont_price * 100) / price);
  const actualPrice = discont_price > 0 ? discont_price:price;

  // Формируем полный URL для изображения
  const imageUrl = `${BASE_URL}${image}`;

    return (
      <div className={styles.productOfTheDayCard}>
        {/* Зеленая основная карточка */}
        <div className={styles.cardWrapper}>

          <div className={styles.cardImageWrapper}>
            <img src={imageUrl} className={styles.productImage} />
                      {/* Контейнер с изображением */} 
    
              { (discont_price > 0 ) && (
                  <div className={styles.discountChip}>
                    &#8722;{discountPercentage}&#37;
                  </div> )
              } 
              
                          
                                      
              <button className={`${styles.heartBtn} product`}>
                <Heart />
              </button>
          </div>
      
    

          {/* Карточка с названием, ценой и скидкой */}
          <div className={styles.cardDetails}>
            <h3 className={styles.productTitle}>{title}</h3>
                <div className={styles.priceContainer}>
                  <div className={styles.priceWrapper}>
                    <p className={styles.discontPrice}>
                        &#36;
                        {actualPrice}
                      </p>
                      {discont_price > 0 && (
                        <p className={styles.originalPrice}>&#36;{price}</p>
                      )}
                  </div>
                </div>
          </div>
        </div>

        {/* Кнопка вне контейнера */}
        <div className={styles.buttonWrapper}>
          <button className={styles.addToCart} type="button">Add to Cart</button>
        </div>
      </div>
  );
};

export default ProductOfTheDayCard;



