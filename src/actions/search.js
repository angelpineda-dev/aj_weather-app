import { helpHttp } from "../helpers/helpHttp";
import { types } from "../types/types";

export const search = (city, error) => ({
  type: types.resultSearch,
  payload: {
    city,
    error,
  },
});

export const startSearch = () => ({
  type: types.startSearch,
});

export const endSearch = () => ({
  type: types.endSearch,
});

export const searchCity = (name) => {
  return (dispatch) => {
    dispatch(startSearch());

    const res = helpHttp().current(name);

    res.then(({ data, err }) => {
      dispatch(search(data, err));
    });
  };
};
