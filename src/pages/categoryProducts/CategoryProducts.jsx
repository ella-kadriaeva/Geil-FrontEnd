import React, { useEffect } from 'react';
import ProductsList from '../../components/productsList/ProductsList';
import Filter from '../../components/filter/Filter';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Container from '../../components/container/Container';
import { fetchProductsByCategoryId } from '../../store/slices/api/categories';
import { setSelectedCategoryId } from '../../store/slices/productSlice';
export default function CategoryProducts() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { category, data } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(setSelectedCategoryId(id));
    dispatch(fetchProductsByCategoryId(id));
  }, [id]);
  return (
    <div>
      <Container>
        <h2>{category.title}</h2>
        <Filter />
        <ProductsList data={data} />
      </Container>
    </div>
  );
}
