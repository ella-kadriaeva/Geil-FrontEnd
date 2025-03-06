import React, { useEffect } from 'react';
import { Link } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../../utils/fetchClient';
import Container from '../../components/container/Container';
import SectionTitle from '../../components/sectionTitle/SectionTitle';

export default function Categories() {
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector(
    (state) => state.categories
  );
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <Container>
      <SectionTitle />
      {loading && <div>Loading</div>}
      {categories &&
        categories.length > 0 &&
        categories.map((item) => (
          <Link to={`/categories/${item.id}`} key={item.id}>
            {item.title}
          </Link>
        ))}
      {error && <div>{error}</div>}
    </Container>
  );
}
