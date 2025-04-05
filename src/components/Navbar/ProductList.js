import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from './productSlice'; // Adjust path as needed

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.filteredProducts);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      dispatch(setProducts(data));
    };
    fetchProducts();
  }, [dispatch]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {products.map((product) => (
        <div key={product.id} className="border p-2 rounded shadow">
          <img src={product.image} alt={product.title} className="w-full h-40 object-contain" />
          <h2 className="text-sm font-semibold mt-2">{product.title}</h2>
          <p className="text-gray-500">${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
