import React, { useState } from 'react';
import './Header.sass';
import { TiShoppingCart } from "react-icons/ti";
import CartItem from '../CartItem/cartItem';

interface HeaderProps {
  cartItems: any[];
  totalPrice: number;
  onAddItem: (itemId: number) => void;
  onRemoveItem: (itemId: number) => void;
}

const Header: React.FC<HeaderProps> = ({ cartItems, totalPrice, onAddItem, onRemoveItem }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="home-container">
      <div className="logo">
        <h1 className="titleText">MKS</h1>
        <h2 className="subtitleText">Sistemas</h2>
      </div>
      <button className="cart" onClick={toggleSidebar}>
        <TiShoppingCart />
        <div className="count">{cartItems.length}</div>
      </button>

      <div key="sidebar" className={`cart-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="paddings">
          <div className="header-sidebar">
            <h2 className="title-sidebar">Carrinho de Compras</h2>
            <button className="close-button" onClick={toggleSidebar}>X</button>
          </div>


          {Object.keys(cartItems).map(itemId => (
            <div className="cart-items">
              <CartItem
                key={itemId}
                item={cartItems[parseInt(itemId)].item}
                quantity={cartItems[parseInt(itemId)].quantity}
                onAddItem={() => onAddItem(parseInt(itemId))}
                onRemoveItem={() => onRemoveItem(parseInt(itemId))}
              />
            </div>)
          )}

          <div className="totalPrice">
            <h3>Total:</h3>
            <p>R${totalPrice.toFixed(2)}</p>
          </div>
        </div>
        <div className="sidebarFooter">
          <h3>Finalizar Compra</h3>
        </div>
      </div>
    </div>
  );
};

export default Header;