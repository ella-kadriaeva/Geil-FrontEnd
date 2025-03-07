import React from 'react';
import { Link } from 'react-router';
import styles from './ProductsList.module.scss';
import SaleCard from '../saleCard/SaleCard';
import IconsBlockHeader from '../iconsBlockHeader/IconsBlockHeader';
import { useTheme } from '../../context/ThemeContext';

export default function ProductsList({ data }) {
  const { isDarkTheme } = useTheme();
  const iconsBorder = isDarkTheme ? styles.icons_dark : styles.icons_light;
  return (
    <div className={styles.cardsContainer}>
      {data.length > 0 &&
        data.map((item) => (
          <div key={item.id} className={styles.wrapperLink}>
            <IconsBlockHeader className={`${styles.icons} ${iconsBorder}`} />
            <Link to={`/products/${item.id}`}>
              <SaleCard
                key={item.id}
                price={item.price}
                title={item.title}
                image={item.image}
                percent={item.discont_price}
              />
            </Link>
          </div>
        ))}
    </div>
  );
}
