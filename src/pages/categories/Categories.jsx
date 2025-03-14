import React from 'react';
import Container from '../../components/container/Container';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import CategoryCard from '../../components/categoryCard/CategoryCard';

export default function Categories() {
  return (
    <Container>
      <SectionTitle>Categories</SectionTitle>
      <CategoryCard limit={5} />
    </Container>
  );
}