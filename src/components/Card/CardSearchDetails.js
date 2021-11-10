import React from "react";

const CardSearchDetails = ({ main, clouds, wind, coord }) => {
  return (
    <article className="card__details">
      <section>
        <h3>Weather</h3>
        <ul>
          <li>Feels like: {main.feels_like}°C</li>
          <li>Minimun: {main.temp_min}°C</li>
          <li>Maximun: {main.temp_max}°C</li>
          <li>Humidity: {main.humidity}%</li>
        </ul>
      </section>
      <section>
        <h3>Wind</h3>
        <ul>
          <li>Wind: {wind.speed} km/h</li>
          <li>Wind direction: {wind.deg}°deg</li>
          <li>clouds: {clouds.all}%</li>
        </ul>
      </section>
      <section>
        <h3>Location</h3>
        <ul>
          <li>Longitud: {coord.lon}</li>
          <li>Latitud: {coord.lat}</li>
        </ul>
      </section>
    </article>
  );
};

export default CardSearchDetails;
