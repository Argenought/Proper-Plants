import PlantDetails from "./plantDetails";

export default function PlantList({ plants }) {
  return (
    <ol className="plants">
      {plants.map((plant) => (
        <PlantDetails key={plant.id} plant={plant} />
      ))}
    </ol>
  );
}
