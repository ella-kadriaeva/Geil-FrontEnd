import React from 'react';
import Container from '../../components/container/Container';
import MainSection from '../../components/mainSection/MainSection';
import SaleSection from '../../components/saleSection/SaleSection';
import Discount from '../../components/Discount/Discount.jsx';
import MainSectionTitle from '../../components/mainSectionTitle/MainSectionTitle.jsx';
import CategoryCard from '../../components/categoryCard/CategoryCard.jsx';
export default function Home() {
  return (
    <>
      <MainSection />
      <section>
        <Container>
          <MainSectionTitle
            title="Categories "
            to="/categories "
            text="All categories"
          />
          <CategoryCard limit={4} onCategoriesPage={false} />
        </Container>
      </section>
      <Discount />
      <SaleSection />
    </>
  );
}
