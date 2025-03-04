import { Candy } from 'lucide-react';

import React from 'react';
import SectionTitle from '../../components/sectionTitle/sectionTitle';
import Container from '../../components/container/Container';
import MainSection from '../../components/mainSection/MainSection';

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
