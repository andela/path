/* eslint import/no-unresolved: "off"*/
/* eslint import/no-extraneous-dependencies: "off"*/
import React, { PropTypes } from 'react';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Panel from 'muicss/lib/react/panel';
import src from '../../images/logo6.png';
import './style.css';


const LogIn = (props) => {
  return (
    <Row>
      <Col lg="8" lg-offset="2" sm="12" xs="12" className="introDiv">
        <Col className="mui--pull-left" lg="4">
          <div className="vcenter">
            <br /><br />
            <Col lg="2" sm="12" xs="12" className="introText mui--text-center">
              <p>WELCOME TO PATH </p>
            </Col>
          </div>
        </Col>
        <Col lg="7" sm="12" xs="12" className="mui--pull-right introDiv">
          <Panel className="panel">
            <Col lg="12" className="mui--visible-xl-block mui--visible-lg-block">
              <img className="signinLogo" src={src} alt="logo" />
            </Col>
            <Form onSubmit={props.onSubmit}>
              <Input hint="Email" name="email" />
              <Input hint="Password" type="password" name="password" />
              <Button variant="raised" className="mui--pull-right" color="primary">login</Button>
            </Form>
          </Panel>
        </Col>
      </Col>
    </Row>
  );
};

LogIn.propTypes = {
  onSubmit: PropTypes.func
};

module.exports = LogIn;