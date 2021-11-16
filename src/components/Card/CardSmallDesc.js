import React from "react";

const CardSmallDesc = ({ weather }) => {
  return (
    <section className="card__weather-desc">
      <h3>{weather[0].main}</h3>
      <p>{weather[0].description}</p>
      <img
        src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        alt="weather icon"
      />
    </section>
  );
};

export default CardSmallDesc;
