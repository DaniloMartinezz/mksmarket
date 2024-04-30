import React, { useState } from 'react';
import Header from './components/Header/Header.tsx';
import ProductCard from './components/ProductCard/productCard.tsx';
import { useProducts } from './hooks/useProducts';

function App() {
  const { data: products, isLoading, error } = useProducts();
  const [cartItems, setCartItems] = useState<{ [key: number]: { item: any, quantity: number } }>({});

  const totalPrice = Object.values(cartItems).reduce((acc, { item, quantity }) => acc + (item.price * quantity), 0);

  const addToCart = (itemId: number) => {
    setCartItems(prevItems => {
      const newItems = { ...prevItems };
      if (newItems[itemId]) {
        newItems[itemId].quantity += 1;
      } else {
        const productToAdd = products?.find(product => product.id === itemId);
        if (productToAdd) {
          newItems[itemId] = { item: productToAdd, quantity: 1 };
        }
      }
      return newItems;
    });
  };

  const removeFromCart = (itemId: number) => {
    setCartItems(prevItems => {
      const newItems = { ...prevItems };
      if (newItems[itemId]) {
        newItems[itemId].quantity -= 1;
        if (newItems[itemId].quantity === 0) {
          delete newItems[itemId];
        }
      }
      return newItems;
    });
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!products) return <div>No data available</div>;

  return (
    <div className="App">
      <Header cartItems={Object.values(cartItems)} totalPrice={totalPrice} onAddItem={addToCart} onRemoveItem={removeFromCart} />
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={() => addToCart(product.id)} />
        ))}
      </div>
    </div>
  );
}

export default App;