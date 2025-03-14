import React from 'react';
import useFetchProducts from '../../utils/useFetchProducts';
import Container from '../../components/container/Container';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import ProductsList from '../../components/productsList/ProductsList';
import Filter from '../../components/filter/Filter';
export default function Products() {
  const { data, loading, error } = useFetchProducts('all');

  return (
    <Container>
      <SectionTitle>All Products</SectionTitle>
      <Filter />
      <ProductsList data={data} loading={loading} error={error} />
    </Container>
  );
}
