import useFetchProducts from '../../utils/useFetchProducts';
import Container from '../container/Container';
import ProductsList from '../productsList/ProductsList';
import getRandomElements from '../../utils/randomMain';
import MainSectionTitle from '../mainSectionTitle/MainSectionTitle';

const SaleSection = () => {
  const { data, loading, error } = useFetchProducts('sale');
  const randomCards = getRandomElements(data).slice(0, 4);
  return (
    <section>
      <Container>
        <MainSectionTitle title="Sale" to="/sale" linkText="All sales" />
        {error && <div>Error fetching data</div>}
        {loading && <div>Loading...</div>}
        {data && <ProductsList data={randomCards} />}
      </Container>
    </section>
  );
};

export default SaleSection;
