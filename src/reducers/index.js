import { combineReducers } from "redux";
import { bookingsReducer } from "./bookingsReducer";
import { authReducer } from "./authReducer";
import { flightsReducer } from "./flightsReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  bookings: bookingsReducer,
  flights: flightsReducer,
});

export default rootReducer;
