import React from 'react'
import styles from "./SaleCard.module.scss"

const SaleCard = ({title, image, discont_price, actualPrice}) => {
  return (
    <div className={styles.productCard}>
    <div className={styles.productCard_image} onClick={handleClick}>
        {/* <img src={`${BASE_URL}${image}`} alt={`Product ${title}`} /> */}
    </div>
    {discont_price && (
        <div className={styles.productCard_discount}>{discont_price}</div>
    )}
    <div className={styles.productCard_text} >
        <h3>{title}</h3>
        <div className={styles.productCard_text_priceBlock}>
            <p className={styles.productCard_text_actualPrice}>{actualPrice}</p>
            
        </div>
    </div>
</div>
  )
}

export default SaleCard

