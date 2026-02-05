import PlantDetails from "./plantDetails";

export default function PlantList({ plants, addToCart }) {
  return (
    <ol className="plants">
      {plants.map((plant) => (
        <PlantDetails key={plant.id} plant={plant} addToCart={addToCart} />
      ))}
    </ol>
  );
}
