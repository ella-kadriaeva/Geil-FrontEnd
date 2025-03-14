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
          <div key={item.id} className={styles.categoriesItemWrapper}>
            <div className={styles.imageContainer}>
              <img
                src={`${BASE_URL}${item.image}`}
                alt={`Category ${item.title}`}
                className={styles.categoriesImage}
              />
            </div>
            <div className={styles.categoriesTitle}>
              <Link className={styles.link} to={`/categories/${item.id}`}>
                <span>{item.title}</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
  );
};

export default CategoryCard;
