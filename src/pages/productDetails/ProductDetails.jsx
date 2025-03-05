import React from 'react';
import { useParams } from 'react-router';
import { fetchProductById } from '../../utils/fetchClient';
import ProductsList from '../../components/productsList/ProductsList';

export default function ProductDetails() {
  const { res } = useSelector((state) => state);
  const { id } = useParams();
  console.log(res);
  useEffect(() => {
    fetchProductById(id);
  }, [id]);

  return (
    <div>
      <ProductsList />
    </div>
  );
}
