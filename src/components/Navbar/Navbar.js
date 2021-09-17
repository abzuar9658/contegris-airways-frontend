import React, { Fragment, useState, useEffect } from "react";
import "./layout.css";
import { Link, useHistory } from "react-router-dom";
import AuthModal from "../Auth/AuthModal";
import { Button, Image, Icon } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../actions";

const Navbar = () => {
  const history = useHistory();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [isloggedin, setisloggedin] = useState(false);
  useEffect(() => {
    console.log("Navabar rendered!!!");
    setisloggedin(auth.isSuccess);
  }, [auth]);

  const handleLogoutClick = () => {
    localStorage.removeItem("token");
    dispatch(logout());
    history.push("/");
  };

  return (
    <div>
      <ul className="container">
        <div className="item1">
          <Link to="/">
            <Image
              src={window.location.origin + "/logo.png"}
              size="small"
              circular
            />
          </Link>
          <Link>
            <h2 className="navbar-heading">Contegris Airways</h2>
          </Link>
        </div>
        <div className="item2">
          <Link to="/">
            <Button>Home</Button>
          </Link>
          {!isloggedin && !localStorage.getItem("token") ? (
            <React.Fragment>
              <AuthModal component="Login" />
              <AuthModal component="Register" color="red" />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Button color="red" onClick={handleLogoutClick}>
                LOGOUT
              </Button>
              <span>{"   "}</span>
              <Icon name="user outline" />
              {auth &&
                auth.data &&
                auth.data.data &&
                auth.data.data.user.userName.toUpperCase()}
            </React.Fragment>
          )}
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
