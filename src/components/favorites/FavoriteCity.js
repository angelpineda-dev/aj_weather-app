import React, { useEffect, useRef, useState } from "react";
/* redux */
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchCity } from "../../actions/localStorage";
/* helpers */
import { helpHttp } from "../../helpers/helpHttp";
/* components */
import CardFavoriteIcon from "../Card/CardFavoriteIcon";
import CardNoFavoriteIcon from "../Card/CardNoFavoriteIcon";
/* external libraries */
import gsap from "gsap/all";
import Swal from "sweetalert2";

const FavoriteCity = ({ id }) => {
  const [data, setData] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const storage = useSelector((state) => state.storage);
  const dispatch = useDispatch();
  const refFavCard = useRef();

  useEffect(() => {
    helpHttp()
      .citiesById(id)
      .then((res) => setData(res.data));
  }, [id]);

  useEffect(() => {
    if (data) {
      gsap.from(refFavCard.current, {
        y: 50,
        duration: 1,
        ease: "power1",
        opacity: 0,
      });
    }
  }, [data]);

  if (!data) return null;

  const isFavorite = storage.find((cityId) => cityId === id);

  const handleFavorite = () => {
    Swal.fire({
      title: "Are you sure?",
      text: `You will delete "${name}"`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //Swal.fire("Deleted!", "Your file has been deleted.", "success");
        dispatch(fetchCity(id));
      }
    });
  };

  const handleDetails = () => {
    setShowDetails(!showDetails);
  };

  const { name, weather, main, sys, coord } = data;

  const sunrise = new Date(sys.sunrise * 1000);
  const sunriseTime = sunrise.toLocaleTimeString();
  const sunset = new Date(sys.sunset * 1000);
  const sunsetTime = sunset.toLocaleTimeString();

  return (
    <article className="favcard" ref={refFavCard}>
      <section className="favcard__header">
        <div>
          <h3>{name}</h3>
          <p>{sys.country}</p>
        </div>
        <p>{main.temp}°C</p>
        {!isFavorite ? (
          <CardFavoriteIcon handleFavorite={handleFavorite} />
        ) : (
          <CardNoFavoriteIcon handleFavorite={handleFavorite} />
        )}
      </section>

      <button onClick={handleDetails} className="btn-details">
        Details
      </button>

      <div
        className={`favcard__details ${
          !showDetails ? "hide-details" : "show-details"
        } `}
      >
        <section className="favcard__weather-desc">
          <hr />
          <h3>{weather[0].main}</h3>
          <p>{weather[0].description}</p>
          <img
            className="favcard__weather-icon"
            src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
            alt="weather icon"
          />
        </section>

        <section className="favcard__weather-main">
          <p>Max {main.temp_max} °C</p>
          <p>Min {main.temp_min} °C</p>
          <p>Feels like {main.feels_like} °C</p>
        </section>

        <section className="favcard__weather-main">
          <p>Sunrise {sunriseTime}</p>
          <p>Sunset {sunsetTime}</p>
        </section>
        <section className="favcard__weather-main">
          <p>
            Coords: Latitude {coord.lat}°, longitude {coord.lon}°
          </p>
        </section>
        <section className="favcard__weather-main">
          {main.sea_level && <p>Sea level: {main.sea_level} hPa</p>}
          {main.grnd_level && <p>Ground level: {main.grnd_level} hPa</p>}
          {main.humidity && <p>Humidity: {main.humidity}%</p>}
          {main.presure && <p>Presure {main.presure} hPa</p>}
        </section>
      </div>
    </article>
  );
};

export default FavoriteCity;
