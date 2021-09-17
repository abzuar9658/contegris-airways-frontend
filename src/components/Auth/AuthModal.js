import React from "react";
import { Button, Modal } from "semantic-ui-react";
import Login from "./Login";
import Register from "./Register";
import { Link } from "react-router-dom";

function AuthModal({ component, color, type, name, redirect }) {
  const [open, setOpen] = React.useState(false);
  const toggleModal = () => {
    setOpen((prevState) => !prevState);
  };
  return (
    <Modal
      closeIcon
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        type === "link" ? (
          <Link to="">{component}</Link>
        ) : (
          <Button color={color ? color : "blue"}>
            {name ? name : component}
          </Button>
        )
      }
    >
      {console.log(redirect)}
      <Modal.Header>{component}</Modal.Header>
      <Modal.Content>
        {component === "Login" ? (
          <Login toggleModal={toggleModal} redirect={redirect} />
        ) : null}
        {component === "Register" ? (
          <Register toggleModal={toggleModal} />
        ) : null}
      </Modal.Content>
    </Modal>
  );
}

export default AuthModal;
