import Container from '../../components/container/Container';
import useFetchDetails from '../../utils/useFetchDetails';
import { useParams } from 'react-router';
export default function ProductDetails() {
  const { productId } = useParams();
  const { details, error, loading } = useFetchDetails(productId);
  const product = details[0];

  return (
    <section>
      <Container>
        {error && <div>Error fetching data</div>}
        {loading && <div>Loading...</div>}
        {details.length > 0 && (
          <>
            <p>{product?.categoryId}</p>
            <p>{product?.description}</p>
            <p>{product?.title}</p>
            <p>{product?.image}</p>
            <p>{product?.percent}</p>
            <p>{product?.price}</p>
          </>
        )}
      </Container>
    </section>
  );
}
