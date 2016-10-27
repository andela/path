/* eslint import/no-unresolved: "off"*/
/* eslint import/no-extraneous-dependencies: "off"*/
import React from 'react';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Panel from 'muicss/lib/react/panel';
import src from 'file!../images/logo6.png';
import './style.css';


const SignUp = () => {
  return (

    <Row>
      <Col lg="8" sm="12" xs="12" className="introDiv">
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
            <Form>
              <Input hint="Email" />
              <Input hint="Password" type="password" />
              <Button>signup</Button>
              <Button variant="raised" className="mui--pull-right" color="primary">login</Button>
            </Form>
          </Panel>
        </Col>
      </Col>
    </Row>
  );
};

module.exports = SignUp;