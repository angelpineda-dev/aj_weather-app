import gsap from "gsap/all";
import React, { useEffect, useRef, useState } from "react";
/* Redux */
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchCity } from "../../actions/localStorage";
/* Components */
import CardFavoriteIcon from "./CardFavoriteIcon";
import CardNoFavoriteIcon from "./CardNoFavoriteIcon";
import CardSearchDetails from "./CardSearchDetails";

const CardSearch = ({ city }) => {
  const [showDetails, setShowDetails] = useState(false);
  const storage = useSelector((state) => state.storage);
  const dispatch = useDispatch();
  const refCard = useRef();

  useEffect(() => {
    if (city) {
      gsap.from(refCard.current, {
        y: -50,
        duration: 0.75,
        ease: "power1",
        opacity: 0,
      });
    }
  }, [city]);

  const { id, name, weather, wind, main, coord, clouds, sys } = city;

  /* date configuration */
  const sunrise = new Date(sys.sunrise * 1000);
  const sunriseTime = sunrise.toLocaleTimeString();
  const sunset = new Date(sys.sunset * 1000);
  const sunsetTime = sunset.toLocaleTimeString();

  const isFavorite = storage.find((cityId) => cityId === id);

  /* events */
  const handleFavorite = () => {
    dispatch(fetchCity(id));
  };

  const handleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <section className="card" ref={refCard}>
      <header className="card__header">
        <h2>{name}</h2>
        <p>Country: {sys.country}</p>
        {!isFavorite ? (
          <CardFavoriteIcon handleFavorite={handleFavorite} />
        ) : (
          <CardNoFavoriteIcon handleFavorite={handleFavorite} />
        )}
      </header>
      <hr />
      <main className="card__main">
        <section className="card__main-top">
          <h3>{weather[0].main}</h3>
          <p>{weather[0].description}</p>
          <img
            className="card__weather-icon"
            src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
            alt="weather icon"
          />
        </section>
        <article className="card__main-temp">{main.temp}°C</article>
        <section className="card__main-bot">
          <p>
            Sunrise: <wbr /> {sunriseTime}
          </p>
          <p>Humidity: {main.humidity}%</p>
          <p>
            Sunset: <wbr />
            {sunsetTime}
          </p>
        </section>
        <button onClick={handleDetails} className="btn btn-details">
          Details
        </button>
      </main>
      <hr />

      <CardSearchDetails
        wind={wind}
        main={main}
        coord={coord}
        clouds={clouds}
        showDetails={showDetails}
      />
    </section>
  );
};

export default CardSearch;
