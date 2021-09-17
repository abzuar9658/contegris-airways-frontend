import * as actionTypes from "../actions/types";
const initial_state = {
  data: [],
  isLoading: null,
  isSuccess: null,
  isError: null,
  errorMessage: null,
};

export const bookingsReducer = (state = initial_state, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.BOOKINGS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.BOOKINGS_LOAD_SUCCESS:
      return {
        ...state,
        data: payload.bookings,
        isSuccess: true,
        isLoading: false,
        isError: false,
      };
    case actionTypes.BOOKINGS_LOAD_FAIL:
      return {
        ...state,
        isSuccess: false,
        isLoading: false,
        isError: true,
        errorMessage: payload,
      };
    default:
      return state;
  }
};
