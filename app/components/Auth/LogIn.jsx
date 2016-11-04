import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Paper from 'material-ui/Paper';
import src from '../../images/logo6.png';
import './style.css';

const LogIn = (props) => {
  return (
    <Row className="centerblock">
      <Col lg="9" sm="12" xs="12" className="introDiv">
        <Col className="mui--pull-left" lg="4">
          <div className="vcenter">
            <br /><br />
            <Col lg="2" sm="12" xs="12" className="introText mui--text-center">
              <p>WELCOME TO PATH </p>
            </Col>
          </div>
        </Col>
        <Col lg="7" sm="12" xs="12" className="mui--pull-right introDiv">
          <Paper className="panel">
            <Col lg="12" className="mui--visible-xl-block mui--visible-lg-block">
              <img className="signinLogo" src={src} alt="logo" />
            </Col>
            <form onSubmit={props.onSubmit}>
              <TextField fullWidth hintText="Email" name="email" />

              <TextField fullWidth hintText="Password" type="password" name="password" />

              <FlatButton
                href="/signup"
                type="button"
                style={{ marginTop: '30px' }}
                primary
                label="Signup"
              />
              <RaisedButton
                type="submit"
                style={{ marginTop: '30px', float: 'right' }}
                primary
                label="Login"
              />
            </form>
          </Paper>
        </Col>
      </Col>
    </Row>
  );
};

LogIn.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
};

module.exports = LogIn;
