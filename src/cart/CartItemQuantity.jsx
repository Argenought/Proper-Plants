{
  /* function takes the values listed as a prop */
}
export default function CartItemQuantity({ item, removeFromCart, addToCart }) {
  return (
    <div>
      {/* button decreases item quantity */}
      <button onClick={() => removeFromCart(item)}>-</button>
      {/* current quantity in cart */}
      <span>{item.quantity}</span>
      {/* button increases item quantity */}
      <button onClick={() => addToCart(item)}>+</button>
    </div>
  );
}
