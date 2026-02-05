import { useState } from "react";
import PlantList from "./plants/plantList";
import PLANTS from "./data";

export default function App() {
  return (
    <>
      <h1>Proper Plants</h1>
      <main>
        <PlantList plants={PLANTS} />
      </main>
    </>
  );
}
