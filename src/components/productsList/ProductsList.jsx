import React, { useEffect, useCallback, useMemo } from 'react';
import { Link } from 'react-router';
import styles from './ProductsList.module.scss';
import SaleCard from '../saleCard/SaleCard';
import { Heart, ShoppingBag } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useSelector, useDispatch } from 'react-redux';
import {
  addToCart,
  removeAllProductbyIdFromCart,
  initDataFromLocalStorage,
} from '../../store/slices/cartSlice';
import {
  addToWishlist,
  removeLikeProductbyIdFromCart,
  initLikeDataFromLocalStorage,
} from '../../store/slices/likeSlice';

export default function ProductsList({data, loading, error}) {
  const { isDarkTheme } = useTheme();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.cartData);
  const likeItems = useSelector((state) => state.like.likesData);
  const filters = useSelector((state) => state.filters);

  
  useEffect(() => {
    dispatch(initDataFromLocalStorage());
    dispatch(initLikeDataFromLocalStorage());
  }, []);

  const handleClickIcons = useCallback(
    (type, item) => {
      if (type === 'heart') {
        let isItLiked = likeItems.some((likeItems) => likeItems.id === item.id); // TODO: check if item in likes
        if (isItLiked) {
          dispatch(removeLikeProductbyIdFromCart(item.id));
        } else {
          dispatch(addToWishlist(item));
        }
      } else if (type === 'cart') {
        let isInCart = items.some((cartItem) => cartItem.id === item.id);
        if (isInCart) {
          dispatch(removeAllProductbyIdFromCart(item.id));
        } else {
          dispatch(addToCart(item));
        }
      }
    },
    [items, likeItems]
  );

  const filteredData = useMemo(() => {
    if (!Array.isArray(data)) return [];

    let filtered = data.filter((item) => {
      const priceFrom = filters.priceFrom ? Number(filters.priceFrom) : null;
      const priceTo = filters.priceTo ? Number(filters.priceTo) : null;

      const isDiscounted = filters.isDiscounted
        ? item.discountPercentage > 0 || item.discount_price < item.price
        : true;

      const matchesPrice =
        (!priceFrom || item.price >= priceFrom) &&
        (!priceTo || item.price <= priceTo);

      return matchesPrice && isDiscounted;
    });

    return [...filtered].sort((a, b) => {
      if (filters.sortBy === 'by default') {
        return 0;
      } else if (filters.sortBy === 'price: low-high') {
        return a.price - b.price;
      } else if (filters.sortBy === 'price: high-low') {
        return b.price - a.price;
      } else if (filters.sortBy === 'newest') {
        return new Date(b.date) - new Date(a.date);
      } else if (filters.sortBy === 'by default') {
        return data;
      } 
      return 0;
    });
  }, [data, filters]);

  return (
    <div className={styles.cardsContainer}>
      {filteredData.length > 0 ? (
        filteredData.map((item) => {
          let isInCart = items.some((cartItem) => cartItem.id === item.id);
          let isInLikes = likeItems.some((likeItem) => likeItem.id === item.id);
          return (
            <div key={item.id} className={styles.wrapperLink}>
              <div
                className={` ${styles.icons} ${isDarkTheme ? styles.icons_dark : styles.icons_light}`}
              >
                <button
                  name="heart"
                  className={` ${isInLikes ? styles.icons_active : ''}  `}
                  onClick={(e) => handleClickIcons(e.currentTarget.name, item)}
                >
                  <Heart className={styles.svgLink} />
                </button>
                <button
                  name="cart"
                  className={` ${isInCart ? styles.icons_active : ''}`}
                  onClick={(e) => handleClickIcons(e.currentTarget.name, item)}
                >
                  <ShoppingBag className={styles.svgLink} />
                </button>
              </div>
              <Link to={`/products/${item.id}`}>
                <SaleCard
                  key={item.id}
                  price={item.price}
                  title={item.title}
                  image={item.image}
                  discount_price={item.discont_price}
                  discountPercentage={item.discountPercentage}
                />
              </Link>
            </div>
          );
        })
      ) : (
        <h2>No items found</h2>
      )}
    </div>
  );
}
