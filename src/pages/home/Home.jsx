import React from "react";
import MainSection from "../../components/mainSection/MainSection";
import SectionTitle from "../../components/sectionTitle/sectionTitle";
import Container from "../../components/container/Container";

export default function Home() {
  return (
    <>
      <MainSection />
      <Container>
        <SectionTitle>Categories</SectionTitle>
      </Container>
    </>
  );
}
