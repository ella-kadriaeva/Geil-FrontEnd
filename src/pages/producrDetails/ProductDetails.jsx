import React from 'react';
import Container from '../../components/container/Container';
import ProductSection from '../../components/productSection/ProductSection';
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
          <ProductSection
            categoryId={product.categoryId}
            description={product.description}
            image={product.image}
            percent={product.percent}
            price={product.price}
            title={product.title}
            productId={product.id}
          />
        )}
      </Container>
    </section>
  );
}
