import React from "react";
import MainSection from "../../components/mainSection/MainSection";
import SectionTitle from "../../components/sectionTitle/sectionTitle";
import Container from "../../components/container/Container";

export default function Home() {
  return (
    <>
      <MainSection />
    </>
    <div>
      <h1>Hero</h1>
      <Container>
      <SectionTitle>
        Categories
      </SectionTitle>
      </Container>
      <h2>Categories Section</h2>
      <h2>Form Section</h2>
      <h2>Product Section</h2>
      <Exemple />
      <Candy size="64" color="violet" />
    </div>
  );
}
