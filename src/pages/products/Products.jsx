import React, { useEffect } from 'react';
import Container from '../../components/container/Container';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../store/slices/api/categories';
import { Link } from 'react-router';
const Products = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  // const { products, loading, error } = data;
  console.log(data);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <Container>
      {/* {loading && <div>Loading</div>}
      {products &&
        products.map((item) => (
          <p key={item.id}>{item.id}</p>
          // <Link to={`/categories/${item.id}`} key={item.id}>
          //   {item.title}
          // </Link>
        ))}
      {error && <div>{error}</div>} */}
    </Container>
  );
};

export default Products;
