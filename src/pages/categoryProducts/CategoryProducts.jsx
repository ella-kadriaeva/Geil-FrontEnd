import { useParams } from 'react-router-dom';
import useFetchCategoryId from '../../utils/useFetchCategoryId';
import ProductsList from '../../components/productsList/ProductsList';
import Filter from '../../components/filter/Filter';
import Container from '../../components/container/Container';
import SectionTitle from '../../components/sectionTitle/sectionTitle';
export default function CategoryProducts() {
  const { id } = useParams();
  const { category, data } = useFetchCategoryId(id);

  return (
    <div>
      <Container>
        <SectionTitle>{category.title}</SectionTitle>
        <Filter />
        <ProductsList data={data} />
      </Container>
    </div>
  );
}
