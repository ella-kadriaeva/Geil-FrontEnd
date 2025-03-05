import React from 'react';
import SectionTitle from '../../components/sectionTitle/sectionTitle';
import Container from '../../components/container/Container';
import MainSection from '../../components/mainSection/MainSection';
import SaleSection from "../../components/saleSection/SaleSection";
import Discount from "../../components/Discount/Discount.jsx";

export default function Home() {
  return (
    <>
      <MainSection />
      <Container>
        <SectionTitle>Categories</SectionTitle>
      </Container>
      <Discount />
      <SaleSection/>
    </>
  );
}
