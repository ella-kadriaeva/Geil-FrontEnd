import React from "react";
import ProductsList from "../../components/productsList/ProductsList";
import Filter from "../../components/filter/Filter";

export default function Products() {
  return (
    <div>
      <Filter />
      <ProductsList />
    </div>
  );
}
