import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from '../../components/container/Container';

import {
  fetchCategories,
} from '../../store/slices/api/categories';
import { Link } from 'react-router';

export default function Categories() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.categories);
  const { categories, loading, error } = data;

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <Container>
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
