import { types } from "../types/types";

const initialState = [];

export const localStorageReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.toggleCityFavorites:
      return action.payload.cities;

    default:
      return state;
  }
};
