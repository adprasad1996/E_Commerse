import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts, filterByCategory } from '../store/productSlice';
import CardComp from '../cardComp/CardComp';
import { useParams } from 'react-router-dom';

function RestrentCard() {
  const dispatch = useDispatch();
  const { categoryName } = useParams(); // from /category/:categoryName
  const { filteredProducts } = useSelector((store) => store.product);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      dispatch(setProducts(data));

      if (categoryName) {
        dispatch(filterByCategory(categoryName));
      } else {
        dispatch(filterByCategory('all'));
      }
    };

    fetchProducts();
  }, [dispatch, categoryName]);

  return (
    <div className="d-flex flex-wrap justify-content-center mt-4" style={{ marginLeft: '200px' }}>
       {filteredProducts.length === 0 ? (
    <p>No products found.</p>
  ) : (
    filteredProducts.map((item) => <CardComp key={item.id} obj={item} />)
  )}
</div>

  );
}

export default RestrentCard;
