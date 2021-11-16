import React from "react";

const CardWind = ({ wind, clouds }) => {
  return (
    <section className="card__section">
      <h3>Wind</h3>

      <div>
        <p>Wind: {wind.speed} km/h</p>
        <p>Wind direction: {wind.deg}°deg</p>
        <p>clouds: {clouds.all}%</p>
      </div>
    </section>
  );
};

export default CardWind;
