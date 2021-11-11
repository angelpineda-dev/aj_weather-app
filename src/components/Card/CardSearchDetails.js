import React from "react";

const CardSearchDetails = ({ main, clouds, wind, coord, showDetails }) => {
  return (
    <article
      className={`card__details ${
        !showDetails ? "hide-details" : "show-details"
      } `}
    >
      <section>
        <h3>Temperature</h3>

        <div className="flex-row">
          <p>Feels like: {main.feels_like}°C</p>
          <p>Minimun: {main.temp_min}°C</p>
          <p>Maximun: {main.temp_max}°C</p>
        </div>
      </section>
      <section>
        <h3>Wind</h3>

        <div className="flex-row">
          <p>Wind: {wind.speed} km/h</p>
          <p>Wind direction: {wind.deg}°deg</p>
          <p>clouds: {clouds.all}%</p>
        </div>
      </section>
      <section>
        <h3>Location</h3>

        <div className="flex-row">
          <p>Longitud: {coord.lon} °</p>
          <p>Latitud: {coord.lat} °</p>
        </div>
      </section>
    </article>
  );
};

export default CardSearchDetails;
