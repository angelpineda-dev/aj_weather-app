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
    <section>
      <header>
        <h2>{name}</h2>
        <h3>{sys.country}</h3>
        <button onClick={handleFavorite}>Favorite</button>
      </header>
      <hr />
      <main>
        <section>
          <h3>{weather[0].main}</h3>
          <p>{weather[0].description}</p>
          <img
            src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
            alt="weather icon"
          />
        </section>
        <article>{main.temp}*C</article>
        <section>
          <div className="small-desc">
            <p>Sunrise: {sunriseTime}</p>
            <p>Sunset: {sunsetTime}</p>
          </div>
        </section>
        <button onClick={handleDetails}>More </button>
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
