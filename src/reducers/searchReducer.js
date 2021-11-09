import { types } from "../types/types";

export const searchReducer = (state = {}, action) => {
  switch (action.type) {
    case types.resultSearch:
      return {
        city: action.payload.city,
        error: action.payload.error,
      };

    default:
      return state;
  }
};
