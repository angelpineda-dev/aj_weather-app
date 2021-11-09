import React from "react";

const CardSearchDetails = ({ main, clouds, wind, coord }) => {
  return (
    <article>
      <h3>Details</h3>
      <section>
        <p>Feels like: {main.feels_like}</p>
        <p>Minimun: {main.temp_min}</p>
        <p>Maximun: {main.temp_max}</p>
        <p>Humidity: {main.humidity}%</p>
        <p>Wind: {wind.speed} km/h</p>
        <p>Wind direction: {wind.deg}* deg</p>
        <p>clouds: {clouds.all}%</p>
      </section>
      <section>
        <h3>Location</h3>
        <p>Longitud: {coord.lon}</p>
        <p>Latitud: {coord.lat}</p>
      </section>
    </article>
  );
};

export default CardSearchDetails;
