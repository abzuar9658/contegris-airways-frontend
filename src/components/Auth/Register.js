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

const Register = () => {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [passwordConfirmation, setpasswordConfirmation] = useState("");
  const [errors, seterrors] = useState([]);
  const [loading, setloading] = useState(false);

  const isFormValid = () => {
    let errors = [];
    let error;

    if (isFormEmpty()) {
      error = { message: "Fill in all fields" };
      seterrors(errors.concat(error));
      return false;
    } else if (!isPasswordValid()) {
      error = { message: "Password is invalid" };
      seterrors(errors.concat(error));
      return false;
    } else {
      return true;
    }
  };

  const isFormEmpty = () => {
    return (
      !username.length ||
      !email.length ||
      !password.length ||
      !passwordConfirmation.length
    );
  };

  const isPasswordValid = () => {
    if (password.length < 6 || passwordConfirmation.length < 6) {
      return false;
    } else if (password !== passwordConfirmation) {
      return false;
    } else {
      return true;
    }
  };

  const displayErrors = (errors) =>
    errors.map((error, i) => <p key={i}>{error.message}</p>);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid()) {
      seterrors([]);
      setloading(true);
    }
  };
  const handleInputError = (errors, inputName) => {
    return errors.some((error) =>
      error.message.toLowerCase().includes(inputName)
    )
      ? "error"
      : "";
  };

  return (
    <Grid textAlign="center" verticalAlign="middle" className="app">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h1" icon color="orange" textAlign="center">
          <Icon name="puzzle piece" color="orange" />
          Register for Contegris Airways
        </Header>
        <Form onSubmit={handleSubmit} size="large">
          <Segment stacked>
            <Form.Input
              fluid
              name="username"
              icon="user"
              iconPosition="left"
              placeholder="Username"
              onChange={(event) => setusername(event.target.value)}
              value={username}
              type="text"
            />

            <Form.Input
              fluid
              name="email"
              icon="mail"
              iconPosition="left"
              placeholder="Email Address"
              onChange={(event) => setemail(event.target.value)}
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
              onChange={(event) => setpassword(event.target.value)}
              value={password}
              className={handleInputError(errors, "password")}
              type="password"
            />

            <Form.Input
              fluid
              name="passwordConfirmation"
              icon="repeat"
              iconPosition="left"
              placeholder="Password Confirmation"
              onChange={(event) => setpasswordConfirmation(event.target.value)}
              value={passwordConfirmation}
              className={handleInputError(errors, "password")}
              type="password"
            />

            <Button
              disabled={loading}
              className={loading ? "loading" : ""}
              color="orange"
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
          Already a user? <Link to="/login">Login</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default Register;
