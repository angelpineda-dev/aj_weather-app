import React, { useEffect, useRef, useState } from "react";
/* libraries */
import gsap from "gsap/all";
/* Redux */
import { useSelector, useDispatch } from "react-redux";
import { fetchCity } from "../../actions/localStorage";
/* Components */
import CardFavoriteIcon from "./CardFavoriteIcon";
import CardNoFavoriteIcon from "./CardNoFavoriteIcon";
import CardSmallDesc from "./CardSmallDesc";
import CardTemp from "./CardTemp";
import CardSun from "./CardSun";
import CardLocations from "./CardLocations";
import CardAdvancedDetails from "./CardAdvancedDetails";
import CardWind from "./CardWind";

const Card = ({ city }) => {
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

  const isFavorite = storage.find((cityId) => cityId === id);

  /* events */
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
        <p>Country: {sys.country}</p>
        {!isFavorite ? (
          <CardFavoriteIcon handleFavorite={handleFavorite} />
        ) : (
          <CardNoFavoriteIcon handleFavorite={handleFavorite} />
        )}
      </header>
      <hr />
      <main>
        <CardSmallDesc weather={weather} />
        <article className="card__main-temp">{main.temp}°C</article>
        <button onClick={handleDetails} className="btn btn-details ">
          Details
        </button>
        <hr />
      </main>

      <div
        className={`card__details ${
          !showDetails ? "hide-details" : "show-details"
        }`}
      >
        <CardTemp main={main} />
        <CardSun sys={sys} />
        <CardLocations coord={coord} />
        <CardWind wind={wind} clouds={clouds} />
        <CardAdvancedDetails main={main} />
      </div>
    </section>
  );
};

export default Card;
