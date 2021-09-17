import React from "react";
import { Header, Icon, List, Checkbox } from "semantic-ui-react";
import classes from "./home.module.css";
const Filter = () => {
  return (
    <div>
      <Header as="h3" className={classes.center}>
        <Icon name="filter" />
        Filter content
      </Header>
      <div className={classes.listItem}>
        <List>
          <List.Item>
            <List.Header>Class:</List.Header>
            <List.List>
              <List.Content>
                <Checkbox label="Business" />
              </List.Content>
              <List.Content>
                <Checkbox label="Economy" />
              </List.Content>
            </List.List>
          </List.Item>
        </List>
      </div>
    </div>
  );
};

export default Filter;
