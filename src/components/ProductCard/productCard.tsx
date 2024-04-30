import React from 'react';
import './productCard.sass';
import { FiShoppingBag } from "react-icons/fi";
import { motion } from 'framer-motion';

interface ProductProps {
    product: {
        id: number;
        name: string;
        brand: string;
        description: string;
        price: number;
        photo: string;
    };
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {
    return (
        <div className="product-card">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}>
                <div className="padding">
                    <img src={product.photo} alt={product.name} className="product-img" />

                    <div className="product-info">
                        <h3 className="product-name">{product.name}</h3>
                        <p className="price">R${Math.floor(product.price)}</p>
                    </div>

                    <p className="product-description">{product.description}</p>
                </div>
                <div className="product-checkout">
                    <FiShoppingBag className='style-checkout' />
                    <p className='style-checkout'>COMPRAR</p>
                </div>
            </motion.div>
        </div>
    );
};

export default ProductCard;