import React, { useState } from "react";
import {
  Grid,
  Form,
  Segment,
  Button,
  Header,
  Message,
  Icon,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import classes from "./style.module.css";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [errors, seterrors] = useState([]);
  const [loading, setloading] = useState(false);

  const displayErrors = (errors) =>
    errors.map((error, i) => <p key={i}>{error.message}</p>);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid()) {
      seterrors([]);
      setloading(true);
    }
  };

  const isFormValid = () => email && password;

  const handleInputError = (errors, inputName) => {
    return errors.some((error) =>
      error.message.toLowerCase().includes(inputName)
    )
      ? "error"
      : "";
  };

  return (
    <Grid
      textAlign="center"
      verticalAlign="middle"
      className={classes.background}
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h1" icon color="violet" textAlign="center">
          <Icon name="code branch" color="violet" />
          Login to Contegris Airways
        </Header>
        <Form onSubmit={handleSubmit} size="large" autoComplete="off">
          <Segment stacked>
            <Form.Input
              fluid
              name="email"
              icon="mail"
              iconPosition="left"
              placeholder="Email Address"
              onChange={(event) => {
                setemail(event.target.value);
              }}
              value={email}
              className={handleInputError(errors, "email")}
              type="email"
            />

            <Form.Input
              fluid
              name="password"
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              onChange={(event) => {
                setpassword(event.target.value);
              }}
              value={password}
              className={handleInputError(errors, "password")}
              type="password"
            />

            <Button
              disabled={loading}
              className={loading ? "loading" : ""}
              color="violet"
              fluid
              size="large"
            >
              Submit
            </Button>
          </Segment>
        </Form>
        {errors.length > 0 && (
          <Message error>
            <h3>Error</h3>
            {displayErrors(errors)}
          </Message>
        )}
        <Message>
          Don't have an account? <Link to="/register">Register</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default Login;
