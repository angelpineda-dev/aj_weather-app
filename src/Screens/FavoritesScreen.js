import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkStorage } from "../actions/localStorage";
import FavoriteCity from "../components/favorites/FavoriteCity";

const FavoriteScreen = () => {
  const storage = useSelector((state) => state.storage);

  // TODO: Crea un arreglo con los 2 id's y renderiza un componente que tenga un helpHttp y PUM!, divide el problema cuando no puedas con el.

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkStorage());
  }, [dispatch]);

  return (
    <>
      <h2 style={{ color: "white", textAlign: "center" }}>Favorite Cities</h2>
      {storage.map((id) => (
        <FavoriteCity id={id} key={id} />
      ))}
    </>
  );
};

export default FavoriteScreen;
