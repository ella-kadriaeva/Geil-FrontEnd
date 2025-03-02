import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "../container/Container";
import {
  errorProductRequest,
  startProductRequest,
  finishProductRequest
} from "../../store/slices/productSlice";
import { getAllProducts } from "../../utils/fetchClient";

export default function ProductsList({ selectedCategory }) {
  const products = useSelector((state) => state.products);
  const { data, loading, error } = products;

  const dispatch = useDispatch();
  useEffect(() => {
    const requestProducts = async () => {
      try {
        dispatch(startProductRequest());
        const data = await getAllProducts();
        dispatch(finishProductRequest(data));
      } catch (err) {
        dispatch(errorProductRequest(err.massage || err));
      }
    };
    requestProducts();
  }, [selectedCategory]);
  return (
    <Container>
      {loading && <div>Loading</div>}
      {products &&
        data.length > 0 &&
        products?.data.map((item) => <p key={item.id}>{item.title}</p>)}
    </Container>
  );
}
