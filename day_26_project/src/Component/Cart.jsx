import React from 'react';

function Cart({ product }) {
  return (
    <div>
      <img src={product.image} alt={product.title} />
      <p>{product.title}</p>
      <p>${product.price}</p>
      <button>Add item</button>
    </div>
  );
}

export default Cart;
