import React from "react";
import { Button } from "react-bootstrap";

const SignupButton = (props) => {
  return (
    <Button
      variant={props.variant}
      type={props.type}
      className={props.className}
      disabled={props.isDisabled}
    >
      {props.label}
    </Button>
  );
};
export default SignupButton;
