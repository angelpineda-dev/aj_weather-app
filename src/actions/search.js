import { helpHttp } from "../helpers/helpHttp";
import { types } from "../types/types";
import { endLoading, startLoading } from "./ui";

export const search = (city, error) => ({
  type: types.resultSearch,
  payload: {
    city,
    error,
  },
});

export const searchCity = (name) => {
  return (dispatch) => {
    dispatch(startLoading());

    const res = helpHttp().current(name);

    res.then(({ data, err }) => {
      dispatch(search(data, err));

      dispatch(endLoading());
    });
  };
};
