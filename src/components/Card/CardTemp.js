import React from "react";

const CardTemp = ({ main }) => {
  return (
    <section className="card__section">
      <h3>Temperature</h3>
      <div>
        <p>Max: {main.temp_max} °C</p>
        <p>Min: {main.temp_min} °C</p>
        <p>Feels like: {main.feels_like} °C</p>
      </div>
    </section>
  );
};

export default CardTemp;
