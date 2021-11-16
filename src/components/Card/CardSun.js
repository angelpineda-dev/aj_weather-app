import React from "react";

const CardSun = ({ sys }) => {
  const sunrise = new Date(sys.sunrise * 1000);
  const sunriseTime = sunrise.toLocaleTimeString();
  const sunset = new Date(sys.sunset * 1000);
  const sunsetTime = sunset.toLocaleTimeString();

  return (
    <section className="card__section">
      <h3>Sun time</h3>
      <div>
        <p>Sunrise: {sunriseTime}</p>
        <p>Sunset: {sunsetTime}</p>
      </div>
    </section>
  );
};

export default CardSun;
