import React from "react";
import Card from "./Card";

const cities = [
  {
    id: 1,
    name: "Mexico",
  },
];

const CardContainer = () => {
  return (
    <div>
      <h2>Cities</h2>
      {cities.map((city) => (
        <Card key={city.id} title={city.name} />
      ))}
    </div>
  );
};

export default CardContainer;
