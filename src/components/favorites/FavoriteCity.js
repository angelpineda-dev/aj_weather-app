import React, { useEffect, useState } from "react";
import { helpHttp } from "../../helpers/helpHttp";

const FavoriteCity = ({ id }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    helpHttp()
      .citiesById(id)
      .then((res) => setData(res.data));
  }, [id]);

  if (!data) return <p>Loading...</p>;

  const { name, weather, main, sys, coord } = data;
  console.log(data);

  const sunrise = new Date(sys.sunrise * 1000);
  const sunriseTime = sunrise.toLocaleTimeString();
  const sunset = new Date(sys.sunset * 1000);
  const sunsetTime = sunset.toLocaleTimeString();

  return (
    <article className="favcard">
      <section className="favcard__header">
        <h2>{name}</h2>
        <p>{sys.country}</p>
      </section>

      <section className="favcard__resumen">
        <p>{main.temp}</p>
        <p>{weather[0].main}</p>
        <img
          className="favcard__weather-icon"
          src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          alt="weather icon"
        />
      </section>

      <section>
        <h3>{weather[0].description}</h3>
        <p>temp max {main.temp_max}</p>
        <p>temp min {main.temp_min}</p>
        <p>feels {main.feels_like}</p>
      </section>

      <section>
        <p>sunrise {sunriseTime}</p>
        <p>sunset {sunsetTime}</p>
      </section>
      <section>
        <p>
          coords lat {coord.lat} long {coord.lon}
        </p>
        {main.sea_level && <p>Sea level {main.sea_level}</p>}
        {main.grnd_level && <p>Ground level {main.grnd_level}</p>}
        {main.humidity && <p>Humidity {main.humidity}</p>}
        {main.presure && <p>Humidity {main.presure}</p>}
      </section>
    </article>
  );
};

export default FavoriteCity;
