import { types } from "../types/types";

const myStorage = localStorage;

const toggleCity = (cities) => ({
  type: types.toggleCityFavorites,
  payload: {
    cities,
  },
});

export const checkStorage = () => {
  return (dispatch) => {
    if (!myStorage.getItem("cities")) {
      const initialStorage = [];

      myStorage.setItem("cities", JSON.stringify(initialStorage));

      dispatch(toggleCity(initialStorage));
    } else {
      const initialState = myStorage.getItem("cities");

      dispatch(toggleCity(JSON.parse(initialState)));
    }
  };
};

// TODO: load cities in redux when app starts

export const fetchCity = (id) => {
  return (dispatch) => {
    const getCities = myStorage.getItem("cities");
    const currentCities = JSON.parse(getCities);

    const isCity = currentCities.find((cityId) => cityId === id);

    if (!isCity) {
      const newCities = [...currentCities, id];
      dispatch(toggleCity(newCities));

      myStorage.setItem("cities", JSON.stringify(newCities));
    } else {
      const newCities = currentCities.filter((cityId) => cityId !== id);
      dispatch(toggleCity(newCities));
      myStorage.setItem("cities", JSON.stringify(newCities));
    }
  };
};
