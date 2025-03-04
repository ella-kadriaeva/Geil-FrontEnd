import { Routes, Route } from "react-router";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Categories from "./pages/categories/Categories";
import Products from "./pages/products/Products";
import Sales from "./pages/sales/Sales";

import NotFound from "./pages/notFound/NotFound";
import Discount from "./components/DiscountForm/Discount.jsx";
import "./App.scss";
import Cart from "./pages/cart/Cart";
import Likes from "./pages/likes/Likes";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="categories" element={<Categories />} />
        <Route path="products" element={<Products />} />
        <Route path="sales" element={<Sales />} />
        <Route path="cart" element={<Cart />} />
        <Route path="likes" element={<Likes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/*<Discount />*/}
      <Footer />
    </>
  );
}

export default App;
