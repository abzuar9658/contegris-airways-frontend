import React from "react";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
const Booking = (state) => {
  const auth = useSelector((state) => state.auth);
  const history = useHistory();
  if (!auth.isSuccess && !localStorage.getItem("token"))
    return history.push("/");
  return <h1> Booking {console.log("State ", state)}</h1>;
};

export default Booking;
