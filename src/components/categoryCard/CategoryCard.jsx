import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CategoryCard.module.scss';
import { useTheme } from '../../context/ThemeContext';
import { BASE_URL } from '../../constants/constants';

export const CategoryCard = ({ title, image, id, limit }) => {
  const limitClass = limit === 4 ? styles["limit-4"] : styles["limit-5"];
  const { isDarkTheme } = useTheme();
  return (
    <div className={`${styles.categoriesItemWrapper} ${limitClass}`}>
        <img
          src={`${BASE_URL}${image}`}
          alt={`Category ${title}`}
          className={styles.categoriesImage}
        />
      
      <div className={styles.categoriesTitle}>
        <Link className={styles.link} to={`/categories/${id}`}>
          <h3 className={styles.categoriesTitle}>{title}</h3>
        </Link>
      </div>
    </div>
  );
};
