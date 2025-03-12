import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CategoryCard.module.scss';
import { useTheme } from '../../context/ThemeContext';

export const CategoryCard = ({ title, image, id }) => {
  const { isDarkTheme } = useTheme();
  return (
    <div className={styles.categoriesItemWrapper}>
      <img
        src={image} //TODO: add from back + image
        alt="categories image"
        className={styles.categoriesImage}
      />
      <div className={styles.categoriesTitle}>
        <Link className={styles.link} to={`/categories/${id}`}>
          {title}
        </Link>
      </div>
    </div>
  );
};
