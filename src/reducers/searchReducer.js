import { types } from "../types/types";

export const searchReducer = (state = {}, action) => {
  switch (action.type) {
    case types.startSearch:
      return {
        ...state,
        loading: true,
      };

    case types.resultSearch:
      return {
        loading: false,
        city: action.payload.city,
        error: action.payload.error,
      };

    default:
      return state;
  }
};
