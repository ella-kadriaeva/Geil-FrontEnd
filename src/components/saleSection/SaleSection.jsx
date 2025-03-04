import useFetchProducts from '../../utils/useFetchProducts';
import Container from '../container/Container';
import SaleCard from '../saleCard/SaleCard';
import styles from './SaleSection.module.scss';
import getRandomElements from '../../utils/randomMain';
const SaleSection = () => {
  const { data, loading, error } = useFetchProducts('sale');
  const randomCards = getRandomElements(data);

  return (
    <section>
      <Container>
        <div className={styles.cardsContainer}>
          {error && <div>Error fetching data</div>}
          {loading && <div>Loading...</div>}
          {data &&
            randomCards
              .slice(0, 4)
              .map((item) => (
                <SaleCard
                  key={item.id}
                  price={item.price}
                  title={item.title}
                  image={item.image}
                  percent={item.discont_price}
                />
              ))}
        </div>
      </Container>
    </section>
  );
};

export default SaleSection;
