import React from 'react';
import SectionTitle from '../../components/sectionTitle/sectionTitle';
import Container from '../../components/container/Container';
import MainSection from '../../components/mainSection/MainSection';
import SaleSection from "../../components/saleSection/SaleSection";

export default function Home() {
  return (
    <>
      <MainSection />
      <Container>
        <SectionTitle>Categories</SectionTitle>
      </Container>

      <SaleSection/>
    </>
  );
}
