import React from "react";
import {getProductById} from "../../utils/fetchClient"
import styles from "./ItemInCart.module.scss"
import { BASE_BACKEND_URL } from "../../utils/env";
import { X, Plus, Minus } from 'lucide-react';

export default function ItemInCart({product}) {
  const [productData, setProductData] = React.useState(null)

  React.useEffect(() => {
    const productInit = async () => {
      await getProductById(product).then((data) => {
        const res = data;
        setProductData(res[0])
      });
      console.log(productData);
    }
    
    productInit();
  }, [product]);

  React.useEffect(() => {
    console.log(productData);
  }
  , [productData]);
  
  return productData ? (
    <div className={styles.itemInCart}>
      <div className={styles.itemInCart_imageContainer}>
        <img
          src={`${BASE_BACKEND_URL}${productData.image}`}
          alt={productData.title}
        />
      </div>
      <div className={styles.itemInCart_infoContainer}>
        <div className={styles.itemInCart_titleBox}>
          <h3>{productData.title}</h3>
          <button onClick={() => console.log('close')}>
            <X size={28} color="black" />
          </button>
        </div>
        <div className={itemInCart_infoSubBlock}>
          <div className={styles.itemInCart_amountBox}>
            <button>
              <Minus size={24} />
            </button>
            <p>1</p>
            <button>
              <Plus size={24} />
            </button>
          </div>
          <div className={styles.itemInCart_priceBox}>
            <p>
              ${productData.price} <span>${productData.discont_price}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <p>Loading</p>
  );
}