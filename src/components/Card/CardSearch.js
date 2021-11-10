import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCity } from "../../actions/localStorage";

import CardSearchDetails from "./CardSearchDetails";

const CardSearch = ({ city }) => {
  const dispatch = useDispatch();

  const [showDetails, setShowDetails] = useState(false);

  const { id, name, weather, wind, main, coord, clouds, sys } = city;

  const sunrise = new Date(sys.sunrise * 1000);
  const sunriseTime = sunrise.toLocaleTimeString();
  const sunset = new Date(sys.sunset * 1000);
  const sunsetTime = sunset.toLocaleTimeString();

  const handleFavorite = () => {
    dispatch(fetchCity(id));
  };

  const handleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <section className="card">
      <header className="card__header">
        <h2>{name}</h2>
        <p>{sys.country}</p>
        <button onClick={handleFavorite} className="btn btn-favorite">
          <i className="far fa-star"></i>
        </button>
      </header>
      <hr />
      <main className="card__main">
        <section className="card__main-top">
          <h3>{weather[0].main}</h3>
          <p>{weather[0].description}</p>
          <img
            className="card__weather-icon"
            src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
            alt="weather icon"
          />
        </section>
        <article className="card__main-temp">{main.temp}°C</article>
        <section className="card__main-bot">
          <p>Sunrise: {sunriseTime}</p>
          <p>Sunset: {sunsetTime}</p>
        </section>
        <button onClick={handleDetails}>Details</button>
      </main>
      <hr />

      <CardSearchDetails
        wind={wind}
        main={main}
        coord={coord}
        clouds={clouds}
      />
    </section>
  );
};

export default CardSearch;
