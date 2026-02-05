import CartItem from "./CartItem";

{
  /* function declares props for if the items are inside the cart or not in the cart */
}
export default function Cart({ cart, removeFromCart, addToCart }) {
  return (
    <section className="cart">
      <h2>Cart</h2>
      {/* Declare message if the cart is empty */}
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {/* map cart to item */}
            {cart.map((item) => (
              // use item to fill all the values in CartItem
              <CartItem
                key={item.id}
                item={item}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            ))}
          </ul>
        </>
      )}
    </section>
  );
}
