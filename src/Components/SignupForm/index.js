import React, { useState } from "react";
import { Form } from "react-bootstrap";
import filter from "lodash/filter";
import SignupInput from "../SignupInput";
import SignupButton from "../SignupButton";
import { registration } from "../../Containers/Register/action";
import { emailValidate, passwordValidate } from "../../utils";

const SignupForm = (props) => {
  const { formType } = props;
  const [termCondtion, setTermCondtion] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState({});

  const [signupForm, setSignupForm] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
  });

  const formValidName = {
    first_name: "First Name",
    last_name: "Last Name",
    username: "Username",
    email: "Email",
    password: "Password",
  };

  const validationForm = (name, value) => {
    let errorMsg = {};
    filter(signupForm, (field, fieldKey) => {
      const validation = formValidName[fieldKey];
      if (fieldKey === name) {
        if (value === "") {
          errorMsg = {
            ...errorMessage,
            [fieldKey]: `${validation} is required`,
          };
        } else if (fieldKey === "email") {
          const isEmailValid = emailValidate(value);
          if (!isEmailValid) {
            errorMsg = {
              ...errorMessage,
              [fieldKey]: "Email is not valid!",
            };
          } else {
            errorMsg = {
              ...errorMessage,
              [fieldKey]: ``,
            };
          }
        } else if (fieldKey === "password") {
          const isPasswordValid = passwordValidate(value);
          if (!isPasswordValid) {
            errorMsg = {
              ...errorMessage,
              [fieldKey]:
                "Password length must be in between 6 to 8 character!",
            };
          } else {
            errorMsg = {
              ...errorMessage,
              [fieldKey]: ``,
            };
          }
        } else {
          errorMsg = {
            ...errorMessage,
            [fieldKey]: ``,
          };
        }
      }
    });
    return errorMsg;
  };

  const onChangeHeadler = (e) => {
    const { name, value } = e.target;
    const errorMsgs = validationForm(name, value);
    setSignupForm({ ...signupForm, [name]: value });
    setErrorMessage({ ...errorMsgs });
  };

  const handleTermsAndCondition = (e) => {
    setTermCondtion(!termCondtion);
    setIsDisabled(termCondtion);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    let errorMsg = {};
    let isFormValid = true;
    filter(signupForm, (field, fieldKey) => {
      const formErrorMsg = validationForm(fieldKey, field);
      errorMsg = { ...formErrorMsg, ...errorMsg };
    });
    setErrorMessage(errorMsg);
    if (
      errorMsg.first_name ||
      errorMsg.last_name ||
      errorMsg.username ||
      errorMsg.email ||
      errorMsg.password
    ) {
      isFormValid = false;
    }
    if (isFormValid) {
      registration(formType, signupForm).then((resp) => {
        if (resp.status === 201) {
          setSignupForm({
            first_name: "",
            last_name: "",
            username: "",
            email: "",
            password: "",
          });
        }
      });
    }
  };

  return (
    <div>
      <Form onSubmit={onSubmitForm}>
        <h2>Create Your {formType === "fan" ? "Fan" : "Talent"} Account</h2>
        <Form.Group className="form-input" id="formFirstname">
          <Form.Label>First Name*</Form.Label>
          <SignupInput
            name="first_name"
            type="text"
            value={signupForm.first_name}
            placeholder="First Name"
            handleChange={onChangeHeadler}
          />
          <Form.Text className="text-danger">
            {errorMessage.first_name}
          </Form.Text>
        </Form.Group>
        <Form.Group className="form-input" id="formLastname">
          <Form.Label>Last Name*</Form.Label>
          <SignupInput
            name="last_name"
            type="text"
            value={signupForm.last_name}
            placeholder="Last Name"
            handleChange={onChangeHeadler}
          />
          <Form.Text className="text-danger">
            {errorMessage.last_name}
          </Form.Text>
        </Form.Group>
        <Form.Group className="form-input" id="formUsername">
          <Form.Label>Username*</Form.Label>
          <SignupInput
            name="username"
            type="text"
            value={signupForm.username}
            placeholder="Username"
            handleChange={onChangeHeadler}
          />
          <Form.Text className="text-danger">{errorMessage.username}</Form.Text>
        </Form.Group>
        <Form.Group className="form-input" id="formEmail">
          <Form.Label>Email*</Form.Label>
          <SignupInput
            name="email"
            type="text"
            value={signupForm.email}
            placeholder="Email"
            handleChange={onChangeHeadler}
          />
          <Form.Text className="text-danger">{errorMessage.email}</Form.Text>
        </Form.Group>
        <Form.Group className="form-input" id="formPassword">
          <Form.Label>Password*</Form.Label>
          <SignupInput
            name="password"
            type="password"
            value={signupForm.password}
            placeholder="Password"
            handleChange={onChangeHeadler}
          />
          <Form.Text className="text-danger">{errorMessage.password}</Form.Text>
        </Form.Group>
        <Form.Group className="form-input" id="formCheckbox">
          <Form.Label className="checkbox-input">
            <Form.Control
              type="checkbox"
              id="checkBox"
              onChange={handleTermsAndCondition}
              checked={termCondtion}
            />
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
              </svg>
            </span>
            <p className="agree-contain">
              I agree to the
              <a href="#" className="term-and-condition">
                Terms and Conditions.
              </a>
            </p>
          </Form.Label>
        </Form.Group>

        <div className="text-center">
          <SignupButton
            type="submit"
            variant="primary"
            className="btn-submit"
            label={"SIGN UP"}
            isDisabled={isDisabled}
          />
        </div>
      </Form>
    </div>
  );
};

export default SignupForm;
