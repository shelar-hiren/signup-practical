import React from "react";
import { Tab, Nav, Container } from "react-bootstrap";
import SignupForm from "../../Components/SignupForm";
import "./Register.css";

const Register = () => {
  return (
    <div>
      <Container>
        <div className="signup-contain">
          <Tab.Container id="signup-contain" defaultActiveKey="fanTab">
            <Nav variant="pills" className="tabs-navs">
              <Nav.Item>
                <Nav.Link eventKey="fanTab">FAN SIGNUP</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="talentTab">TLENT SIGNUP</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="fanTab">
                <SignupForm formType="fan" />
              </Tab.Pane>
              <Tab.Pane eventKey="talentTab">
                <SignupForm formType="talent" />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </Container>
    </div>
  );
};
export default Register;
