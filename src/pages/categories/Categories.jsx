import React, { useEffect } from 'react';
import { Link } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../../utils/fetchClient';
import Container from '../../components/container/Container';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import { BASE_URL } from '../../constants/constants';
import styles from './Categories.module.scss';
import { CategoryCard } from '../../components/categoryCard/CategoryCard';


export default function Categories() {
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
      <div className={styles.categoriesItemWrapper}>
        {categories &&
          categories.length > 0 &&
          categories.map((item) => (
            <Link
              to={`/categories/${item.id}`}
              key={item.id}
              className={styles.categoriesItem}
            >
              {/* {console.log(item.image)} */}
              <img
                className={styles.categoriesImage}
                src={`${BASE_URL}${item.image}`}
                alt={`Category ${item.title}`}
              />
              <h3 className={styles.categoriesTitle}>{item.title}</h3>
            </Link>
          ))}
      </div>
      {error && <div>{error}</div>}
    </Container>
  );
}
