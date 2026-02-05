export default function PlantDetails({ plant }) {
  return (
    <li className="plant-details">
      <figure>{plant.image}</figure>
      <p>{plant.name}</p>
      <button>Add to Cart</button>
    </li>
  );
}
