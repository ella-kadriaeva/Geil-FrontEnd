
import ProductsList from '../../components/productsList/ProductsList';
import Filter from '../../components/filter/Filter';
import Container from '../../components/container/Container';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { initLikeDataFromLocalStorage } from '../../store/slices/likeSlice';

export default function Likes() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initLikeDataFromLocalStorage());
  }, []);
  const data = useSelector((state) => state.like.likesData);
  return (
    <section>
      <Container>
        <SectionTitle>Liked products</SectionTitle>
        <Filter />
        {data.length === 0 
        ?  <div>No liked products</div>
        :  <ProductsList data={data} />}
        
      </Container>
    </section>
  );
}
