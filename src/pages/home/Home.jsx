import React from "react";
import SectionTitle from "../../components/sectionTitle/sectionTitle";
import Container from "../../components/container/Container";
import MainSection from "../../components/mainSection/MainSection";

export default function Home() {
  return (
    <>
     <MainSection />
      <Container>
        <SectionTitle>Categories</SectionTitle>
      </Container>
      <h2>Categories Section</h2>
      <h2>Form Section</h2>
      <h2>Product Section</h2>
    </>
  );
}
