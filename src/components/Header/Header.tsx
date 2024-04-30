import React, { useState } from 'react';
import './Header.sass';
import { TiShoppingCart } from "react-icons/ti";

const Header = () => {
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
        <div className="count">0</div>
      </button>
      
      <div className={`cart-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="paddings">
          <div className=" header-sidebar">
            <h2 className="title-sidebar">Carrinho <br /> de Compras</h2>
            <button className="close-button" onClick={toggleSidebar}>X</button>
          </div>

          <ul>
            <li>Produto 1</li>
          </ul>

          <div className="totalPrice">
            <h3>Total:</h3>
            <p>R$798</p>
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

// LÓGICA CARRINHO + SOMAR VALORES E ADICIONAR ITEM DO CARD NELE
// LIMPAR CÓDIGO
// TESTES