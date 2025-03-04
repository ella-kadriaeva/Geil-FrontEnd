
import Container from "../container/Container"
import SaleCard from '../saleCard/SaleCard'
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  errorProductRequest,
  startProductRequest,
  finishProductRequest
} from "../../store/slices/productSlice";
import { getAllProducts } from "../../utils/fetchClient";
import styles from "./SaleSection.module.scss"

const SaleSection = () => {
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
  }, []);

  return (
  <section>
    <Container>
      <div className={styles.cardsContainer}>
    {loading && <div>Loading...</div>}
      {products &&
        // data.length > 0 &&
        // products?.data.slice(0,4).map((item) => <SaleCard key={item.id} price={item.price} title={item.title}  image={item.image} percent={item.discont_price}/>)}
        data.filter((item) => item.discont_price > 0).slice(0, 4).map((item) => (
        <SaleCard
          key={item.id}
          price={item.price}
          title={item.title}
          image={item.image}
          percent={item.discont_price} /> ))}
        
      </div>
    </Container>
  </section>
  )
}

export default SaleSection



