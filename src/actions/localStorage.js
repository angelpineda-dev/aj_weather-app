import { types } from "../types/types";

const myStorage = localStorage;

const toggleCity = (cities) => ({
  type: types.toggleCityFavorites,
  payload: {
    cities,
  },
});

if (!myStorage.getItem("cities")) {
  const initialStorage = [];

  myStorage.setItem("cities", JSON.stringify(initialStorage));

  toggleCity(initialStorage);
}

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
