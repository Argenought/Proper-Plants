import { useState } from "react";
import PlantList from "./plants/plantList";
import PLANTS from "./data";
import Cart from "./cart/Cart";

export default function App() {
  const [cart, setCart] = useState([]);
  // checks the cart through the item id to determine if it's present in the cart
  const addToCart = (plant) => {
    const itemExists = cart.find((i) => i.id === plant.id);
    if (itemExists) {
      setCart(
        cart.map((item) =>
          item.id === plant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } //  if the item is already in the cart it updates the quantity instead ++
    else {
      const item = { ...plant, quantity: 1 };
      setCart([...cart, item]);
    }
  };
  // checks the cart through the item id to determine if it's present in the cart
  const removeFromCart = (itemToRemove) => {
    setCart(
      cart
        .map((item) =>
          item.id === itemToRemove.id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        ) //  does not remove item item if it's quantity is >0
        .filter((item) => item.quantity > 0),
    );
  };
  return (
    <>
      <h1>Proper Plants</h1>
      <main>
        {/* forgot to insert addToCart so button didnt work */}
        <PlantList plants={PLANTS} addToCart={addToCart} />
        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
          addToCart={addToCart}
        />
      </main>
    </>
  );
}
