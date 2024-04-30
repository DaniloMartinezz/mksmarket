import React from 'react';
import Header from './components/Header/Header';
import ProductList from './hooks/productList';
import Footer from './components/footer/footer.tsx';

function App() {
  return (
    <div className="App">
      <Header />
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;