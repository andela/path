/* eslint import/no-unresolved: "off"*/
/* eslint import/no-extraneous-dependencies: "off"*/
import React, { PropTypes } from 'react';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Panel from 'muicss/lib/react/panel';
import src from '../images/MainLogo.png';
import './style.css';


const SignUp = (props) => {
  return (

    <Row>
      <Col lg="8" sm="12" xs="12" className="introDiv">
        <Col className="mui--pull-left" lg="4">
          <div className="vcenter">
            <Col lg="12" className="mui--visible-xl-block mui--visible-lg-block">
              <img className="mui--pull-right logo" src={src} alt="logo" />
            </Col>
            <Col>
              <h1 className="mui--text-center">Register</h1>
            </Col>
          </div>
        </Col>
        <Col lg="7" sm="12" xs="12" className="mui--pull-right introDiv">
          <Panel className="panel">
            <Form onSubmit={props.onSubmit}>
              <Input hint="First Name" name="first_name" />
              <Input hint="Last Name" name="last_name" />
              <Input hint="Email" name="email" />
              <Input hint="Password" type="password" name="password" />
              <Input hint="Confirm Password" type="password" name="confirm_password" />
              <Button variant="raised" className="mui--pull-right" color="primary">register</Button>
            </Form>
          </Panel>
        </Col>
      </Col>
    </Row>
  );
};

SignUp.propTypes = {
  onSubmit: PropTypes.func
};

module.exports = SignUp;
