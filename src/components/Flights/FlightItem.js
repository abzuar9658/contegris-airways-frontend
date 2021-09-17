import React, { useState, useEffect } from "react";
import { Button, Card, Icon, Image } from "semantic-ui-react";
import classes from "./flight.module.css";
import { useSelector } from "react-redux";
import AuthModal from "../Auth/AuthModal";
import { useHistory } from "react-router";
const FlightItem = ({ data }) => {
  const auth = useSelector((state) => state.auth);
  const [localAuth, setlocalAauth] = useState(auth);

  const history = useHistory();
  let vacantSeats = 0;
  useEffect(() => {
    setlocalAauth(auth);
  }, [auth]);

  if (data && data.seats) {
    vacantSeats = data.seats.reduce((acc, item) => {
      if (!item.isBooked) {
        acc += 1;
      }
      return acc;
    }, 0);
  }
  if (data) {
    return (
      <div>
        <Card>
          <img src={data.images[0]} className={classes.image} />
          <Card.Content textAlign="center">
            <Card.Header>
              {data.type.toUpperCase()} - {data.classType.toUpperCase()}
            </Card.Header>
            <br />
            <Card.Content>
              <span className="date">
                {data.from} - {data.to}
              </span>
            </Card.Content>
            <Card.Description>
              {data.price ? data.price : "Price not mentioned"}
            </Card.Description>
          </Card.Content>
          <Card.Content extra textAlign="center">
            <a>
              <Icon name="plane" />
              {vacantSeats} Vacant {vacantSeats > 1 ? "Seats" : "Seat"}
            </a>
          </Card.Content>
          <Card.Content textAlign="center">
            {console.log(!localStorage.getItem("token") || !auth.isSuccess)}
            {!localStorage.getItem("token") || !auth.isSuccess ? (
              <AuthModal
                component="Login"
                name="Book Now"
                color="red"
                redirect="/bookings"
              />
            ) : (
              <Button
                color="red"
                onClick={() =>
                  history.push({
                    pathname: "/bookings",
                    searh: "",
                    state: { data },
                  })
                }
              >
                {" "}
                Book Now!
              </Button>
            )}
          </Card.Content>
        </Card>
      </div>
    );
  }
  return null;
};

export default FlightItem;
