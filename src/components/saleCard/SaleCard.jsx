import React from 'react'
import styles from "./SaleCard.module.scss"
import IconsBlockHeader from '../iconsBlockHeader/IconsBlockHeader';

const BASE_URL = "http://localhost:3333";

const SaleCard = ({title, image, percent, price}) => {
    const discontPrice = Number((price * percent / 100).toFixed(2));
    const actualPrice = percent > 0 ? discontPrice : Number(price.toFixed(2));

  return (
    <div className={styles.productCard}>
        <IconsBlockHeader className={styles.icons}/>
    <div className={styles.productCard_image} >
        <img src={`${BASE_URL}${image}`} alt={`Product ${title}`} />
        
    </div>
    
    {percent && (
        <div className={styles.productCard_discount}>-{percent}%</div>
    )}
    <div className={styles.productCard_text} >
        <h3>{title}</h3>
        <div className={styles.productCard_text_priceBlock}>
           <p className={styles.productCard_text_actualPrice}>${actualPrice}</p>
         {percent && <p className={styles.productCard_text_price}>${price}</p>}   
        </div>

    </div>
</div>
  )
}

export default SaleCard

