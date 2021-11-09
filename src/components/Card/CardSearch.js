import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCity } from "../../actions/localStorage";

import CardSearchDetails from "./CardSearchDetails";

const CardSearch = ({ city }) => {
  const [showDetails, setShowDetails] = useState(false);
  const dispatch = useDispatch();

  const { id, name, weather, wind, main, coord, clouds, sys } = city;

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
          <h3>{weather.main}</h3>
          <p>{weather.description}</p>
          <div>icon</div>
        </section>
        <article>{main.temp}*C</article>
        <section>
          <div className="small-desc">
            <p>Sunrise: {sys.sunrise} a.m.</p>
            <p>Sunset: {sys.sunset} p.m.</p>
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
