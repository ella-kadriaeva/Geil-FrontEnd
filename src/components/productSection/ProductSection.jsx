import React from 'react'
import styles from "./ProductSection.module.scss";
import { Heart } from "lucide-react";
import ButtonLink from '../ui/ButtonLink';

const product = {
    url: "/media/gallery.jpg",
    title: "Secateurs",
    description: `This high quality everyday secateur features a fully hardened and tempered, high-carbon steel blade for lasting sharpness. For comfort, the robust but lightweight alloy handles are covered in a soft grip, in a bright terracotta colour for maximum visibility in the garden. It won’t be easy to leave this pruner behind at the end of the day! Rubber cushion stops prevent jarring over repeated use, reducing hand strain for the user.
  This secateur cuts up to 2.5 cm diameter. Carrying RHS endorsement, possibly the highest accolade in gardening, for peace of mind this pruner comes with a ten-year guarantee against manufacturing defects.
  Supplied with replacement blade and spare spring. You may also be interested in our pack of two replacement springs.`,
    discount: 17,
    price: 199
  };
const ProductSection = () => {
    const discountPrice = (product.discount * product.price) / 100;
    const count = 1;
    return (
      <div className={styles.productCart}>
        <img className={styles.productImg} src={product.url} alt={product.title} />
        <div className={styles.productInfoWrapper}>
          <div className={styles.productTitleWrapper}>
            <h2 className={styles.productTitle}>{product.title}</h2>
            <Heart className={styles.svgLink} />
          </div>
          <div className={styles.flexWrapper}>
            <p className={styles.productPrice}>&#36;{product.price}</p>
            {product.discount && (
              <p className={styles.productDiscountPrice}>&#36;{discountPrice}</p>
            )}
            {product.discount && (
              <div className={styles.discountChip}>
                &#8722;{product.discount}&#65285;
              </div>
            )}
                 </div>
        <div className={styles.flexWrapper}>
          <span className={styles.countBtn}>&#8722;</span>
          <span className={styles.countValue}>{count}</span>
          <span className={styles.countBtn}>&#43;</span>
           <ButtonLink
                      to="/products"
                      text="Add to cart"
                      className={styles.addBtn}
                    />
        </div>
        <div className={styles.productDescriptionWrapper}>
          <h3 className={styles.descriptionTitle}>Description</h3>
          <p className={styles.descriptionText}>{product.description}</p>
          <span className={styles.moreBtn}>read more</span>
        </div>
      </div>
    </div>
  );
}
export default ProductSection;

// http://localhost:5174/products/product

// import React from 'react';
// import styles from "./ProductSection.module.scss";
// import { Heart } from "lucide-react";

// const product = {
//   url: "/media/gallery.jpg",
//   title: "Secateurs",
//   description: `This high quality everyday secateur...`,
//   discount: 17,
//   price: 199
// };

// const ProductSection = () => {
//   const discountPrice = (product.discount * product.price) / 100;
//   const count = 1;

//   const handleAddToCart = () => {
//     console.log(`${product.title} добавлен в корзину`);
//     alert(`${product.title} добавлен в корзину`);
//   };

//   return (
//     <div className={styles.productCart}>
//       <img className={styles.productImg} src={product.url} alt={product.title} />
//       <div className={styles.productInfoWrapper}>
//         <div className={styles.productTitleWrapper}>
//           <h2 className={styles.productTitle}>{product.title}</h2>
//           <Heart className={styles.svgLink} />
//         </div>
//         <div className={styles.flexWrapper}>
//           <p className={styles.productPrice}>&#36;{product.price}</p>
//           {product.discount && (
//             <>
//               <p className={styles.productDiscountPrice}>&#36;{discountPrice}</p>
//               <div className={styles.discountChip}>
//                 &#8722;{product.discount}&#65285;
//               </div>
//             </>
//           )}
//         </div>
//         <div className={styles.flexWrapper}>
//           <span className={styles.countBtn}>&#8722;</span>
//           <span className={styles.countValue}>{count}</span>
//           <span className={styles.countBtn}>&#43;</span>
//           <button className={styles.addBtn} onClick={handleAddToCart}>Add to cart</button>
//         </div>
//         <div className={styles.productDescriptionWrapper}>
//           <h3 className={styles.descriptionTitle}>Description</h3>
//           <p className={styles.descriptionText}>{product.description}</p>
//           <span className={styles.moreBtn}>read more</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductSection;

