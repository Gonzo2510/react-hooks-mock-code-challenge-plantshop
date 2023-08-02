import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState('')

  function addNewPlant(e) {
    console.log(e.target[0].value)
    console.log(e.target[1].value)
    console.log(e.target[2].value)
    
  }


  return (
    <main>
      <NewPlantForm onPlantAdd={addNewPlant} />
      <Search />
      <PlantList plants={plants} setPlants={setPlants}/>
    </main>
  );
}

export default PlantPage;
