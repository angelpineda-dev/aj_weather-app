import React, { memo, useEffect, useRef, useState } from "react";
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
import CardTemp from "../Card/CardTemp";
import CardSun from "../Card/CardSun";
import CardLocations from "../Card/CardLocations";
import CardAdvancedDetails from "../Card/CardAdvancedDetails";
import CardSmallDesc from "../Card/CardSmallDesc";

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
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        dispatch(fetchCity(id));
      }
    });
  };

  const handleDetails = () => {
    setShowDetails(!showDetails);
  };

  const { name, weather, main, sys, coord } = data;

  return (
    <article className="card" ref={refFavCard}>
      <section className="card__header">
        <div>
          <h2>{name}</h2>
          <p>{sys.country}</p>
        </div>
        <p className="card__main-temp">{main.temp}°C</p>

        {!isFavorite ? (
          <CardFavoriteIcon handleFavorite={handleFavorite} />
        ) : (
          <CardNoFavoriteIcon handleFavorite={handleFavorite} />
        )}
      </section>

      <button onClick={handleDetails} className="btn-details">
        Details
      </button>
      <hr />

      <div
        className={`card__details ${
          !showDetails ? "hide-details" : "show-details"
        }`}
      >
        <CardSmallDesc weather={weather} />
        <CardTemp main={main} />
        <CardSun sys={sys} />
        <CardLocations coord={coord} />
        <CardAdvancedDetails main={main} />
      </div>
    </article>
  );
};

export default memo(FavoriteCity);
