import React, { useState, useEffect, useMemo } from "react";
import {
  Grid,
  Header,
  Pagination,
  Dimmer,
  Loader,
  Message,
} from "semantic-ui-react";
import Flights from "../Flights/Flights";
import Filter from "./Filter";
import classes from "./home.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getFlights } from "../../actions";
const Home = () => {
  const dispatch = useDispatch();
  const flights = useSelector((state) => state.flights);
  const [activepage, setactivepage] = useState(1);

  useEffect(() => {
    dispatch(getFlights({ page: activepage }));
  }, [activepage]);
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
            <br />
            <br />
            <Filter />
          </Grid.Column>
          <Grid.Column width={10}>
            <Header as="h1" className={classes.center}>
              Welcome to Contegris Airways
            </Header>
            <br />
            <Header as="h3">All Flights Menu</Header>
            <br />
            {flights.isSuccess ? <Flights data={flights.data} /> : null}
            {flights.isLoading ? (
              <Dimmer>
                <Loader />
              </Dimmer>
            ) : null}
            {flights.isError ? (
              <Message error>Something went wrong</Message>
            ) : null}
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid>
        <Grid.Row centered>
          <br />
          <Pagination
            defaultActivePage={activepage}
            totalPages={5}
            onPageChange={(event) => setactivepage(event.target.value)}
          />
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Home;
