// Em CartItem.tsx
import React from 'react';
import './cartItem.sass';


interface CartItemProps {
    item: {
        id: number;
        name: string;
        price: number;
        photo: string;
    };
    quantity: number;
    onAddItem: () => void;
    onRemoveItem: () => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, quantity, onAddItem, onRemoveItem }) => {
    return (
        <div className="cart">
            <div className="cart-item">
                <img src={item.photo} alt={item.name} className="cart-item-photo" />
                <div className="cart-item-details">
                    <h3 className="cart-item-name">{item.name}</h3>
                    <p className="cart-item-price">R${Number(item.price).toFixed(2)}</p>
                </div>
                <div className="cart-item-actions">
                    <button className="cart-item-action-1" onClick={onRemoveItem}>-</button>
                    <span className="cart-item-quantity">{quantity}</span>
                    <button className="cart-item-action-2" onClick={onAddItem}>+</button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;