import React from 'react';
import ProductCard from '../components/ProductCard/productCard';
import { useProducts } from './useProducts';

function ProductList() {
  const { data, isLoading, error } = useProducts();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No data available</div>;

  return (
<div className="product-list">  
      {data.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;