export default function PlantDetails({ plant, addToCart }) {
  return (
    <li className="plant-details">
      <figure>{plant.image}</figure>
      <p>{plant.name}</p>
      <button onClick={() => addToCart(plant)}>Add to Cart</button>
    </li>
  );
}
