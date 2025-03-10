import React from 'react';
import Container from '../../components/container/Container';
import ProductDetailsSection from '../../components/productDetailsSection/ProductDetailsSection';
import useFetchDetails from '../../utils/useFetchDetails';
import { useParams } from 'react-router';

const ProductDetails = () => {
  const { productId } = useParams();
  const { details, error, loading } = useFetchDetails(productId);
  const product = details[0];

  console.log('Raw product data:', product);

  return (
    <section>
      <Container>
        {error && <div>Error fetching data</div>}
        {loading && <div>Loading...</div>}
        {details?.length > 0 && product && (
          <ProductDetailsSection
            categoryId={product.categoryId}
            description={product.description}
            image={product.image}
            price={product.price}
            discont_percent={product.discont_price}
            title={product.title}
          />
        )}
      </Container>
    </section>
  );
};

export default ProductDetails;
