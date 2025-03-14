import { Routes, Route } from 'react-router';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Categories from './pages/categories/Categories';
import CategoryProducts from './pages/categoryProducts/CategoryProducts';
import Products from './pages/products/Products';
import Sales from './pages/sales/Sales';

import NotFound from './pages/notFound/NotFound';
import './App.scss';

import Cart from './pages/cart/Cart';
import Likes from './pages/likes/Likes';
import ProductDetails from './pages/productDetails/ProductDetails';

import BurgerMenu from './components/burgerMenu/BurgerMenu';
import { useModal } from './context/ModalContext';
// import ProductDetails from './pages/productDetails/ProductDetails';
function App() {
  const { isMobile } = useModal();
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="categories" element={<Categories />} />
        <Route path="/categories/:id" element={<CategoryProducts />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/sale" element={<Sales />} />
        <Route path="cart" element={<Cart />} />
        <Route path="likes" element={<Likes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/*<Discount />*/}
      {isMobile && <BurgerMenu />}
      <Footer />
    </>
  );
}

export default App;
