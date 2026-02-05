import CartItemQuantity from "./CartItemQuantity";
{
  /* function takes the same props as CartItemQuantity */
}
export default function CartItem({ item, removeFromCart, addToCart }) {
  return (
    <li className="cart-item">
      <div>
        {/* show the product like plantDetails */}
        {item.image} {item.name}
      </div>
      {/* inserting CartItemQuantity filling out every value */}
      <CartItemQuantity
        item={item}
        removeFromCart={removeFromCart}
        addToCart={addToCart}
      />
    </li>
  );
}
