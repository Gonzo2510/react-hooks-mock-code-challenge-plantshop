import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  return (
    <ul className="cards">{plants}</ul>
  );
}

export default PlantList;
