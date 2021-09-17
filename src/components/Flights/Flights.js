import React from "react";
import { Grid, Pagination } from "semantic-ui-react";
import FlightItem from "./FlightItem";
const Flights = ({ data }) => {
  return (
    <div>
      <Grid columns={3}>
        <Grid.Row>
          {data.map((item) => (
            <Grid.Column key={item._id}>
              <FlightItem data={item} />
              <br />
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Flights;
