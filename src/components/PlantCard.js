import React, { useState } from "react";

function PlantCard({ id, name, image, price }) {
  const [stock, setStock] = useState(true)

  function avalibility() {
    setStock(!stock)
  }

  return (
    <li key={id} className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {stock ? (
        <button className="primary" onClick={avalibility}>In Stock</button>
      ) : (
        <button onClick={avalibility}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
