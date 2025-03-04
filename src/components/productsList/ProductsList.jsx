import React from 'react';

import Container from '../container/Container';

export default function ProductsList({ data, loading, error }) {
  return (
    <Container>
      {loading && <div>Loading</div>}
      {data.length > 0 &&
        data.map((item) => (
          <p key={item.id}>
            {item.title} /{item.discontPrice}
          </p>
          // <Link to={`/product/${item.id}`} key={item.id}>
          //   {item.title}
          // </Link>
        ))}
      {error && <div>{error}</div>}
    </Container>
  );
}
