import React from 'react';
import Container from '../../components/container/Container';
import ProductDetailsSection from '../../components/productDetailsSection/ProductDetailsSection';
import useFetchDetails from '../../utils/useFetchDetails';
import { useParams } from 'react-router';
import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs';

const ProductDetails = () => {
  const { productId } = useParams();
  const { details, error, loading } = useFetchDetails(productId);
  const product = details[0];

  return (
    <section>
      <Container>
        <BreadCrumbs />
        {error && <div>Error fetching data</div>}
        {loading && <div>Loading...</div>}
        {details?.length > 0 && productId && (
          <ProductDetailsSection
            loading={loading}
            product={product}
            productId={productId}
          />
        )}
      </Container>
    </section>
  );
};

export default ProductDetails;
