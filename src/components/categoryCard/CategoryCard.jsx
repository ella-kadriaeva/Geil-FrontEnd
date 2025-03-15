import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../../utils/fetchClient';
import { BASE_URL } from '../../constants/constants';
import styles from './CategoryCard.module.scss';
import Container from '../container/Container';

const CategoryCard = ({ limit }) => {
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector(
    (state) => state.categories
  );

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!categories || categories.length === 0)
    return <div>No categories available.</div>;

  return (
    <div className={styles.categoriesWrapper}>
      {categories.slice(0, limit).map((item) => (
        <Link
          key={item.id}
          to={`/categories/${item.id}`}
        >
          <div className={styles.itemWrapper}>
            <div className={styles.imageContainer}>
              <img
                src={`${BASE_URL}${item.image}`}
                alt={`Category ${item.title}`}
                className={styles.categoriesImage}
              />
            </div>
            <div className={styles.categoriesTitle}>
              <span>{item.title}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryCard;
