import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Paper from 'material-ui/Paper';
import src from '../../images/MainLogo.png';
import './style.css';

const SignUp = (props) => {
  return (
    <Row className="centerblock">
      <Col lg="8" lg-offset="2" sm="12" xs="12" className="introDiv">
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
          <Paper className="panel">

            <form onSubmit={props.onSubmit}>
              <TextField fullWidth hintText="First Name" name="first_name" />
              <TextField fullWidth hintText="Last Name" name="last_name" />
              <TextField fullWidth hintText="Email" name="email" />
              <TextField fullWidth hintText="Password" type="password" name="password" />
              <TextField fullWidth hintText="Confirm Password" type="password" name="confirm_password" />

              <FlatButton
                href="/logIn"
                type="button"
                style={{ marginTop: '30px' }}
                primary
                label="Login"
              />

              <RaisedButton
                primary
                style={{ marginTop: '30px', float: 'right' }}
                type="submit"
                label="Register"
              />

            </form>
          </Paper>
        </Col>
      </Col>
    </Row>
  );
};

SignUp.propTypes = {
  onSubmit: PropTypes.func
};

module.exports = SignUp;
