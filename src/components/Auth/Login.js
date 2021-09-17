import React, { useState, useEffect } from "react";
import {
  Grid,
  Form,
  Segment,
  Button,
  Header,
  Message,
  Icon,
} from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../actions/index";
import classes from "./style.module.css";
import AuthModal from "./AuthModal";

const Login = ({ toggleModal, redirect }) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [errors, seterrors] = useState([]);
  const [loading, setloading] = useState(false);
  const [success, setsuccess] = useState(false);
  const history = useHistory();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (auth.isSuccess) {
      setsuccess(true);
      setloading(false);
      if (auth.data) {
        localStorage.setItem("token", auth.data.token);
      }
      setTimeout(() => {
        toggleModal();
        console.log(redirect);
        if (redirect) history.push(redirect);
      }, 500);
    }
    if (auth.isError) {
      let errors = [];
      let error;
      error = { message: auth.errorMessage };
      seterrors(errors.concat(error));
      setloading(false);
      setTimeout(() => {
        seterrors([]);
      }, 2000);
    }
  }, [auth]);
  const displayErrors = (errors) =>
    errors.map((error, i) => (
      <p key={i}>
        {error.message.includes("401")
          ? "Invalid email or password"
          : error.message}
      </p>
    ));

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid()) {
      seterrors([]);
      setloading(true);
      dispatch(login({ email, password }));
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
        {success ? <Message success>Login Success</Message> : null}
        <Message>
          Dont't have an account? <AuthModal component="Register" type="link" />
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default Login;
