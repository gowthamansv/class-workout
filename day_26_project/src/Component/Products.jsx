import React from 'react';
import Cart from './Cart'

const Products = ({ products }) => {
    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>
                <Cart product={product} />
                </div>
            ))}
        </div>
    );
};

export default Products;
