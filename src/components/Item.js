import React, { useState } from "react";

function Item({ name, category }) {
  const [InCart, setInCart] = useState(false)
  const addProductToCart = () => {
    setInCart(!InCart)
  }
  return (
    <li className={InCart ? 'in-cart' : ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addProductToCart} className="add">{InCart ? 'Remove From Cart' : 'Add to Cart'}</button>
    </li>
  );
}

export default Item;
