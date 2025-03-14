import React, { useEffect } from 'react';
import { Link } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../../utils/fetchClient';
import Container from '../../components/container/Container';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import { BASE_URL } from '../../constants/constants';
import styles from './Categories.module.scss';
import { CategoryCard } from '../../components/categoryCard/CategoryCard';

export default function Categories({limit}) {
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector(
    (state) => state.categories
  );
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <Container>
      {loading && <div>Loading</div>}
      <div className={styles.categoriesWrapper}>
        {categories &&
          categories.length > 0 &&
          categories.map((item) => (
            <CategoryCard
              title={item.title}
              image={item.image}
              id={item.id}
              key={item.id}
              limit={limit}
            />
          ))}
      </div>
      {error && <div>{error}</div>}
    </Container>
  );
}
