import React from "react";
import { Form } from "react-bootstrap";

const SignupInput = (props) => {
  return (
    <Form.Control
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      onChange={props.handleChange}
    />
  );
};
export default SignupInput;
